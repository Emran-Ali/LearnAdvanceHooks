import { useState } from "react"
import Todo from "./Todo"

function UseRefEx3() {
    const [showTodo, setTodo] = useState(true);
    return (
        <div>
            {showTodo && <Todo />}
            <button className="btn btn-primary" onClick={() => {
                setTodo(!showTodo)
            }}>Set Todo</button>
        </div>
    )
}

export default UseRefEx3
