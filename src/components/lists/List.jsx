// import { useState } from "react"

import Actions from "./Actions";
import Button from "./Buttons";
import { useEffect, useState } from "react";
function Lists(prop) {
  const { tasks, id } = prop;
  const [edit,setEdit]=useState("false")

  useEffect(()=>{
    tasks.edit ? setEdit("true") : setEdit("false");
  },[tasks.edit])
  const verifyStatus = tasks.verify ? "show" : "";
  return (
    <div
      className="w-[73%] shadow-[inset_-12px_-8px_40px_#46464620] h-12 flex  rounded-md overflow-hidden justify-between "
      id={verifyStatus}
    >
      <div className="w-[70%]  flex flex-col justify-center px-2 ">
        <input
          type="text"
          value={tasks.value}
          className="h-full bg-transparent outline-none text-sm"
          disabled={edit}
        />
      </div>
      <div className="min-w-[25%]  flex justify-between px-2 items-center ">
        {JSON.parse(edit.toLowerCase()) ? (
          <Button id={id}/>
        ) : (
          <Actions id={id} />
        )}
      </div>
    </div>
  );
}
export default Lists;
