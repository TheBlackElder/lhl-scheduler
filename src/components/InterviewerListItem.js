import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  const { name, id, avatar, selected }= props;
  const interviewerClass = classNames("interviewerClass", {
    "interviewers__item": props,
    "interviewers__item--selected": selected,
    // "interviewers__item-image": avatar

  })

 
  return (
  <li className={interviewerClass} onClick={() => props.setInterviewer(id)} >
    <img
      className="interviewers__item-image"
      src={avatar}
      alt={name}
    />
   {selected && name}
  </li>
  );
}


