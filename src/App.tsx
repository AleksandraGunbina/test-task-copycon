import "./App.scss";
import { dataForRequest } from "./healpers/dataForRequest";
import { useTaskDataMutation } from "./store/api/taskApi";

function App() {

  const [taskData, { isSuccess, data, error }] = useTaskDataMutation();
  const onHandelclick = async () => {
    await taskData(dataForRequest).unwrap();
    if (isSuccess) {
      console.log(data);
      const newData = JSON.parse(
        JSON.stringify(data), 
        (key, value) => key === '__name' ? console.log(value) : console.log('figa')
      );
      console.log(newData)
    }
    if (error && "status" in error) {
      alert(error.status);
    }
  };

  return (
    <>
      <button onClick={onHandelclick}>Тестовая кнопка</button>
    </>
  );
}

export default App;
