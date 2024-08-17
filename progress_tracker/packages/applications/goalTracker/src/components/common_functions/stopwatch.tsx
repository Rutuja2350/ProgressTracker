import { Button } from "antd";
import { useState } from "react";
import { useStopwatch } from "react-timer-hook";

export default function StopWatch() {
  const {
    seconds,
    minutes,
    hours,
    days,
    // isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false });

  const [state, setState] = useState<String>("start");
  const [buttonText, setButtonText] = useState<String>("Start");
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="leading-10">
      <div className="text-8xl">
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <Button
        type={state !== "reset" ? "primary" : "dashed"}
        onClick={() => {
          if (state === "start") {
            start();
            setButtonText("Pause");
            setState("pause");
            setIsVisible(true);
          } else if (state === "pause") {
            pause();
            setButtonText("Resume");
            setState("resume");
            setIsVisible(true);
          } else if (state === "resume") {
            start();
            setButtonText("Pause");
            setState("pause");
            setIsVisible(true);
          }
        }}
      >
        {buttonText}
      </Button>
      <br />
      {isVisible && 
        <Button
          onClick={() => {
              reset();
              setState("pause");
              setButtonText("Pause");
              setIsVisible(true);
          }}
        >
          Restart
        </Button>
      }
      <br />
      <>reset</><br/>
      <>complete</>
    </div>
  );
}
