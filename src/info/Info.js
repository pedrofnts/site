import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(4, 79, 144)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Pedro",
  lastName: "Fontes",
  initials: "pf", // the example uses first and last, but feel free to use three or more if you like.
  position: "Desenvolvedor Fullstack",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like

    {
      emoji: "🌎",
      text: "Aracaju, Brasil",
    },
    {
      emoji: "💻",
      text: "JavaScript/TypeScript",
    },
    {
      emoji: "📧",
      text: "pedro7fontes@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://github.com/pedrofnts",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://linkedin.com/in/fontespedro",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Olá! Meu nome é Pedro Fontes. Sou um desenvolvedor com foco em JavaScript e TypeScript. Sou um profissional autodidata, com foco em resultados, e apaixonado por desenvolver e criar novas coisas. Encontrei a programação como um hobby, e resolvi fazer dela o meu futuro. Hoje, é criando códigos que sinto que encontrei o meu verdadeiro propósito.",
  skills: {
    proficientWith: [
      "javascript",
      "typescript",
      "node",
      "nestjs",
      "expressjs",
      "koa",
      "react",
    ],
    exposedTo: ["mongodb", "mysql", "postgresql", "git", "aws", "docker"],
  },
  hobbies: [
    {
      label: "leitura",
      emoji: "📖",
    },
    {
      label: "filmes",
      emoji: "🎥",
    },
    {
      label: "festas",
      emoji: "🥳",
    },
    {
      label: "academia",
      emoji: "🏋🏻",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Project 1",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Project 2",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock2,
    },
    {
      title: "Project 3",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock3,
    },
    {
      title: "Project 4",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock4,
    },
    {
      title: "Project 5",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock5,
    },
  ],
};
