import React, { useCallback, useState } from 'react'

function UseCallbackEx() {
    const [task, setTask] = useState([]);

    const addTask = useCallback(() => {
        setTask((preState) => [...preState, 'Some Task']);
    }, [setTask])
    return (
        <div>
            <Button addTask={addTask} />
            {task.map((task, index) => (
                <p key={index}>{task} and {index}</p>
            ))

            }

        </div>
    )
}
const Button = React.memo(({ addTask }) => {
    console.log('Button render');
    return <button className='btn btn-primary' onClick={addTask} >Add Task</button>

})

export default UseCallbackEx;
