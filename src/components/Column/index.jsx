import React from "react";
import Task from "../Task";
import {Container, Title, TaskList} from "./styles"

export default class Column extends React.Component{
    render(){
        return (<Container>
            <Title>{this.props.column.title}</Title>
            <TaskList isDraggingOver={true}>
                {this.props.tasks.map((task)=>(<Task key={task.id} task={task}></Task>))}          
            </TaskList>
        </Container>);
    }
}