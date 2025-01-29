import { useEffect, useState } from "react";

interface ICalendarWeekDaysProps {
  currentDate: Date;
}
export function CalendarWeekDays({ currentDate }: ICalendarWeekDaysProps) {
  const [weekDays, setWeekDays] = useState<string[]>([]);
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

  useEffect(() => {
    const startOfWeek = getStartOfWeek(currentDate);
    getWeekDays(startOfWeek);
  }, []);

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
