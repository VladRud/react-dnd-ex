import React from 'react';
import './task.css';
import { Draggable } from 'react-beautiful-dnd';

export default class Task extends React.Component {
    render() {
        return (
            <Draggable
                draggableId={ this.props.task.id }
                index={ this.props.index }
            >
                { (provided, snapshot) => (
                    <div
                        className="task"
                        { ...provided.draggableProps }
                        { ...provided.dragHandleProps }
                        ref={ provided.innerRef }
                    >
                        { this.props.task.content }
                    </div>
                ) }
            </Draggable>
        )
    }
}