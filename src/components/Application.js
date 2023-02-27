import React, { useState, useEffect } from "react";
import axios from "axios";

import "components/Application.scss";
import DayList from "./DayList";
import "components/Appointment";
import Appointment from "components/Appointment";

import {
  getAppointmentsForDay,
  getInterview,
  getInterviewersForDay,
} from "../helpers/selectors";
// import Form from "./Appointment/Form";

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);

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
        setState({
          ...state,
          appointments,
        });
      });
  };

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList days={state.days} value={state.day} onChange={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {dailyAppointments.map((appointment) => {
          const interview = getInterview(state, appointment.interview);
          const interviewers = getInterviewersForDay(state, state.day);

          return (
            <Appointment
              key={appointment.id}
              {...appointment}
              interview={interview}
              interviewers={interviewers}
              bookInterview={bookInterview}
            />
          );
        })}
      </section>
    </main>
  );
}

// componentDidMount() {
//   // Simple PUT request with a JSON body using axios
//   const article = { title: 'React PUT Request Example' };
//   axios.put('https://reqres.in/api/articles/1', article)
//       .then(response => this.setState({ updatedAt: response.data.updatedAt }));
// }

// componentDidMount() {
//   // Simple PUT request with a JSON body using axios
//   const article = { title: 'React PUT Request Example' };
//   axios.put('https://reqres.in/api/articles/1', article)
//       .then(response => this.setState({ updatedAt: response.data.updatedAt }));
// }

//       useEffect(() => {
//         // PUT request using axios inside useEffect React hook
//         const article = { title: 'React Hooks PUT Request Example' };
//         axios.put('https://reqres.in/api/articles/1', article)
//             .then(response => setUpdatedAt(response.data.updatedAt));

//     // empty dependency array means this effect will only run once (like componentDidMount in classes)
//     }, []);
