import React, { useState } from 'react'

export const TaskCardTitle = () => {

  const [isClisk, setIsClick] = useState(false); // 29 タイトルが押されたときにインプットタグに切り替えて表示するための状態変数 
  const [inputCardTitle, setInputCardTitle] = useState("Today"); // 29 タイトルがフォームタグにて変更された値を表示するための状態変数（初期値はToday）

  const handleClick = () => {
    setIsClick(true);
  };

  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Enterを打つとデフォルトでされるリロードをしない（状態が保たれる）
    setIsClick(false); // 編集状態を終了する
  };

  const handleBlur = () => {
    setIsClick(false);
  }

  return (
    <div onClick={handleClick} className='taskCardTitleInputArea'>
      {isClisk ? (
        <form onSubmit={handleSubmit}>
          {/* 値が変わるたびに呼ばれるonChange  onBlurはinputタグから外れてクリックした場合 */}
          <input 
          className='taskCardTitleInput'
            type="text" 
            autoFocus // クリックしたとき自動でフォーカス（カーソルが当たっている状態）になる
            onChange={handleChange} 
            onBlur={handleBlur} // input範囲外をクリックしたときに入力を終わる設定
            value={inputCardTitle}  // クリックしたときに値が空にならない設定
            maxLength="10"
          />
        </form>
      ) : ( 
      <h3>{inputCardTitle}</h3>
      )}
    </div>
  )
}
