import { createElement } from "../../utils/createElement";

export function createCard({ name, image, publisher, real_name }) {
  return createElement("article", {
    className: "card",
    childs: [
      createElement("img", {
        className: "card__image",
        src: image.small_url,
      }),
      createElement("h2", {
        className: "info__name",
        innerText: name,
      }),

      createElement("p", {
        className: "info__rname",
        innerText: real_name,
      }),
      createElement("p", {
        className: "info__publisher",
        innerText: publisher ? publisher.name : "not known",
      }),
    ],
  });
}
