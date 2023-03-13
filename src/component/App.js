import React, { useState } from "react";
import { connect } from 'react-redux';
import { createTodo, delTodo, search } from "../store/action";
import "../index.css"

function App(props) {

    const [todoInput, setTodoInput] = useState("");
    const [searchText, setsearchText] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        const trimed = todoInput.trim();
        if (!trimed.length) {
            setTodoInput("")
            return;
        }
        props.dispatch(createTodo(todoInput));
        setTodoInput("");
    }



    function handleDel(i) {
        props.dispatch(delTodo(i))

    }


    function handleSearch(event) {
        setsearchText(event.target.value)
        props.dispatch(search(event.target.value))
    }

    return (
        <div className=" text-center  ">
            <h1 className="font-bold text-3xl mt-8 text-center">
                ToDo App
            </h1>
            <input
                type="text"
                placeholder="Search"
                onChange={handleSearch}
                className="text-center mt-6 border-2 p-2 border-gray-300"
            />
            <form onSubmit={handleSubmit}>
                <input
                    className="text-center mt-6 border-2 p-2 border-gray-300"
                    onChange={(e) => setTodoInput(e.target.value)}
                    type="text"
                    placeholder="your todo"
                    value={todoInput}
                />

                <input type='submit' />
            </form>
            <div>
                <ul>
                    {props.todos && !searchText && props.todos.map((ele, i) => {
                        return (
                            <li>
                                <input key={i} type='checkbox' id="${i}" />
                                <label htmlFor="${i}">{ele.item}</label>
                                <button onClick={() => handleDel(i)}>X</button>
                            </li>
                        )
                    })}
                </ul>
                <ul>
                    {props.filteredTodo && searchText && props.filteredTodo.map((ele, i) => {
                        return (
                            <div >
                                <li className="flex-1 text-lg justify-between" >
                                    <input key={i}
                                        type='checkbox' id="${i}" />
                                    <label htmlFor="${i}" className="strikethrough">{ele.item}</label>
                                    <button onClick={() => handleDel(i)}>X</button>
                                </li>
                            </div>

                        )
                    })
                    }
                </ul>
            </div>
        </div>

    )
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        filteredTodo: state.filteredTodo
    }
}

export default connect(mapStateToProps)(App)