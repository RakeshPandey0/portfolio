import { Utensils, Link, FileText, Book } from "lucide-react";

export const projects = [
    {
      title: "Minechant",
      description:
        "A web application that calculates the optimal enchantment order for Minecraft items.",
      icon: Book,
      technologies: ["Next,js", "Redux Toolkit", "GROQ", "TailwindCSS"],
      highlights: [
        "Item based enchantment selection.",
        "Item, enchantment and enchantment order state stored using Redux.",
        "Responsive UI and seamless user interaction.",
      ],
      github: "https://github.com/RakeshPandey0/Minechant",
      demo: "https://minechant.vercel.app",
    },
    {
      title: "Quick-Dine",
      description:
        "QR-based order management system for restaurants. Customers can scan QR codes to view menus, place orders, and handle billing seamlessly.",
      icon: Utensils,
      technologies: ["Next.js", "MongoDB", "Tailwind CSS", "Git"],
      highlights: ["QR-based ordering", "Real-time updates", "Secure backend"],
      github: "https://github.com/RakeshPandey0/QuickDine",
      demo: "https://quickdine.vercel.app/",
    },
    {
      title: "SnapLink",
      description:
        "URL shortener service with JWT-based authentication. Built with Node.js and MongoDB for efficient URL mapping and retrieval.",
      icon: Link,
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      highlights: ["JWT authentication", "URL mapping", "Dynamic rendering"],
      github: "https://github.com/RakeshPandey0/SnapLink",
      demo: "https://snaplink-mj5h.onrender.com/",
    },
    {
      title: "Postly",
      description:
        "Blog application with server-side rendering using EJS templating engine. Features image upload capabilities with Multer.",
      icon: FileText,
      technologies: ["Node.js", "Express", "MongoDB", "EJS"],
      highlights: ["Server-side rendering", "Image upload", "Blog management"],
      github: "https://github.com/RakeshPandey0/Postly",
      demo: "https://postly-qgtq.onrender.com/",
    },
  ];