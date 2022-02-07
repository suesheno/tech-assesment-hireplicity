import { useState } from "react";

function Shuffle() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const shuffleArr = () => {
    let tempArr = arr;
    for (let i = tempArr.length - 1; i > 0; i--) {
      let random = Math.floor(Math.random() * (i + 1));
      let temp = tempArr[i];
      tempArr[i] = tempArr[random];
      tempArr[random] = temp;
    }
    setArr([...tempArr]);
  };
  return (
    <>
      <div>
        <span>Array [{arr.toString(arr)}]</span>
        <br />
        <button onClick={shuffleArr}>Shuffle Array</button>
      </div>
    </>
  );
}

export default Shuffle;
