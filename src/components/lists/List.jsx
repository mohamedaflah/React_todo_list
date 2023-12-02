// import { useState } from "react"

import Actions from "./Actions";
import Button from "./Buttons";
import { useEffect, useState } from "react";
function Lists(prop) {
  const { tasks, id } = prop;
  const [edit, setEdit] = useState(false);

  const [editValue, setEditValue] = useState(tasks.value);
  const handleInputChange = (e) => {
    setEditValue(e.target.value);
  };
  const changeAgainAfterClickBtn=()=>{
    setEdit(false)
  }
  console.log("worisfdsafd");
  useEffect(() => {
    tasks.edit ? setEdit(true) : setEdit(false);
  }, [tasks.edit]);
  const verifyStatus = tasks.verify ? "show" : "";
  return (
    <div
      className="w-[73%] shadow-[inset_-12px_-8px_40px_#46464620] h-12 flex  rounded-md overflow-hidden justify-between "
      id={verifyStatus}
    >
      {/* <div className="absolute">
        fds
      </div> */}
      <div className="w-[70%]  flex flex-col justify-center px-2 relative">
        {/* {!edit && (
          <label htmlFor={id} className="absolute left-4" id={verifyStatus}>
            {tasks.value}
          </label>
        )} */}

        <input
          type="text"
          className="h-full bg-transparent outline-none text-sm"
          disabled={!edit}
          value={edit ? editValue : tasks.value}
          onChange={handleInputChange}
        />
      </div>
      <div className="min-w-[25%]  flex justify-between px-2 items-center ">
        {edit ? <Button id={id} editValue={editValue} changeBtn={changeAgainAfterClickBtn}/> : <Actions id={id} />}
      </div>
    </div>
  );
}
export default Lists;
