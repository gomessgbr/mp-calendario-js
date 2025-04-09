
import { useCalendarContext } from "../contexts/useCalendarContext";

interface ICalendarWeekDaysProps {
  currentDate: Date;
}
export function CalendarWeekDays({ currentDate }: ICalendarWeekDaysProps) {
  const {weekDays } = useCalendarContext();

 

  return (
    <ul className="w-full flex gap-6 px-6">
      {!!weekDays &&
        weekDays.length > 0 &&
        weekDays.map((weekDay, index) => {
          return (
            <li key={(weekDay + index).toString()} className="font-bold text-sm">
              {weekDay}
            </li>
          );
        })}
      {!weekDays ||
        (weekDays.length <= 0 && <li> Problemas ao carregas os seus dias</li>)}
    </ul>
  );
}
