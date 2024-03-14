import React, { useState } from 'react'
import { TaskCard } from './TaskCard'
import { AddTaskCardButton } from './button/AddTaskCardButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorder = (taskCardsList , startIndex, endIndex) => { // 38
  // タスクを並び変える [1, 2, 3]
  const remove = taskCardsList.splice(startIndex, 1); // タスクの削除（選択したものを削除）[2, 3] 38
  taskCardsList.splice(endIndex, 0, remove[0]); // ドロップした場所に削除したものを追加 [2, 1, 3]
};

export const TaskCards = () => {

  const [taskCardsList, setTaskCardsList] = useState([{
    id: "0",
    draggableId: "item0"
  }]); // 42 

  const handleDragEnd = (result) => {
    reorder(taskCardsList, result.source.index, result.destination.index);

    setTaskCardsList (taskCardsList );
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      {/* direction='horizontal'は水平移動という設定 */}
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided) => (
          <div 
            className='taskCardsArea' 
            {...provided.droppableProps} 
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard, index) => (
              <TaskCard
                key={taskCard.id}
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
              /> // 削除するときのIdが入っている
              ))}
              {provided.placeholder}
            <AddTaskCardButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} />
          </div>
        )}
      
      </Droppable>
    </DragDropContext>
  )
}
