import { useState } from 'react';
import './App.css';

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Header from './components/header/Header';
import { TaskCards } from './components/task/TaskCards';

function App() {

  // const [items, setItems] = useState([
  //   {id: "0", text: "item0"}, 
  //   {id: "1", text: "item1"}, 
  //   {id: "2", text: "item2"}])

  // const onDragEnd = (result) => {
  //   const remove = items.splice(result.source.index, 1)
  //   items.splice(result.destination.index, 0, remove[0])
  // }

  return (
    <div className='app'>
      {/* <div className="dragDropArea">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="doroppable">
          {(provided) => <div {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={item.id}>
                {(provided) => <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="item">
                  {item.text}
                  </div>}
              </Draggable>
            ))}
            {provided.placeholder}
            </div>}
        </Droppable>
      </DragDropContext>
      </div> */}

      <Header />
      <TaskCards />
    </div>
  );
}

export default App;
