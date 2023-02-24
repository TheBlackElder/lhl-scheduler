import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
   
    setHistory((prev) => {
      const newHistory = [...prev];

      if (replace) {
        newHistory.pop();
      }

      newHistory.push(newMode);
      return newHistory;
    });

    // if (replace) {
    //   setHistory((prev) => [...prev.slice(0, history.length - 1), newMode]);
    // } else {
    //   setHistory((prev) => {
    //     return [...prev, newMode];
    //   });
    // }
  };

  const back = () => {
    
    if (history.length < 2) {
      return;
    }
    // // remove the last item from history
    // const newHistory = [...history];
    // newHistory.pop();
    // setHistory(newHistory);


    setHistory((prev) => {
      const newHistory = [...prev];
      newHistory.pop();
      newHistory.push();
      return newHistory;
    });



    // setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
  };

  // calculate the last item in the array 
  const mode = history.slice(-1)[0];
  return { mode, transition, back };
}



