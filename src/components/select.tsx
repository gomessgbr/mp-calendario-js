import { CURRENT_LANGUAGE, languageCodes } from "../utils/language-codes";


export function setupSelect(select: HTMLSelectElement) {
  const currentValue = select!.value || "pt-BR";
  select!.innerHTML = "";

  const languageDisplay = new Intl.DisplayNames([CURRENT_LANGUAGE], {
    type: "language",
  });

  languageCodes.forEach((language) => {
    const option = document.createElement("option");
    option.value = language;

    option.textContent = languageDisplay.of(language) || "";
    select!.appendChild(option);
  });

  select.value = currentValue;
}
