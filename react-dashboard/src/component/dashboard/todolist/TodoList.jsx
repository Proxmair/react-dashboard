import React from 'react'
import LeftArrow from '../../../icons/LeftArrow'
import RightArrow from '../../../icons/RightArrow'
import Add from '../../../icons/Add'
import Tick from '../../../icons/Tick'
import Delete from '../../../icons/Delete'

const TodoList = () => {

    const todolistdata = [
        {
            heading:"Run payroll",
            text:"Run end of month payroll"

        }, 
        {
            heading:"Sign board resolution",
            text:"Once the resolution is finalized"
        }, 
        {
            heading:"New Analytics Dashboard",
            text:"New employee in the product department"
        }
    ];
    return (
        <div className='todolist'>
            <div className='todolist-heading'>
                <h3>To Do List</h3>
                <p>See all</p>
            </div>
            <div className='todolist-content'>
                <div className='todolist-content-date'>
                    <p>01 - April - 2023</p>
                    <div><LeftArrow /><RightArrow /></div>
                </div>
                <div className='todolist-content-item-container'>
                    <div className='todolist-content-item'>
                        {todolistdata.map((item, index) => (
                            <div>
                                <div>
                                    <div><p>{index}</p></div>
                                    <div><h3>{item.heading}</h3><p>{item.text}</p></div>
                                </div>
                                <div className='todolist-content-item-btn'>
                                    <button><Tick/></button>
                                    <button><Delete/></button>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className='todolist-add-item-btn' >
                        <p>Create a new item</p>
                        <Add />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TodoList
