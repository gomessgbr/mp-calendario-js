import { useEffect, useState } from "react";
import { useCalendarContext } from "../contexts/useCalendarContext";

export function CalendarDays() {
  const { IsTheCurrentDate, monthDays } = useCalendarContext();
  const [days, setDays] = useState<string[]>([]);

  
  const handleMonthDays = ()=>{
    console.log("monthDays",monthDays);
    const formatDays: Array<string> = [];
  monthDays.map((day)=>{
    day ? formatDays.push(day.getDate().toString()): '';
  })
  console.log("formatDays",formatDays);
  setDays(formatDays);
}
  useEffect(() => {
    monthDays && handleMonthDays();
  }, []);
    

  console.log("days",days);

  console.log()
  return (
    <ul className="grid w-full grid-cols-7">
      <li></li>
    </ul>
  );
}
