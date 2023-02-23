export default function getAppointmentsForDay(state, day) {
  console.log(state.days, day);
  const foundDay = state.days.find((dy) => dy.name === day);
  console.log(foundDay, day);
  if (!foundDay) {
    return [];
  }
  const appointmentsIds = foundDay.appointments;
  const appointments = appointmentsIds.map((id) => {
    return state.appointments[id];
  });
  return appointments;
}

