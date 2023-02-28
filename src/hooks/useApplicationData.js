import  { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  
  
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });

  const setDay = (day) => setState({ ...state, day });

  
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);






const updateSpots = (day, days, appointments) => {
  const currentDay = days.find((thisDay) => thisDay.name === day);
  const currentAppointments = currentDay.appointments;
  let spots = 0;
  for (const currentApp of currentAppointments) {
    if (!appointments[currentApp].interview) {
      spots++;
    }
  }
  currentDay.spots = spots;
};





  const bookInterview = (id, interview) => {
    // console.log(id, interview);
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, { interview })
      .then((response) => {
        updateSpots(state.day, state.days, appointments);
        setState({
          ...state,
          appointments,
        })
      });
  };

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
  
    return axios.delete(`/api/appointments/${id}`)
      .then((response) => {
        state.appointments[id].interview = null;
        updateSpots(state.day, state.days, state.appointments);
        setState({ ...state,
           appointments: state.appointments, 
           days: state.days });

      });

  }
return {
  state, setDay,bookInterview, cancelInterview
}

}  






