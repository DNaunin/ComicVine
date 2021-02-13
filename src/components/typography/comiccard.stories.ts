import "./comiccard.css";
import { createCard } from "./comiccard";
import { createElement } from "../../utils/createElement";
import { getHero, APICharacter } from "../../utils/api";

export default {
  title: "Comics/Characters",
  parameters: { layout: "centered" },
};

export const SheHulk = () =>
  createCard({
    image: {
      medium_url: `https://comicvine1.cbsistatic.com/uploads/scale_medium/12/124259/6984082-she-hulk.jpg`,
    },
    name: "She-Hulk",
    publisher: { name: "Marvel" },
    birth: "Jun 16, 1980",
  });

export const CharacterFromAPI = (args, { loaded: { character } }) => {
  return createCard(character);
};

CharacterFromAPI.loaders = [
  async () => ({
    character: await getHero(1499),
  }),
];
