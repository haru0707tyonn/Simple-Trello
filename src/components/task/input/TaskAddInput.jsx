import React from 'react'
import { v4 as uuid } from 'uuid'; // 39

export const TaskAddInput = ({inputText, setInputText, taskList, setTaskList}) => { // 31 32

  const handleSubmit = (e) => {
    const taskId = uuid(); // ユニークなIDが生成される yarn install uuid
    e.preventDefault();
    if(inputText === "") { // フォームが空の場合には送信しない
      return;
    }
    // カードを追加する
    setTaskList([
      ...taskList, 
      {
        id: taskId, // ユニークなIDを設定しないとバグる 39 UUIDを使う
        draggableId: `task-${taskId}`, // 37 Idはstring型である必要がある
        text:inputText
      }
    ]);
    // console.log(...taskList);
    // console.log(inputText);
    setInputText(""); // 追加したらフォームは空にする
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='add a task' className='taskAddInput' onChange={handleChange} value={inputText}/>
        </form>
    </div>
  )
};
