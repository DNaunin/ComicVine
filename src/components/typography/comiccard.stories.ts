import "./comiccard.css";
import { createCard } from "./comiccard";
import { createElement } from "../../utils/createElement";
import { getHero, getCharacters } from "../../utils/api";

export default {
  title: "Comics/Characters",
  parameters: { layout: "centered" },
};

export const SheHulk = () =>
  createCard({
    image: {
      small_url: `https://comicvine1.cbsistatic.com/uploads/scale_small/12/124259/6984082-she-hulk.jpg`,
    },
    name: "She-Hulk",
    publisher: { name: "Marvel" },
    real_name: "Jennifer Walters",
  });

export const CharacterFromAPI = (args, { loaded: { character } }) => {
  return createCard(character);
};

CharacterFromAPI.loaders = [
  async () => ({
    character: await getHero(1499),
  }),
];

export const CharactersFromAPIWithFilter = (args) => {
  const headline = createElement("h2", {
    className: "headline",
    innerText: "What is your favourite Hero's name?",
  });
  const input = createElement("input", {
    className: "inputField",
    placeholder: "Name",
    onchange: async () => {
      const newCharacters = await getCharacters(input.value);
      console.log(newCharacters);
      const newCards = newCharacters.map((character) => createCard(character));
      characterContainer.innerHTML = "";
      characterContainer.append(...newCards);
    },
  });

  const characterContainer = createElement("div", {
    className: "container",
  });

  const container = createElement("div", {
    className: "",
    childs: [headline, input, characterContainer],
  });

  return container;
};
