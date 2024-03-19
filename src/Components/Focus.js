import React,{useRef} from "react";

const Focus = ()=>{
    const selectedElement = useRef(null);

    function focusInput(){
        selectedElement.current.focus();
    }
    
    return(
        <div>
            <input ref={selectedElement} type="text"/>
            <button onClick={focusInput}>On focus</button>
        </div>
    )
}
export default Focus;