import { useState } from "react";

export default function Factorial() {
  const [num, setNum] = useState();
  const [total, setTotal] = useState(0);
  const onChageNum = (e) => {
    setNum(e.target.value);
  };
  const computeFactorial = () => {
    let fact = 1;

    for (let i = num; i >= 1; i--) {
      fact = fact * i;
    }
    setTotal(fact);
  };
  return (
    <>
      <div>
        <input
          type='number'
          placeholder='Input Number'
          onChange={onChageNum}
          min={1}
        />
        <br />
        <button onClick={computeFactorial}>Compute Factorial</button>
        <h5>Factorial is {total}</h5>
      </div>
    </>
  );
}
