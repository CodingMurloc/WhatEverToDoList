import React from 'react';
import './TodoList.css';
import ActivityListSection from "./ActivityList/ActivityListSection";
import {dummyActs} from "./ActivityList/ActivityListData";

function TodoList() {
  return (
      <div className='TodoList'>
        <h1 className='TodoList-Header'>凸度利斯特(自作用)</h1>
        <ActivityListSection activities={dummyActs}/>
      </div>
  );
}

export default TodoList;