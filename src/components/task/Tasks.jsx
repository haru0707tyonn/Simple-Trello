import React from 'react'
import { Task } from './Task'
import { DragDropContext, Droppable } from "react-beautiful-dnd";

const reorder = (taskList, startIndex, endIndex) => { // 38
  // タスクを並び変える [1, 2, 3]
  const remove = taskList.splice(startIndex, 1); // タスクの削除（選択したものを削除）[2, 3] 38
  taskList.splice(endIndex, 0, remove[0]); // ドロップした場所に削除したものを追加 [2, 1, 3]
};

export const Tasks = ({ taskList, setTaskList }) => {

  const hanleDragEnd = (result) => {
    // console.log(result);
    reorder(taskList, result.source.index, result.destination.index);

    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={hanleDragEnd}> 
        <Droppable droppableId='droppable'>
          {/* Droppable（ドロップするエリア）の中は関数である必要がある */}
          {(provided) => (
            // 下の二つのプロパティは必須（ドキュメント通り）最後に{provided.placeholder}も忘れずに Task.jsxにDraggableを記述しないとドラッグアンドドロップはできない
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                <div key={task.id}>
                  <Task
                    index={index}
                    task={task}
                    taskList={taskList}
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}
