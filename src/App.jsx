import React, { useState } from "react";
import Inputs from "./components/Inputs/input";
import Lists from "./components/lists/List";
// import ''
const ActionContext = React.createContext();
function App() {
  const [task, addTask] = useState([]);
  const addTaskinState = (taskValue) => {
    addTask([
      ...task,
      { edit: false, verify: false, value: taskValue, id: Date.now() },
    ]);
  };
  const changeVerifyStatus = (id) => {
    addTask((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[id] = {
        ...updatedTasks[id],
        verify: !updatedTasks[id].verify,
      };
      return updatedTasks;
    });
  };
  const changeEditStatus = (id) => {
    addTask((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[id] = {
        ...updatedTasks[id],
        edit: !updatedTasks[id].edit,
      };
      return updatedTasks;
    });
  };
  const handleDeletion = (idx) => {
    const updatedTask = [...task];
    updatedTask.splice(idx, 1);
    addTask(updatedTask);
  };
  const contextValue = {
    deleteTask: handleDeletion,
    verifyTask: changeVerifyStatus,
    editStatus: changeEditStatus,
  };
  return (
    <div
      className="container  mx-auto flex items-center justify-center flex-col "
      style={{ minHeight: "100vh" }}
    >
      <h1 className="text-2xl font-semibold">Todo List</h1>
      <ActionContext.Provider value={contextValue}>
        <div className="w-[90%]  shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] mx-auto lg:w-[40%] min-h-[60%] rounded-md">
          <Inputs taskAdd={addTaskinState} />
          <div className="w-[100%]  min-h-[90px] flex flex-col items-center py-5 gap-4">
            {task.map((val, idx) => (
              <Lists
                tasks={val}
                verify={changeVerifyStatus}
                id={idx}
                deletion={handleDeletion}
                key={val.id}
              />
            ))}
          </div>
        </div>
      </ActionContext.Provider>
    </div>
  );
}

export default App;
export { ActionContext };