
import Work1 from "../../assets/projects/work01.png";
import Work2 from "../../assets/projects/work02.png";
import Work3 from "../../assets/projects/work03.png";
import Work4 from "../../assets/projects/work04.png";
import Work5 from "../../assets/projects/work05.png";
import Work6 from "../../assets/projects/work06.png";
import Work7 from "../../assets/projects/work07.png";
import Work8 from "../../assets/projects/work08.png";
import Work9 from "../../assets/projects/work09.png";
import Work10 from "../../assets/projects/work10.png";


export type ProjectType = {
    id: number;
    image: any;
    title: string;
    category: string;
    languages: string[];
    description: string;
    github: string;
    demo?: string;
  };

export const projectsData: ProjectType[] = [
  {
    id: 1,
    image: Work1,
    title: "Portfolio",
    category: "React",
    languages: ["Next.JS", "TypeScript ", "Tailwind"],
    description: "Mon portfolio personnel développé avec Next.JS. Ce site présente mes compétences, expériences et projets de manière interactive et moderne.",
    github: "https://github.com/Yoni-Deserbaix/Portfolio",
    demo: "https://yoni-deserbaix.github.io/Portfolio/",
  },
  {
    id: 10,
    image: Work10,
    title: "MyBlog",
    category: "React",
    languages: ["Next.JS", "TypeScript ", "Tailwind"],
    description: "Mon blog, construit avec Next.JS, est une plateforme où je partage mes articles, mes astuces et mes expériences personnelles dans divers domaines.",
    github: "https://github.com/Yoni-Deserbaix/myblog",
    demo: "https://yoni-deserbaix-my-blog.vercel.app/",
  },
  {
    id: 2,
    image: Work2,
    title: "CineQuik 🍿🎥",
    category: "React",
    languages: ["React", "JavaScript "],
    description: "Une application de cinéma intégrant l'API TMDB, développée avec React. Explorez des films et obtenez des informations détaillées.",
    github: "https://github.com/Yoni-Deserbaix/CineQuik",
    demo: "https://yoni-deserbaix.github.io/CineQuik/",
  },
  {
    id: 3,
    image: Work3,
    title: "World Flags Encyclopedia",
    category: "React",
    languages: ["React", "JavaScript"],
    description: "Interface web interactive pour explorer les drapeaux du monde, construite avec React. Découvrez des informations détaillées sur chaque pays et son drapeau.",
    github: "https://github.com/Yoni-Deserbaix/World-Flags-Encyclopedia",
    demo: "https://yoni-deserbaix.github.io/World-Flags-Encyclopedia/",

  },
  {
    id: 4,
    image: Work4,
    title: "FOODLAND 🍔",
    category: "HTML/CSS/JS",
    languages: ["HTML", "SASS", "JavaScript"],
    description: "Une landing page attrayante pour le restaurant FOODLAND, développée avec SASS. Explorez les plats et découvrez les spécialités du restaurant.",
    github: "https://github.com/Yoni-Deserbaix/FOODLAND",
    demo: "https://yoni-deserbaix.github.io/FOODLAND/",
  },
  {
    id: 5,
    image: Work5,
    title: "GTA VI Landing page 🦩",
    category: "HTML/CSS/JS",
    languages: ["HTML", "CSS", "JavaScript"],
    description: "Une landing page exclusive pour le jeu vidéo très attendu, Grand Theft AUTO VI. Découvrez des informations sur le jeu vidéo et sur la sortie.",
    github: "https://github.com/Yoni-Deserbaix/GTA-VI-Landing-Page",
    demo: "https://yoni-deserbaix.github.io/GTA-VI-Landing-Page/",
  },
  {
    id: 6,
    image: Work6,
    title: "Shooting Game 🧟",
    category: "Mini projets JS",
    languages: ["HTML", "CSS", "JavaScript"],
    description: "Un jeu de tir divertissant avec un chronomètre et des bonus de temps. Testez vos compétences en visée et essayez d'obtenir le meilleur score.",
    github: "https://github.com/Yoni-Deserbaix/Shooting-Game-JS",
    demo: "https://yoni-deserbaix.github.io/Shooting-Game-JS/",
  },
  {
    id: 7,
    image: Work7,
    title: "Password Generator 🔐",
    category: "Mini projets JS",
    languages: ["HTML", "CSS", "JavaScript"],
    description: "Créez des mots de passe robustes en un clic avec ce générateur de mots de passe. Choisissez la longueur pour répondre à vos besoins de sécurité.",
    github: "https://github.com/Yoni-Deserbaix/Password-Generator",
    demo: "https://yoni-deserbaix.github.io/Password-Generator/",
  },
  // {
  //   id: 8,
  //   image: Work8,
  //   title: "Weather App ⛅",
  //   category: "Mini projets JS",
  //   languages: ["Node.js", "Express.js", "JavaScript"],
  //   description: "Une application météo réalisée sur un serveur Express avec Node.js. Obtenez des prévisions précises et actualisées pour votre emplacement.",
  //   github: "https://github.com/Yoni-Deserbaix/WeatherAPI-App",
  // },
  // {
  //   id: 9,
  //   image: Work9,
  //   title: "Password Monkey 🐵🙈",
  //   category: "Mini projets JS",
  //   languages: ["HTML", "CSS", "JavaScript"],
  //   description: "Un mini formulaire amusant qui chiffre le texte lorsque le bouton est cliqué. Jouez avec des mots de passe cryptés de manière ludique.",
  //   github: "https://github.com/Yoni-Deserbaix/Password-Monkey",
  //   demo: "https://yoni-deserbaix.github.io/Password-Monkey/",
  // },
];

export const projectsNav = [
  {
    name: "Tout",
  },
  {
    name: "React",
  },
  {
    name: "HTML/CSS/JS",
  },
  {
    name: "Mini projets JS",
  },
];