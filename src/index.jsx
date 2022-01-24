import { render } from "react-dom";
import Pages from "./routes";

const rootElement = document.getElementById("root");
render(
  <Pages />,
  rootElement
);