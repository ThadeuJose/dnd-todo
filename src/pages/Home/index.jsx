import { Title } from "./styles";
import {columns, columnOrder, tasks} from "../../initialData";
import Column from "../../components/Column";

function Home() {
  
  return (<>
    <Title>Hello World from Home</Title>
    {columnOrder.map((columnId) => {
      const column = columns[columnId];
      const task = column.taskIds.map((taskId) => tasks[taskId]);
      return (<Column key ={column.id} column={column} tasks={task}></Column>)
    })}</>);
}

export default Home;
