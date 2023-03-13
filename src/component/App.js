import React from "react";


export default class App extends React.Component {
    render() {
        return (
            <div className=" text-center  ">
                <h1 className="font-bold text-3xl mt-8 text-center">
                    ToDo App
                </h1>
                <input
                    name="todo"
                    placeholder="EnterTodo"
                    className="text-center mt-6 border-2 p-2 border-gray-300"
                />
            
            </div>

        )
    }
}