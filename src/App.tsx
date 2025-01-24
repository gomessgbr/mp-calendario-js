import { CalendarDisplay } from "./components/calendar-display";
import { CalendarSelect } from "./components/calendar-select";

export function App() {
  return (
    <div className="min-h-screen grid grid-rows-[auto, 1fr] gap-20 place-items-center">
     

      <h1 className="text-white text-4xl font-bold">Calendário</h1>
 
      <div className="grid gap-2">
        <CalendarSelect />
        <CalendarDisplay/>
      </div>
    </div>
  );
}
