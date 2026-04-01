import { CalendarDays } from "./calendar-days";
import { CalendarHeader } from "./calendar-header";
import { CalendarWeekDays } from "./calendar-week-days";

export function CalendarDisplay() {
  return (
    <div className="rounded-lg p-2 border-1 border-gray-600 ">
     <CalendarHeader />
     <CalendarWeekDays />
     <CalendarDays/>
    </div>
  );
}
