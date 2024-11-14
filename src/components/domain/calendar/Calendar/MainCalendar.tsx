"use client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";
import CalendarTile from "../CalendarTile/CalendarTile";
import { MainCalendarProps } from "./calendar.type";

function MainCalendar(props: MainCalendarProps) {
  const { droppedItems, handleDrop } = props;
  const formatMonthYear = (locale: string | undefined, date: Date) => {
    return date.toLocaleString(locale, { month: "long" });
  };

  return (
    <Calendar
      locale="en-US"
      prev2Label={false}
      next2Label={false}
      formatMonthYear={(locale, date) => formatMonthYear(locale, date)}
      formatShortWeekday={(locale, date) =>
        date.toLocaleDateString(locale, { weekday: "long" })
      }
      tileContent={({ date }) => (
        <CalendarTile
          date={date}
          droppedItems={droppedItems}
          onDrop={handleDrop}
        />
      )}
    />
  );
}

export default MainCalendar;
