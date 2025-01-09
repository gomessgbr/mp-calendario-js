import "./style.css";
import { setupSelect } from "./select.ts";

export const CURRENT_LANGUAGE = "pt-BR";
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Calendário</h1>
    <select id="languages">
    </select>
  </div>
`;

setupSelect(document.querySelector<HTMLSelectElement>("#languages")!);
