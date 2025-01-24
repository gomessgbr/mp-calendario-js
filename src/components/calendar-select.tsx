import { CURRENT_LANGUAGE, languageCodes } from "../utils/language-codes";

export function CalendarSelect() {
  const languageDisplay = new Intl.DisplayNames([CURRENT_LANGUAGE], {
    type: "language",
  });

  return (
    <select>
      {languageCodes.map((language) => {
        return (
          <option key={language} value={language}>
            {languageDisplay.of(language)}
          </option>
        );
      })}
    </select>
  );
}
