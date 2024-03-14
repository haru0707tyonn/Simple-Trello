import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
// フォントオーサムCDNをpublicのindex.htmlに張り付ける必要がある

export const Task = ({task, taskList, setTaskList, index}) => { // 34

  const handleDelete  = (id) => { // 36
    setTaskList(taskList.filter((task) => task.id !== id));
  };  

  return (
    // Tasks.jsxとこちらでドラッグアンドドロップを実現している indexをindexで指定しないとバグが発生する
    <Draggable index={index} draggableId={task.draggableId}>
        {/* こちらも関数内に記述する必要がある */}
        {(provided) => (
            <div className='taskBox' key={task.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <p className='taskText'>{task.text}</p>
            <button className='taskTrashButton' onClick={() => handleDelete(task.id)}>
                <i className="fas fa-trash-alt"></i>
            </button>
        </div>
        )}
    </Draggable>
  )
}
