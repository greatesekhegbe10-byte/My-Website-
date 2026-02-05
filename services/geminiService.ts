import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { CONTACT_INFO, INITIAL_PRODUCTS } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

// Construct a system prompt that gives the AI context about the business
const systemInstruction = `
You are the AI Assistant for Alex Tech Enterprise.
We are a premier digital agency founded by Great Alex Esekhegbe, specializing in Website Design, Cybersecurity Solutions, and Fintech SaaS.
Your goal is to help customers understand our services, suggest packages, and provide contact details.
You can also generate images if the user explicitly asks for them (e.g. "generate a logo", "create an image of a secure server").

Key Information:
- Founder: Great Alex Esekhegbe (Full-Stack Engineer & Cybersecurity Expert)
- Email: ${CONTACT_INFO.email}
- WhatsApp/Phone: ${CONTACT_INFO.whatsapp}
- Location: ${CONTACT_INFO.address}

We offer the following services/products:
${INITIAL_PRODUCTS.map(p => `- ${p.name} (${p.category}): ${p.description}`).join('\n')}

Guidelines:
1. Be professional, knowledgeable, and reassuring regarding security topics.
2. If asked about prices, provide the price in Nigerian Naira (NGN).
3. If a user needs a custom quote or a specific service, direct them to contact us via WhatsApp or Email.
4. Keep answers short (under 100 words) unless detailed technical explanation is needed.
`;

export interface GeminiResponse {
  text: string;
  image?: string;
}

export const sendMessageToGemini = async (
  message: string,
  history: { role: string; parts: { text: string }[] }[]
): Promise<GeminiResponse> => {
  if (!apiKey) {
    return { text: "I'm sorry, my connection to the server (API Key) is missing. Please contact the administrator." };
  }

  // Check for image generation keywords
  const imageKeywords = /generate image|create an image|draw|make an image|generate a logo/i;
  
  if (imageKeywords.test(message)) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: message }]
        },
        config: {
           imageConfig: {
             aspectRatio: "1:1"
           }
        }
      });

      let imageUrl: string | undefined;
      let textResponse = "Here is the image you requested.";

      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
          } else if (part.text) {
             textResponse = part.text;
          }
        }
      }

      if (imageUrl) {
        return { text: textResponse, image: imageUrl };
      } else {
         return { text: "I tried to generate an image but something went wrong. Please try a different prompt." };
      }

    } catch (error) {
      console.error("Gemini Image Gen Error:", error);
      return { text: "I encountered an issue generating the image. Please try again later." };
    }
  }

  // Standard Text Chat
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction,
      },
      history: history, 
    });

    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return { text: result.text || "I didn't catch that. Could you please repeat?" };
  } catch (error) {
    console.error("Gemini API Error:", error);
    return { text: "I'm having trouble connecting right now. Please try again later or contact us directly on WhatsApp." };
  }
};