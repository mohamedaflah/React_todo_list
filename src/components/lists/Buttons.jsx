import { XCircle } from "lucide-react";
import { useContext } from "react";
import { ActionContext } from "../../App";
function Button(props) {
    
  const actions = useContext(ActionContext);
  const setUpdatedValue=()=>{
    // alert(props.editValue)
    // eslint-disable-next-line react/prop-types
    actions.updateTask(props.editValue,props.id)
    props.changeBtn()
  }
  const closeEditOption=()=>{
    // eslint-disable-next-line react/prop-types
    actions.editStatus(props.id)
    
  }
  return (
    <div className=" flex">
      <button className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-sm text-sm px-5  flex items-center justify-center" onClick={setUpdatedValue}>
        Edit
      </button>
      <XCircle absoluteStrokeWidth  onClick={closeEditOption}/>
    </div>
  );
}
export default Button;
