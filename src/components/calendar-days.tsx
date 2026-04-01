import { useEffect, useState } from "react";
import { useCalendarContext } from "../contexts/useCalendarContext";

export function CalendarDays() {
  const { monthDays } = useCalendarContext();
  const [days, setDays] = useState<string[]>([]);


  const handleMonthDays = ()=>{
  console.log("monthDays === ",monthDays);
  const formatDays: Array<string> = [];
  monthDays.map((day)=>{
    day ? formatDays.push(day.getDate().toString()): '';
  })
  console.log("formatDays",formatDays);
  setDays(formatDays);
}

  useEffect(() => {
    monthDays && handleMonthDays();
  }, [monthDays]);



  return (
    <ul className="grid px-10 py-5 w-full grid-cols-7">
      {
        days && days.map((day, index)=>(
          <li key={index}>{day}</li>
        ))
      }
    </ul>
  );
}
