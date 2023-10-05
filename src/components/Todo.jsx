import { useState, useEffect, useRef } from "react"

function Todo() {
    const [loading, setLoading] = useState(true);
    const [todo, setTodo] = useState({});

    const isMount = useRef(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    // console.log(isMount)
                    if (isMount.current) {
                        // setTodo(data);
                        setLoading(false);
                        setTodo(data);
                    }

                }, 1000)

            })
        // console.log(isMount + " above")
        //runs when component unmount 
        // return () => {
        //     isMount.current = false;
        // }
    }, [isMount])

    return loading ? <h1>Loading.....</h1> : <h1> {todo.title}</h1>

}

export default Todo
