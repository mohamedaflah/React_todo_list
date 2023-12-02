import { Trash, FileSignature, CheckCheck } from "lucide-react";
import { ActionContext } from "../../App";
import { useContext } from "react";
function Actions(props) {
    // eslint-disable-next-line react/prop-types
    const {id}=props
    const actions=useContext(ActionContext)
    const handleDeletion=()=>{
        actions.deleteTask(id)
    }
    const handleVerification=()=>{
        actions.verifyTask(id)
    }
    const showEditOption=()=>{
        actions.editStatus(id)
    }
  return (
    <>
      <span>
        <CheckCheck
          absoluteStrokeWidth
          className="text-xs"
          onClick={() => handleVerification(id)}
        />
      </span>
      <span>
        <FileSignature absoluteStrokeWidth className="text-xs" onClick={showEditOption} />
      </span>
      <span>
        <Trash absoluteStrokeWidth className="text-xs" 
        onClick={handleDeletion}
         />
      </span>
    </>
  );
}
export default Actions