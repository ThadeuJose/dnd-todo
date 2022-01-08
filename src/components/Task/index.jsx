import React from "react";
import { Container } from "./styles";

export default class Task extends React.Component{
    render(){
        return (<Container isDragging={false}>
            {this.props.task.content}
        </Container>);
    }
}