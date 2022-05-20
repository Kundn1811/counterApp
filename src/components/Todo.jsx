import React from "react";
import {useState} from "react";

const Todo = ()=>{
    const [todos,setTodos] = useState([]);

    return (
        <div>
            <input value={value}
            onChange={(e)=>{
                setValue(e.target.value)
            }} />
            <button 
            onClick={()=>{
                setTodos(...todos,{value:value});
                setValue(" ");
            }}
            >
                Add
                </button>
                <div>

           {todos.map((el)={
            
        })}
        </div>
        
        </div>
    );
};