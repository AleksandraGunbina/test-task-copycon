import "./App.scss";
import { useTaskDataMutation } from "./store/api/taskApi";

function App() {
  const [taskData, { isSuccess, data, error }] = useTaskDataMutation();
  const values = {
    fileHash: "0190983f-d7be-7895-bc40-5f403f0bc287",
    format: "xlsx",
    withEventHandlers: false,
  };

  const onHandelclick = async () => {
    await taskData(values).unwrap();
    if (isSuccess) {
      console.log(data);
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
