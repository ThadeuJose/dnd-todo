import React from 'react';
import {Title, Container} from './styles';
import initialData from '../../initial-data';
import Column from '../../components/Column';
import {DragDropContext} from 'react-beautiful-dnd';

export default class Home extends React.Component {
  state = initialData;

  onDragEnd = result => {
    const {destination, source, draggableId, type} = result;
    //Destination null - No destination like outside the draggable
    if (!destination) {
      return;
    }

    //Drop in the same place
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };
      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn,
        },
      };

      this.setState(newState);
      return;
    }

    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    this.setState(newState);
  };

  render() {
    return (
      <>
        <Title>TODO App</Title>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container>
            {this.state.columnOrder.map(columnId => {
              const column = this.state.columns[columnId];
              const task = column.taskIds.map(
                taskId => this.state.tasks[taskId],
              );
              return (
                <Column key={column.id} column={column} tasks={task}></Column>
              );
            })}
          </Container>
        </DragDropContext>
      </>
    );
  }
}
