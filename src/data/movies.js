// Kit de l'application 3 : 8 films prêts à l'emploi (export nommé, 1.6).
// Les affiches sont dans public/posters/ : Vite sert public/ à la racine, d'où "/posters/…".
// Les id sont des strings, comme ceux que renverra l'API au chapitre 6.
export const movies = [
  {
    id: "1",
    title: "Inception",
    year: 2010,
    rating: 8.8,
    posterUrl: "/posters/inception.svg",
    description: "Un voleur spécialisé dans l'extraction de secrets à travers les rêves reçoit une mission inverse : implanter une idée.",
  },
  {
    id: "2",
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    posterUrl: "/posters/interstellar.svg",
    description: "Alors que la Terre se meurt, une équipe d'astronautes traverse un trou de ver à la recherche d'une nouvelle planète habitable.",
  },
  {
    id: "3",
    title: "Tenet",
    year: 2020,
    rating: 7.3,
    posterUrl: "/posters/tenet.svg",
    description: "Un agent apprend à manipuler l'écoulement du temps pour empêcher une catastrophe venue du futur.",
  },
  {
    id: "4",
    title: "Dune",
    year: 2021,
    rating: 8,
    posterUrl: "/posters/dune.svg",
    description: "Héritier d'une grande famille, Paul Atréides arrive sur Arrakis, la planète désertique la plus convoitée de l'univers.",
  },
  {
    id: "5",
    title: "Dune : Deuxième partie",
    year: 2024,
    rating: 8.5,
    posterUrl: "/posters/dune-2.svg",
    description: "Paul s'allie aux Fremen et doit choisir entre l'amour et le destin de l'univers.",
  },
  {
    id: "6",
    title: "Oppenheimer",
    year: 2023,
    rating: 8.3,
    posterUrl: "/posters/oppenheimer.svg",
    description: "Le portrait du physicien qui a dirigé la mise au point de la première bombe atomique, et de ce qu'il en a coûté.",
  },
  {
    id: "7",
    title: "Parasite",
    year: 2019,
    rating: 8.5,
    posterUrl: "/posters/parasite.svg",
    description: "Une famille sans emploi s'infiltre peu à peu au service d'une famille aisée, jusqu'à ce que tout dérape.",
  },
  {
    id: "8",
    title: "Le Voyage de Chihiro",
    year: 2001,
    rating: 8.6,
    posterUrl: "/posters/chihiro.svg",
    description: "Perdue dans un monde peuplé d'esprits, une fillette doit travailler dans des bains publics pour sauver ses parents.",
  },
];
