"use client";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css";

function MainCalendar() {
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
    />
  );
}

export default MainCalendar;
