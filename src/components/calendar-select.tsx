import { CURRENT_LANGUAGE, languageCodes } from "../utils/language-codes";

export function CalendarSelect() {
  const languageDisplay = new Intl.DisplayNames([CURRENT_LANGUAGE], {
    type: "language",
  });

  return (
    <div className="flex flex-col gap-1.5">
      <span>Selecione uma linguagem</span>
      <select className="text-neutral-800 bg-gray-700 rounded-sm border-2 border-gray-400 p-1">
        {languageCodes.map((language) => {
          return (
            <option key={language} value={language} className="">
              {languageDisplay.of(language)}
            </option>
          );
        })}
      </select>
    </div>
  );
}
