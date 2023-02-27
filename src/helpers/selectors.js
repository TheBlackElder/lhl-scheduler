 function getAppointmentsForDay(state, day) {
  if(!state.days) {
    return [];
  }  
  const foundDay = state.days.find((dy) => dy.name === day);
  if (!foundDay) {
    return [];
  }
  const appointmentsIds = foundDay.appointments;
  const appointments = appointmentsIds.map((id) => {
    return state.appointments[id];
  });
  return appointments;
}



function getInterview(state, interview) {
  if(!interview) {
    return null;
  }  

const id = interview.interviewer;
 const interviewObj =  {
"student":interview.student,
"interviewer":
  state.interviewers[id]
 };
return interviewObj
}

 function getInterviewersForDay(state, day) {
  if(!state.days) {
    return [];
  }  
   const foundDay = state.days.find((dy) => dy.name === day);
   if (!foundDay) {
     return [];
   }
  const appointmentsIds = foundDay.interviewers;
  const interviewers = appointmentsIds.map((id) => {
    return state.interviewers[id];
  });
  return interviewers;
}
 

export {getAppointmentsForDay, getInterview, getInterviewersForDay}