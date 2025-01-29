import { CalendarHeader } from "./calendar-header";
import { CalendarWeekDays } from "./calendar-week-days";

export function CalendarDisplay() {
  const date = new Date();
  return (
    <div className="rounded-lg p-2 border-1 border-gray-600 ">
     <CalendarHeader currentMonth="janeiro 2024"/>
     <CalendarWeekDays currentDate={date}/>
    </div>
  );
}
