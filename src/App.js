import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUser = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/3")
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickUser}>users</button>
      <button onClick={onClickUser1}>id1のuser</button>
    </div>
  );
}
