import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

interface CalendarContextType {
  currentDate: Date;
  weekDays: string[];
  monthDays: Array<Date | null>;
  IsTheCurrentDate: boolean;
  currentMonth: string;
  currentYear: string;
  currentLanguage: string;
  changeMonth: (direction: "next" | "prev") => void;
}

export const CalendarContext = createContext<CalendarContextType>(
  {} as CalendarContextType,
);

export const CalendarContextProvider = ({ children }: PropsWithChildren) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [IsTheCurrentDate] = useState<boolean>(false);
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [monthDays, setMonthDays] = useState<Array<Date | null>>([]);
  const currentLanguage = "pt-BR";

  const currentMonth = new Intl.DateTimeFormat(currentLanguage, {
    month: "long",
  }).format(currentDate);

  const currentYear = new Intl.DateTimeFormat(currentLanguage, {
    year: "numeric",
  }).format(currentDate);

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
      const weekDayName = new Intl.DateTimeFormat(currentLanguage, {
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

    const firstDayWeekDay = date && date.getDay();
    const numberOfEmptyDays = Array(
      firstDayWeekDay === 0 ? 0 : firstDayWeekDay - 1,
    ).fill(null);

    const days = [...numberOfEmptyDays];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    return days;
  }

  function changeMonth(direction: "next" | "prev") {
    setCurrentDate((previousDate) => {
      const monthOffset = direction === "next" ? 1 : -1;
      return new Date(
        previousDate.getFullYear(),
        previousDate.getMonth() + monthOffset,
        1,
      );
    });
  }

  useEffect(() => {
    const startOfWeek = getStartOfWeek(new Date(currentDate));
    getWeekDays(startOfWeek);
    const daysInMonth = getDaysInMonth(
      currentDate.getMonth(),
      currentDate.getFullYear(),
    );
    setMonthDays(daysInMonth);
  }, [currentDate]);

  return (
    <CalendarContext.Provider
      value={{
        currentDate,
        weekDays,
        monthDays,
        IsTheCurrentDate,
        changeMonth,
        currentMonth,
        currentYear,
        currentLanguage,
      }}
    >
      {children}
    </CalendarContext.Provider>
  );
};

export function useCalendarContext() {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error(
      "useCalendarContext must be used within a CalendarProvider",
    );
  }
  return context;
}
