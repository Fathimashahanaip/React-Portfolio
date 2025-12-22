import React from 'react'
import './Todo.css'
import todo1 from '../../../assets/todolist.png'
import todo2 from '../../../assets/todo.png'
import todo3 from '../../../assets/tto.png'




const Todo = () => {
  return (
    <div>
   
               <div className='todo-app' id='todo'>
                   <div className="todo_head">
                       <h1>TO-DO LIST</h1>
                       </div>
                       <div className="todo-overview">
                           <u>
                           <h2>Project Overview</h2></u>
                           <p>
                           This web-based To-Do List application helps users organize tasks efficiently.
                            It allows users to add, edit, and delete tasks while keeping track of their progress.
                           </p>
                           
                       </div>
                       <div className="todo-key">
                           <u>
                           <h2>Key Features</h2></u>
                           
                               <li> Add, Edit, and Delete Tasks.</li><br></br>
                               <li>Mark Tasks as Completed. </li>
                           
                       </div>
                       <div className="todo-tech">
                           <u>
                           <h2> Technologies Used</h2></u>
                           
                           <li>FrondEnd: HTML, CSS, JavaScript, React,Expree.js, Node.js.</li><br/>
                            <li>BackEnd: MongoDb.</li>
                        
                         
                       </div>
                       <div>
                           <h2></h2>
                       </div>

                       <div className="todo-imgh2">
                           <u>
                           <h2>Images</h2></u>
                       </div>
                       <div className="todo-img">
                          
                          
                           <div className="todo-img1">
                               <img src={todo2} alt=""width={350} height={150}/>
                               </div>
                               <div className="todo-img1">
                                   <img src={todo1} alt=""width={350} height={150} />
           
                               </div>
                                <div className="todo-img1">
                                   <img src={todo3} alt=""width={350} height={150}/>
           
                               </div> 
           
                           
                         
                       </div>
           
           
           
                       </div>
                       <div className='todo-link'>
                           
                           <div className='todo-link-git'>   <h4>GitHub :</h4>  </div>
                            <div className='todo-link-git'> <a href="https://github.com/Fathimashahanaip/MERN-TODO_LIST_APP">https://github.com/Fathimashahanaip/MERN-TODO_LIST_APP</a>
                            </div> 
                            </div>
           
       </div>
  )
}

export default Todo