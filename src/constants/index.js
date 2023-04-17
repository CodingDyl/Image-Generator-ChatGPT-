import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    eduvos,
    starbucks,
    tesla,
    entelect,
    carrent,
    jobit,
    tripguide,
    threejs,
    infraplex,
    cashcrop,
    lunotech,
    coinSearch
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Telephony Engineer and Help Desk",
      company_name: "Infraplex - ISP",
      icon: infraplex,
      iconBg: "#383E56",
      date: "Decemebr 2018 - January 2020",
      points: [
        "Assisted clients with network issues and infrastructure repair",
        "Telephony support relating to technical issues involving all telecommunications systems",
        "Administration and maintenance of IP telephony servers, switches, routers, and gateways",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Varsity - Bsc Information Technology | Software Engineering",
      company_name: "Eduvos",
      icon: eduvos,
      iconBg: "#383E56",
      date: "Jan 2020 - December 2022",
      points: [
        "Developing knowledge with computer systems",
        "Excels in software development and systems design.",
        "Well versed in Java, HTMl, CSS, Javascript, PHP, Dart, Delphi, SQL, C# and Python & Flask",
        "Passed all modules with many distinctions.",
      ],
    },
    {
      title: "Full Stack Software Engineer",
      company_name: "Entelect",
      icon: entelect,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining good code that will keep clients happy and coming back.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing any application that needs to be created or maintained with a great team around me.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Dylan proved me wrong.",
      name: "Peter Evgeniou",
      designation: "CFO",
      company: "Bosch Northcliff",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Kayla Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/woman/4.jpg",
    },
    {
      testimonial:
        "After Dylan optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Crypto Coin Search",
      description:
        "Web-based platform that allows users to search and view current and updated news on the top 50 crypto currencies, providing a convenient and efficient solution for crypto needs.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Api's",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: coinSearch,
      source_code_link: "https://github.com/CodingDyl/BoschWebsite.git",
    },
    {
      name: "Luno Tech",
      description:
        "Local E-commerce website. Developed as a template to hold and create my own custome website when I start my official business.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "sanity",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: lunotech,
      source_code_link: "https://github.com/CodingDyl/LunoTech-Site.git",
    },
    {
      name: "Cash Crop",
      description:
        "A comprehensive mobile application used to help farmers in South Africa deliver and sell their produce directly to restaurants and customers.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "kotlin",
          color: "green-text-gradient",
        },
        {
          name: "python | flask",
          color: "pink-text-gradient",
        },
      ],
      image: cashcrop,
      source_code_link: "https://github.com/CodingDyl/CashCropVersionn1.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };