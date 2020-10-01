import AbstractView from "./abstract";

export const createRowTemplate = () => {
  return (
    `<div class="table__row table__row--empty"></div>`
  );
};

export default class Row extends AbstractView {
  getTemplate() {
    return createRowTemplate();
  }
}
