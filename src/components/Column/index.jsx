import React from 'react';
import Task from '../Task';
import {Container, Title, TaskList} from './styles';
import {Droppable} from 'react-beautiful-dnd';

export default class Column extends React.Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <Droppable droppableId={this.props.column.id}>
          {provided => (
            <TaskList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={true}>
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index}></Task>
              ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
      </Container>
    );
  }
}
