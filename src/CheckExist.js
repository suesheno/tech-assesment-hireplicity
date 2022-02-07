import { useState } from "react";

function CheckExist() {
  const [num, setNum] = useState();
  const [exist, setExist] = useState(false);
  const onChageNum = (e) => {
    setNum(e.target.value);
    setExist(false);
  };
  const numExist = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === parseInt(num)) {
        setExist(true);
        break;
      }
      setExist(false);
    }
  };
  return (
    <>
      <div>
        <h5>Given Array of [1,2,3,4,5,6,7,8,10]</h5>
        <div>
          <input
            type='number'
            onChange={onChageNum}
            placeholder='Enter a Number'
          />
          <br />
          <button onClick={numExist}>Check Exist</button>
        </div>
        <h5>{exist && `${num} exist on the array`}</h5>
      </div>
    </>
  );
}

export default CheckExist;
