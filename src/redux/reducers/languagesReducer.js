const initialState = {
  content: {
    header: {
      bio: "Bio",
      education: "Education",
      skills: "Skills",
      projects: "Portfolio",
      workExperience: "Work Experience",
      contact: "Contact",
    },
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
          schoolName: [
            "Concordia University",
            "John Molson School of Business",
          ],
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
      title: "Projects",
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
    },
  },
  status: "en",
};

export default function languageReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_NEW_LANGUAGE": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_NEW_LANGUAGE": {
      return {
        ...state,
        content: action.content,
        status: "idle",
      };
    }
    case "RECEIVE_NEW_LANGUAGE_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }
    default: {
      return state;
    }
  }
}
