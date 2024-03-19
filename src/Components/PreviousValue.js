import React,{useState,useRef, useEffect} from "react";

const PreviousValue = ()=>{
    const [score, setScore] = useState(0);
    const prevScore = useRef("");

    useEffect(()=>{
        prevScore.current=score;
    },[score])
    
    return(
        <div>
            <div>
                <h1>{score}</h1>
                <button onClick={()=>setScore(score+parseInt(Math.random()*6)+1)}>Update score</button>
                <p >Current hit: {score-prevScore.current}</p>
                <p>Previous score:{prevScore.current}</p>
            </div>
        </div>
    )
}
export default PreviousValue;