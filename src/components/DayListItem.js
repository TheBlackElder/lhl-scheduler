import React from "react";

import "components/DayListItem.scss";
import classNames from "classnames";


export default function DayListItem(props) {
  const dayClass = classNames("dayClass", {
    "day-list__item":props,
    "day-list__item--selected": props.selected === true,
   " day-list__item--full": props.spots === 0
  })
function formatSpots(spots) {
if (props.spots === 1) {
  return `${spots} spot`
}
if (props.spots > 1) {
  return `${spots} spots`
} 
return `no spots`
}


  return (
    <li 
    className={dayClass} 
    onClick={()=> props.setDay(props.name)} 
    selected={props.selected}
    data-testid="day"
  
     >
      <h2 >{props.name}</h2> 
      <span >{formatSpots(props.spots)} remaining </span> 
    </li>
  );
}

