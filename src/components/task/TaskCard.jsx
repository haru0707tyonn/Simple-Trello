import React, { useState } from 'react'
import { TaskCardTitle } from './TaskCardTitle';
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton';
import { TaskAddInput } from './input/TaskAddInput';
import { Tasks } from './Tasks';
import { Draggable } from 'react-beautiful-dnd';

export const TaskCard = ({taskCardsList, setTaskCardsList, taskCard, index}) => {

  const [inputText, setInputText] = useState(""); //32
  const [taskList, setTaskList] = useState([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div 
          className='taskCard' 
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          {/* ここに{...provided.dragHandleProps}をつけることにより中のドラッグアンドドロップと混合しない 45 */}
          <div className='taskCardTitleAndTaskCardDeleteButtonArea' {...provided.dragHandleProps}>
            <TaskCardTitle />
            <TaskCardDeleteButton 
              taskCardsList={taskCardsList} 
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
            <TaskAddInput 
              inputText={inputText} 
              setInputText={setInputText} 
              taskList={taskList} 
              setTaskList={setTaskList}  
            />
            <Tasks inputText={inputText} taskList={taskList} setTaskList={setTaskList} />
        </div>
      )}
      
    </Draggable>
  );
};
