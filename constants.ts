import { Category, Product } from './types';

export const CONTACT_INFO = {
  whatsapp: '08072760199',
  whatsappLink: 'https://wa.me/2348072760199', 
  email: 'great.esekhegbe10@gmail.com', // Updated from resume
  address: 'Lagos, Nigeria / Lisbon, Portugal', // Updated from resume context
  phone: '08072760199',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61583417886622',
    twitter: 'https://x.com/esekhegbe70321?s=21'
  }
};

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Corporate Branding & Website",
    category: Category.WEB_DESIGN,
    price: 150000,
    description: "Complete professional website design with brand identity integration and responsive React interfaces.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    features: ["Responsive React.js Design", "SEO Basic Setup", "5 Pages", "CMS Integration"]
  },
  {
    id: 2,
    name: "Enterprise Security Audit",
    category: Category.CYBERSECURITY,
    price: 250000,
    description: "Comprehensive vulnerability assessment, penetration testing, and API security hardening.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    features: ["Vulnerability Scan", "Penetration Testing", "API Security", "Risk Mitigation"]
  },
  {
    id: 3,
    name: "Fintech SaaS Platform",
    category: Category.SOFTWARE,
    price: 550000,
    description: "Secure subscription-based platform with payment gateway integration (Paystack/Flutterwave).",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800",
    features: ["Secure Payments", "User Tiers", "Dashboard Analytics", "Admin Panel"]
  },
  {
    id: 4,
    name: "AI Customer Support Chatbot",
    category: Category.AI_SOLUTIONS,
    price: 120000,
    description: "Intelligent chatbot integrated into your website to handle customer queries 24/7.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    features: ["Natural Language Processing", "24/7 Availability", "Custom Knowledge Base", "Lead Capture"]
  },
  {
    id: 5,
    name: "Automated Trading Bot Logic",
    category: Category.SOFTWARE,
    price: 450000,
    description: "Custom automated trading algorithms for MT5 or binary options with risk management.",
    image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=800",
    features: ["MT5 Integration", "Risk Filters", "Backtesting Support", "Real-time Execution"]
  },
  {
    id: 6,
    name: "Cybersecurity Consultation",
    category: Category.CONSULTING,
    price: 80000,
    description: "Expert advice on security-first architecture, VPS hardening, and reduced attack surfaces.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    features: ["Architecture Review", "VPS Hardening", "Key Management", "Staff Training"]
  }
];