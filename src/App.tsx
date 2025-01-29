import { CalendarDisplay } from "./components/calendar-display";
import { CalendarSelect } from "./components/calendar-select";

export function App() {
  return (
    <div className="min-h-screen flex flex-col gap-20 justify-center items-center">
      <h1 className="text-white text-4xl font-bold">Calendário</h1>
      <div className="grid gap-2">
        <CalendarSelect />
        <CalendarDisplay/>
      </div>
    </div>
  );
}
