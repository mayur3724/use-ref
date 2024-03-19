
import React,{useEffect, useRef, useState} from "react";

const CounterRender = ()=>{
    const [count, setCount]=useState(0);
    // const [renderCount, setRenderCount] = useState(0);
    const renderCount = useRef(0);

    useEffect(()=>{
        renderCount.current = renderCount.current+1;
    })

    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increase</button>
            <p>Component has rendered {renderCount.current} times</p>
        </div>
    )
}
export default CounterRender;
