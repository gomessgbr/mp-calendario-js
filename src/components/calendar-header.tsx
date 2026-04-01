import { useCalendarContext } from "../contexts/useCalendarContext";

export function CalendarHeader() {
  const { changeMonth, currentMonth, currentYear } = useCalendarContext();
  console.log({currentMonth})

  return (
    <div className="grid grid-cols-3 items-center">
      <button
        className="p-1 justify-self-start"
        onClick={() => changeMonth("prev")}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
        </svg>
      </button>

      <h3 className="text-base">
        {currentMonth} <strong className="text-[#6EE7B7]">{currentYear}</strong>
      </h3>

      <button className="p-1 justify-self-end" onClick={() => changeMonth("next")}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 16 16"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 8a.5.5 0 0 0 .5.5h5.793L8.146 10.646a.5.5 0 1 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z"></path>
        </svg>
      </button>
    </div>
  );
}
