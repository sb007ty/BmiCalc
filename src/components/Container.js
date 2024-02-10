import React, { useRef, useState } from "react";

function Container() {
  const [bmiRes, setBmiRes] = useState("");
  const [showResult, setShowResult] = useState(false);
  const heightRef = useRef();
  const weightRef = useRef();
  return (
    <div className="container">
      <h1 className="item item1">BMI Calculator</h1>
      <div className="item item2">
        <h2>Height(m)</h2>
        <input type="text" name="" id="" ref={heightRef} />
      </div>
      <div className="item item3">
        <h2>Weight(kg)</h2>
        <input type="text" name="" id="" ref={weightRef} />
      </div>
      <div className="item item4">
        <button
          style={{ borderRadius: "900px", marginTop: "30px" }}
          onClick={() => {
            console.log(
              heightRef.current.value,
              " abc ",
              weightRef.current.value
            );
            const bmi =
              weightRef.current.value /
              (heightRef.current.value * heightRef.current.value);
            setBmiRes(bmi.toFixed(2));
            setShowResult(true);
            setTimeout(() => {
              setShowResult(false);
            }, 8000);
          }}
        >
          Calculate
        </button>
      </div>
      {showResult && (
        <div className="item item5">{"Your BMI is " + bmiRes}</div>
      )}
    </div>
  );
}

export default Container;
