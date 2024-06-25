import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Soham",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
  ],
}

export const intro = {
  title: "Hey, I'm Soham",
  description: "I am an AI engineer with a passion for robotics and innovation. With a background in both hardware and software, I strive to bridge the gap between technology and real-world applications.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering. I started my career as a mobile application developer working remotely for a UK-based startup, Lessgo.",
    "The tech industry is ever-evolving, and I love being able to grow with it while continually solidifying the fundamentals. I open source my code from a place of empathy for future developers, teammates, and users, with accessibility in mind. I also enjoy joining communities, helping and mentoring new developers, and supporting organizations to promote diversity in tech. I share my programming journey on Instagram, helping people who are just getting into programming.",
    "When I’m not programming, I focus on my hobbies: diary writing, doodling, meeting people, and growing my network.",
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "AI Engineering",
      description: "I design and develop AI models and systems, focusing on robotics and computer vision applications.",
      icons: null,
    },
    {
      title: "Embedded Systems",
      description: "I work with embedded systems, integrating hardware and software to create innovative solutions.",
      icons: null,
    }
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "ChatterArm",
      description: "A robotic arm controlled by natural language processing, enabling intuitive human-robot interaction.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sohamaserkar/chatterarm",
        },
      ]
    },
    {
      title: "Surgical Robot Enhancement",
      description: "Enhancing surgical robots with advanced computer vision and AI capabilities to improve precision and outcomes.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sohamaserkar/surgical-robot-enhancement",
        },
      ]
    },
    {
      title: "Portfolio",
      description: "A portfolio website template showcasing my work, projects, and skills as an AI engineer and robotics enthusiast.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/sohamaserkar/portfolio",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Please do not hesitate to reach out directly by email at soham.aserkar@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:soham.aserkar@gmail.com",
      isPrimary: true,
    },
  ]
}

export const SEO = {
  title: "Soham Aserkar | AI Engineer | Robotics | Embedded Systems",
  description: "I design and develop AI models and systems with a focus on robotics and computer vision applications. Graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@sohamaserkar",
  description: "AI Engineer | Robotics | Embedded Systems",
  cards: [
    {
      title: "My website",
      link: "https://sohamaserkar.com/",
    },
    {
      title: "ChatterArm Project",
      link: "https://github.com/sohamaserkar/chatterarm",
    },
    {
      title: "Surgical Robot Enhancement Project",
      link: "https://github.com/sohamaserkar/surgical-robot-enhancement",
    },
    {
      title: "My GitHub",
      link: "https://github.com/sohamaserkar/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/sohamaserkar/",
    },
  ]
}
