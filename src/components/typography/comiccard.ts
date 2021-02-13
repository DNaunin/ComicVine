import { createElement } from "../../utils/createElement";

export function createCard({ name, image, publisher, birth }) {
  return createElement("article", {
    className: "card",
    childs: [
      createElement("img", {
        className: "card__image",
        src: image.medium_url,
      }),
      createElement("h2", {
        className: "info__name",
        innerText: name,
      }),

      createElement("p", {
        className: "info__birth",
        innerText: birth,
      }),
      createElement("p", {
        className: "info__publisher",
        innerText: publisher.name,
      }),
    ],
  });
}
