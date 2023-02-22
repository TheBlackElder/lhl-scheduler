import React from "react";

import DayListItem from "./DayListItem";

export default function DayList(props) {
  const days = props.days.map((day) => {
    return (
      <DayListItem
        name={day.name}
        key={day.id}
        spots={day.spots}
        selected={props.day === day.name}
        setDay={props.setDay}
      />
    );
  });

  return <ul>{days}</ul>;
}
