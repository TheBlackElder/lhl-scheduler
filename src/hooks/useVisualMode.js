import { useState } from "react";

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

    //setMode(newMode);
    // setHistory(prev => [...prev, newMode])

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
  
    setHistory((prev) => {
      const newHistory = [...prev];
      newHistory.pop();
      newHistory.push();
      return newHistory;
    });


  // // remove the last item from history
    // const newHistory = [...history];
    // newHistory.pop();
    // setHistory(newHistory);

    // setHistory((prev) => [...prev.slice(0, prev.length - 1)]);
    // set Mode(history[history.length-2]);
  };

  // calculate the last item in the array 
  const mode = history.slice(-1)[0];
  return { mode, transition, back };
}



