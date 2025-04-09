import { CalendarDays } from "./calendar-days";
import { CalendarHeader } from "./calendar-header";
import { CalendarWeekDays } from "./calendar-week-days";

export function CalendarDisplay() {
  const date = new Date();
  const monthName = new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(date);
  const year = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
  }).format(date);

  console.log(monthName, year);


  return (
    <div className="rounded-lg p-2 border-1 border-gray-600 ">
     <CalendarHeader currentMonth={monthName} currentYear={year}/>
     <CalendarWeekDays currentDate={date}/>
     <CalendarDays/>
    </div>
  );
}
