import RowView from "./view/row.js";
import {render, RenderPosition} from "./utils/render.js";

const tableComponent = document.querySelector(`.table`);
const addRowButton = document.querySelector(`.controls__add-row`);

addRowButton.addEventListener(`click`, (evt) => {
  evt.preventDefault();
  const newRow = new RowView();
  render(tableComponent, newRow, RenderPosition.BEFOREEND);
});
