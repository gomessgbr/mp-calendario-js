import { CURRENT_LANGUAGE, languageCodes } from "../utils/language-codes";

export function CalendarSelect() {
  const languageDisplay = new Intl.DisplayNames([CURRENT_LANGUAGE], {
    type: "language",
  });

  return (
    <div className="grid max-w-fit gap-1.5">
      <span className="text-sm font-normal">Selecione uma linguagem</span>
      <select className="text-[#D1D5DB] font-normal text-sm bg-gray-700 rounded-sm border-2 border-gray-400 p-1">
        {languageCodes.map((language) => {
          const languageLabel = languageDisplay.of(language)
          const formatedLanguageLabel = languageLabel!.charAt(0).toUpperCase() + languageLabel!.slice(1)
          return (
            <option key={language} value={language} >
              {formatedLanguageLabel}
            </option>
          );
        })}
      </select>
    </div>
  );
}
