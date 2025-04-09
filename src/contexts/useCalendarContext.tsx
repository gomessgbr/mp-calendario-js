import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

interface CalendarContextType {
  currentDate: Date;
  weekDays: string[];
  monthDays: Date[];
  IsTheCurrentDate: boolean;
  currentMonth: string;
  currentYear: string;
  currentLanguage: string;
}

export const CalendarContext = createContext<CalendarContextType>({} as CalendarContextType);


export const CalendarContextProvider = ({children}: PropsWithChildren)=>{
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState<number>(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState<number>(currentDate.getFullYear());
  const [IsTheCurrentDate, setIsTheCurrentDate] = useState<boolean>(false);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [monthDays, setMonthDays] = useState<Date[]>([]);
  const [monthName, setMonthName] = useState<string>(new Intl.DateTimeFormat("pt-BR", {
    month: "long",
  }).format(currentDate));
  const [year, setYear] = useState<string>(new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
  }).format(currentDate));
  const [currentLanguage, setCurrentLanguage] = useState<string>("pt-BR");

  // Função que ajusta a data para o domingo mais próximo
  function getStartOfWeek(adjustedDate: Date): Date {
    const dayOfWeek = adjustedDate.getDay(); // 0 (domingo) a 6 (sábado)
    adjustedDate.setDate(adjustedDate.getDate() - dayOfWeek); // Volta para o domingo
    return adjustedDate;
  }

   //Função que me dá os dias da semana baseado na data atual do Date object do javascript
   function getWeekDays(currentDate: Date) {
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      // Intl.DateTimeFormat = É um constructor que formata a data e a hora de acordo com locale(en-US, pt-BR) de acordo com o padrão de cada localização
      const weekDayName = new Intl.DateTimeFormat("pt-BR", {
        weekday: "short",
      }).format(currentDate);
      // Formatar a primeira letra como maiúscula
      const formattedWeekDay =
        weekDayName.charAt(0).toUpperCase() + weekDayName.slice(1);
      // Colocar no array os dias da semana
      weekDays.push(formattedWeekDay);
      //Adiciona mais um dia na data até de 0-7
      currentDate.setDate(currentDate.getDate() + 1);
    }
    console.log(weekDays);
    return setWeekDays(weekDays);
  }

  function getDaysInMonth(month: number, year: number) {
    const date = new Date(year, month, 1);

    const firstDayWeekDay = date &&  date.getDay();
    const numberOfEmptyDays = Array(
      firstDayWeekDay === 0 ? 0 : firstDayWeekDay - 1
    ).fill(null);

    const days = [...numberOfEmptyDays];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return days;
  }

  useEffect(() => {
      const startOfWeek = getStartOfWeek(currentDate);
      getWeekDays(startOfWeek);
      const daysInMonth = getDaysInMonth(currentMonth, currentYear);
      setMonthDays(daysInMonth);
    }, []);

  return(
    <CalendarContext.Provider
      value={{
        currentDate,
        weekDays,
        monthDays,
        IsTheCurrentDate,
        currentMonth: new Intl.DateTimeFormat("pt-BR", {
          month: "long",
        }).format(new Date()),
        currentYear: new Intl.DateTimeFormat("pt-BR", {
          year: "numeric",
        }).format(new Date()),
        currentLanguage: "pt-BR",
      }}
    >
      {children}
    </CalendarContext.Provider>
  )
}


export function useCalendarContext() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendarContext must be used within a CalendarProvider");
  }
  return context;
}