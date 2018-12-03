import React from 'react';
import './column.css';
import Task from './task';
import { Droppable } from 'react-beautiful-dnd';

export default class Column extends React.Component {
    render() {
        return (
            <div className="container">
                <h3>{ this.props.column.title }</h3>
                <Droppable droppableId={ this.props.column.id }>
                    { provided => (
                        <div
                            className="list"
                            ref={ provided.innerRef }
                            { ...provided.droppableProps }
                        >
                            { this.props.tasks.map((task, index) =>
                                <Task key={ task.id } index={ index } task={ task }/>
                            ) }
                            { provided.placeholder }
                        </div>
                    ) }
                </Droppable>
            </div>
        )
    }
}