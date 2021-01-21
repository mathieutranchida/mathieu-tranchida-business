export const en = {
  currentLanguage: "english",
  header: {
    bio: "Bio",
    education: "Education",
    skills: "Skills",
    projects: "Portfolio",
    workExperience: "Work Experience",
    contact: "Contact",
  },
  introHeader: "Find out more about Mathieu Tranchida!",
  bio: {
    mainText:
      "Hello! My name is Mathieu Tranchida, I'm 23 years old and I'm a web developer.",
    secondaryText:
      "Originally from France and Switzerland, I moved to Canada to complete my university studies and I am now looking for a full-time opportunity.",
    secondaryTextReturn:
      "My business, artistic and technical skills make me a unique and versatile prospect for your projects.",
  },
  education: {
    title: "Education",
    schools: [
      {
        program: "Diploma in Full-Stack Web Development",
        schoolName: "Concordia University / Concordia Bootcamps",
        date: "Fall 2020",
      },
      {
        program: "Bachelor of Commerce - Management & International Business",
        schoolName: ["Concordia University", "John Molson School of Business"],
        date: "Fall 2016 - Winter 2020",
      },
      {
        program: "French Baccalaureate - Economic & Social Studies",
        schoolName: "Lycée Français de Zürich",
        honnors: `Honnors: "Très bien"`,
        date: "Fall 2013 - Summer 2016",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitles: {
      webDevelopment: "Web Development",
      contentCreation: "Content Creation",
      language: "Languages",
    },
  },
  projects: {
    title: "Portfolio",
    projects: [
      {
        title: "E-Commerce Photography Website",
        techUsedTitle: "Technologies used:",
        techUsedContent:
          " React, Javascript, Redux, Node.js, CSS, MongoDB, Stripe, Email.js, Cloudinary, Bcrypt, Json Web Tokens",
        timeFrameTitle: "Time frame:",
        timeFrameContent: " 14 days",
        seeGitHub: "See GitHub repository",
        seeDemo: "See the demo",
        descriptionTitle: "Description:",
        description: [
          "Created a fully responsive e-commerce application with a functioning store, cart, payment, order confirmation, and admin portal features.",
          "The store offers a variety of images that can be bought in different sizes and types of paper. Each cart is saved on a MongoDB database and can be retrieved using a unique ID assigned to each user's local storage. The payment system was created using Stripe. On payment, the user is redirected to the order confirmation page if the payment succeeds or to an error page if the payment fails.",
          "The admin portal gives the admin the possibility to create, update, and delete products. The portal is protected with a login portal that uses Bcrypt and Json Web Token to secure the user's authentication. If logged out, the admin can't access protected routes and perform protected actions. While logged in, the user can see every order made to the website and modify their status (received, processing, fulfilled, etc.).",
        ],
      },
      {
        title: "Vincent Authier Website",
        techUsedTitle: "Technologies used:",
        techUsedContent:
          " React, Javascript, HTML, CSS, Email.js, GSAP, ScrollTriggers",
        timeFrameTitle: "Time frame:",
        timeFrameContent: " 7 days",
        seeGitHub: "See GitHub repository",
        seeDemo: "See the demo",
        descriptionTitle: "Description:",
        description: [
          "Created a landing page intended to present Vincent Authier as an athlete and put him in relation with potential sponsors and clients.",
          "This app is exclusively front-end and heavily based on GSAP and ScrollTriggers animations. The text reveals itself as you scroll down on the website. The website's sides are made of continuous text moving up and down as the user scrolls (animated using GSAP). The gallery is made with a CSS grid and is fully responsive to the smartphone size.",
        ],
      },
      {
        title: "Concordia Bootcamps' Projects",
        techUsedTitle: "Technologies used:",
        techUsedContent:
          " React, Redux, JavaScript, CSS, HTML, Node.js, MongoDB, GitHub, & more",
        seeGitHub: "See my GitHub for more information",
        descriptionTitle: "Description:",
        description: [
          "While completing my diploma at Concordia Bootcamps, I worked on multiple solo projects, as well as one team project. Those projects include a Twitter clone (Frontend | Solo), a Flight booking app (Frontend & Backend | Solo), a Javascript game (Frontend | Solo) and an e-commerce web app (Frontend & Backend | Team of 3).",
        ],
      },
      {
        title: "See photography portfolio",
      },
      {
        title: "See design portfolio",
      },
    ],
  },
  workExperience: {
    title: "Work Experience",
    jobs: [
      {
        company: "Freelance photographer",
        jobTitle: "Photographer | 2017 - Now | Canada, Switzerland, France",
        description: [
          "I've been working as a freelance photographer for four years on the side of my studies and other activities. While it started as a passion, it gave me the opportunity to work with global companies and some of the best athletes in the world.",
          `In that time, I mainly worked on commercial and editorial projects. My client roaster includes Arc'teryx, Allez-Up, Jackalope, Psicobloc, iF3, and 686. I have also been published in L'Équipe, Skipass, Gripped Magazine, The Ski Journal, and Downdays. Key takeaways from this experience are my ability to take calculated risks, perform well under pressure, and high standards for what I consider "good work". See my photo portfolio in the "Portfolio" section.`,
        ],
      },
      {
        company: "Arc'teryx Montréal",
        jobs: [
          {
            jobTitle: "Content Creator | 2017 - 2020 | Montreal, Canada",
            description: [
              "My role as a Content Creator for Arc'teryx Montreal store included the following responsibilities: Produce content for social media and marketing campaigns, Establish a creative direction aligned with the brand image.",
              "The type of media I produced for the marketing of the store included: photos, videos, and designs. Key takeaways from this experience are attention to detail and produce content in line with a brand image.",
            ],
          },
          {
            jobTitle: "Sales assistant | 2017 - 2019 | Montreal, Canada",
            description: [
              `While working as a Sales Assistant at Arc'teryx Montreal, I developed an extensive knowledge of the outdoor industry and outdoor technical clothing. I also learned to understand clients' needs and offered appropriate solutions. Extensive use of "Meerkat" selling technique. Teamwork, punctuality, and adaptation skills have been key takeaways of this experience.`,
            ],
          },
        ],
      },
      {
        company: "Concordia Ski & Snowboard Club",
        jobTitle: "President & VP Marketing | 2017 - 2019 | Montreal, Canada",
        description: [
          "The Concordia Ski & Snowboard Club is one of the most active clubs on campus with more than 500 active members and +20 events every year.",
          "I joined the club in 2017 as the VP of Marketing. My role was to come up with marketing strategies to sell tickets and produce the content for each trip.",
          "After a year in the position of VP Marketing, I was elected President of the club. My responsibilities included managing a team of six executives, overseeing finances, marketing, operations, and sponsorships. In the 18/19 season, along with my team, I planned and ran over 20 events, including 10-day trips and two weekenders, generating over $90,000 in sales revenue. We worked with external companies and sponsors such as Red Bull and Orage. Leadership and teamwork are key takeaways from this experience.",
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    description:
      "Feel free to contact me through the message box bellow or through my social media accounts (listed bellow)",
    email: "email",
    name: "name",
    message: "message",
    copyright: "Mathieu Tranchida - 2021 All rights Reserved ©",
    confirmation: "Your email has been sent!",
  },
  photoPortfolio: {
    title: "Photography portfolio",
    backToMain: "Home",
    designPortfolio: "Design",
  },
  designPortfolio: {
    title: "Design portfolio",
    backToMain: "Home",
    photoPortfolio: "Photography",
  },
};

export const fr = {
  currentLanguage: "french",
  header: {
    bio: "Bio",
    education: "Education",
    skills: "Compétences",
    projects: "Portfolio",
    workExperience: "Expérience",
    contact: "Contact",
  },
  introHeader: "En savoir plus sur Mathieu Tranchida!",
  bio: {
    mainText:
      "Bonjour! Je m'appelle Mathieu Tranchida, j'ai 23 ans et je suis développeur web.",
    secondaryText:
      "Originaire de France et de Suisse, j'ai déménagé au Canada pour faire mes études universitaires. Je suis maintenant à la recherche d'une opportunité à temps plein.",
    secondaryTextReturn:
      "Mes compétences commerciales, artistiques et techniques font de moi une perspective unique et polyvalente pour vos projets.",
  },
  education: {
    title: "Education",
    schools: [
      {
        program: "Diplôme en développement Web Full-Stack",
        schoolName: "Université Concordia / Concordia Bootcamps",
        date: "Automne 2020",
      },
      {
        program: "Baccalauréat en commerce - Gestion et commerce international",
        schoolName: ["Université Concordia", "John Molson School of Business"],
        date: "Automne 2016 - Hiver 2020",
      },
      {
        program: "Baccalauréat français - Etudes économiques et sociales",
        schoolName: "Lycée Français de Zürich",
        honnors: `Honneurs: "Très bien"`,
        date: "Automne 2013 - Été 2016",
      },
    ],
  },
  skills: {
    title: "Compétences",
    subtitles: {
      webDevelopment: "Développement Web",
      contentCreation: "Création de Contenu",
      language: "Langues",
    },
  },
  projects: {
    title: "Portfolio",
    projects: [
      {
        title: "Site Web de photographie - E-commerce",
        techUsedTitle: "Technologies utilisées:",
        techUsedContent:
          " React, Javascript, Redux, Node.js, CSS, MongoDB, Stripe, Email.js, Cloudinary, Bcrypt, Json Web Tokens",
        timeFrameTitle: "Délais:",
        timeFrameContent: " 14 Jours",
        seeGitHub: "Voir le code",
        seeDemo: "Voir la demo",
        descriptionTitle: "Description:",
        description: [
          "Création d'une application de commerce électronique entièrement réactive avec un magasin, un panier, un paiement, une confirmation de commande et des fonctionnalités de portail d'administration fonctionnels.",
          "Le magasin propose une variété d'images qui peuvent être achetées dans différents formats et types de papier. Chaque panier est enregistré dans une base de données MongoDB et peut être récupéré à l'aide d'un identifiant unique attribué au stockage local de chaque utilisateur. Le système de paiement a été créé à l'aide de Stripe . Lors du paiement, l'utilisateur est redirigé vers la page de confirmation de commande si le paiement réussit ou vers une page d'erreur si le paiement échoue.",
          "Le portail d'administration donne à l'administrateur la possibilité de créer, mettre à jour et supprimer des produits. Le portail est protégé par un portail de connexion qui utilise Bcrypt et Json Web Token pour sécuriser l'authentification de l'utilisateur. S'il est déconnecté, l'administrateur ne peut pas accéder à des routes protégées et effectuer des actions protégées. Une fois connecté, l'utilisateur peut voir toutes les commandes passées sur le site et modifier leurs statuts (reçu, en cours de traitement, exécuté, etc.).",
        ],
      },
      {
        title: "Site Web de Vincent Authier",
        techUsedTitle: "Technologies utilisées:",
        techUsedContent:
          " React, Javascript, HTML, CSS, Email.js, GSAP, ScrollTriggers",
        timeFrameTitle: "Délais:",
        timeFrameContent: " 7 Jours",
        seeGitHub: "Voir le code",
        seeDemo: "Voir la demo",
        descriptionTitle: "Description:",
        description: [
          "Création d'une page destinée à présenter Vincent Authier comme un athlète et à le mettre en relation avec des sponsors et clients potentiels.",
          `Cette application est exclusivement "frontend" et fortement basée sur des animations "GSAP" et "ScrollTriggers". Le texte se révèle lorsque vous faites défiler le site Web. Les côtés du site Web sont constitués d'un texte continu se déplaçant de haut en bas lorsque l'utilisateur fait défiler (animé à l'aide de GSAP). La galerie est faite avec une grille CSS et réagit à la taille de l'écran.`,
        ],
      },
      {
        title: "Projets Concordia Bootcamps",
        techUsedTitle: "Technologies utilisées:",
        techUsedContent:
          " React, Redux, JavaScript, CSS, HTML, Node.js, MongoDB, GitHub, & more",
        seeGitHub: "Voir mon GitHub pour plus d'information",
        descriptionTitle: "Description:",
        description: [
          "En complétant mon diplôme à Concordia Bootcamps, j'ai travaillé sur plusieurs projets solo, ainsi que sur un projet d'équipe. Ces projets incluent un clone Twitter (Frontend | Solo), une application de réservation de vol (Frontend & Backend | Solo), un jeu Javascript (Frontend | Solo) et une application Web de commerce électronique (Frontend & Backend | Équipe de 3).",
        ],
      },
      {
        title: "Voir portfolio de photographie",
      },
      {
        title: "Voir portfolio de design",
      },
    ],
  },
  workExperience: {
    title: "Expérience",
    jobs: [
      {
        company: "Photographe Indépendant",
        jobTitle: "Photographe | 2017 - Maintenant | Canada, Suisse, France",
        description: [
          "Je travaille comme photographe indépendant depuis quatre ans en parallèle de mes études et d'autres activités. Si cela a commencé comme une passion, cela m'a donné l'opportunité de travailler avec des entreprises mondiales et certains des meilleurs athlètes au monde.",
          `J'ai principalement travaillé sur des projets commerciaux et éditoriaux. Ma liste de clients comprend des compagnies comme Arc'teryx, Allez-Up, Jackalope, Psicobloc, iF3 et 686. J'ai également été publié dans des magazines de renommé international comme L'Équipe, Skipass, Gripped Magazine, The Ski Journal et Downdays. Les principaux points à retenir de cette expérience sont ma capacité à prendre des risques calculés, à bien performer sous pression et à respecter des normes élevées pour ce que je considère comme un «bon travail». Voir mon portfolio photographique dans la section "Portfolio".`,
        ],
      },
      {
        company: "Arc'teryx Montréal",
        jobs: [
          {
            jobTitle: "Créateur de contenu | 2017-2020 | Montréal Canada",
            description: [
              "Mon rôle en tant que créateur de contenu pour la boutique Arc'teryx à Montréal comprenait les responsabilités suivantes: Produire du contenu de qualité pour les médias sociaux et les campagnes de marketing. Je devais également établir une direction créative alignée avec l'image de la marque.",
              "Le type de média que j'ai produit pour le marketing du magasin comprenait: des photos, des vidéos et des designs. Les principaux points à retenir de cette expérience sont le souci du détail et la production de contenu en ligne en respectant l'image de marque.",
            ],
          },
          {
            jobTitle: "Assistant à la vente | 2017 - 2019 | Montréal Canada",
            description: [
              `En travaillant comme assistant à la vente chez Arc'teryx Montréal, j'ai développé une connaissance approfondie de l'industrie du plein air et des vêtements techniques. J'ai également appris à comprendre les besoins des clients et proposer des solutions adaptées. Utilisation intensive de la technique de vente "Meerkat". Le travail d'équipe, la ponctualité et les compétences d'adaptation sont les principaux éléments à retenir de cette expérience.`,
            ],
          },
        ],
      },
      {
        company: "Club de ski et de snowboard Concordia",
        jobTitle: "Président et VP Marketing | 2017 - 2019 | Montréal Canada",
        description: [
          "Le Club de ski et de snowboard Concordia est l'un des clubs les plus actifs du campus avec plus de 500 membres actifs et +20 événements chaque année.",
          "J'ai rejoint le club en 2017 en tant que vice-président du marketing. Mon rôle était de proposer des stratégies marketing pour vendre les billets et produire le contenu de chaque voyage.",
          "Après un an au poste de vice-président du marketing, j'ai été élu président du club. Mes responsabilités comprenaient la gestion d'une équipe de six personnes, ainsi que la supervision des finances, du marketing, des opérations et des commandites. Au cours de la saison 18/19, avec le support de mon équipe, j'ai planifié et organisé plus de 20 événements, dont des voyages de 10 jours et deux week-ends, générant plus de 90 000 $ de chiffre d'affaires. Nous avons travaillé avec des sociétés externes et des sponsors tels que Red Bull et Orage. Le leadership et le travail d'équipe sont les principaux enseignements de cette expérience.",
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    description:
      "N'hésitez pas à me contacter via la boîte de message ci-dessous ou via mes comptes de réseaux sociaux (listés ci-dessous)",
    email: "email",
    name: "nom",
    message: "message",
    copyright: "Mathieu Tranchida - 2021 Tous droits réservés ©",
    confirmation: "Votre email a été envoyé!",
  },
  photoPortfolio: {
    title: "Portfolio de photographie",
    backToMain: "Page d'accueil",
    designPortfolio: "Design",
  },
  designPortfolio: {
    title: "Portfolio de design",
    backToMain: "Page d'accueil",
    photoPortfolio: "Photographie",
  },
};
