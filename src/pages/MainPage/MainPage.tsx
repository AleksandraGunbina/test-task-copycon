import { useEffect, useState } from "react";
import { dataForRequest } from "../../halpers/dataForRequest";
import { useTaskDataMutation } from "../../store/api/taskApi";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const [taskData, { isSuccess, data, error }] = useTaskDataMutation();
  const [incomingData, setIncomingData] = useState("");

  const getTaskData = async () => {
    await taskData(dataForRequest).unwrap();
  };
  useEffect(() => {
    if (isSuccess) {
      const newData = JSON.parse(JSON.stringify(data), (key, value) => {
        if (key === "__name") {
          console.log(value);
          setIncomingData(value);
        }
      });
      console.log(newData);
    } else if (error && "status" in error) {
      setIncomingData(JSON.stringify(error.data));
    }
  }),
    [];

  return (
    <div className={styles.mainPageWrapper}>
      <div className={styles.mainPageBtnWrapper}>
        <button
          className={styles.mainPageBtn}
          type="submit"
          onClick={getTaskData}
        >
          Получить значение поля __name
        </button>
      </div>
      <div className={styles.maniPageResult}>{incomingData}</div>
    </div>
  );
};

export default MainPage;
