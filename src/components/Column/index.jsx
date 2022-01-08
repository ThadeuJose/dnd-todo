import React from "react";
import Task from "../Task";

export default class Column extends React.Component{
    render(){
        return (<>
            {this.props.column.title}
            {this.props.tasks.map((task)=>(<Task key={task.id} task={task}></Task>))}          
        </>);
    }
}