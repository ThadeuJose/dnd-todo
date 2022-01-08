import { Title, Container } from "./styles";
import {columns, columnOrder, tasks} from "../../initialData";
import Column from "../../components/Column";

function Home() {
  
  return (<>
    <Title>TODO App</Title>
    <Container>
    {columnOrder.map((columnId) => {
      const column = columns[columnId];
      const task = column.taskIds.map((taskId) => tasks[taskId]);
      return (<Column key ={column.id} column={column} tasks={task}></Column>)
    })}
    </Container>
    </>);
}

export default Home;
