import React from "react";

const Counter = (props)=>{
   const [count , setCount] = React.useState(props.initialValue);
    
    return (
        <div className="counter">
            <h1>Counter app <span className={count%2===0 ?"green":"red" }>{count}</span>  </h1>
            <button 
            onClick={()=>setCount(count + 1)}>
            Increment
            </button>

            <button onClick={()=>{
               if(count>0 ){
                   setCount(count - 1)
               }
                }}>Decrement</button>

            <button onClick={()=> setCount(count * 2)}>Doubble</button>    
        </div>
    )
}
export default Counter;