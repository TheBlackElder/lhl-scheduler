import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const { name, avatar, selected }= props;
  const interviewerClass = classNames("interviewerClass", {
    "interviewers__item": props,
    "interviewers__item--selected": selected,
  

  })

 
  return (
  <li className={interviewerClass} onClick={props.setInterviewer} >
    <img
      className="interviewers__item-image"
      src={avatar}
      alt={name}
    />
   {selected && name}
  </li>
  );
}


