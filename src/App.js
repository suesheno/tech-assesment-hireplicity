import Factorial from "./Factorial";
import CheckExist from "./CheckExist";
import Shuffle from "./Shuffle";

function App() {
  const checkDateFormat = (date) => {
    var today = new Date(date);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;
    // No.5
    let date_regex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
    console.log(date_regex.test(today));
  };

  let list = [
    { name: "Clark", age: 23 },
    { name: "Mark", age: 42 },
    { name: "John", age: 23 },
    { name: "Clark", age: 23 },
  ];

  const removeDuplicates = () => {
    //no.4
    //duplicate keys in javascript object is not allowed
    console.log(list);
    let result = [];
    list.map((item) => {
      let found = result.findIndex((person) => person.name === item.name);
      if (found === -1) {
        result.push(item);
      }
    });
    console.log(result);
  };

  checkDateFormat("03/25/2015");
  removeDuplicates();
  return (
    <div className='App'>
      <Factorial />
      <div>--------------------</div>
      <CheckExist />
      <div>--------------------</div>
      <Shuffle />
    </div>
  );
}

export default App;
