import { useEffect, useRef, useState } from 'react'

function UseRefEx2() {

    const [name, setName] = useState('');
    const render = useRef(0);
    const preName = useRef('');
    useEffect(() => {
        render.current = render.current + 1;
        preName.current = name;

    }, [name])


    return (
        <div>
            <h1>Render : {render.current} </h1>
            {/* <form action="" className="form-control mb-6"> */}
            <h1>Set name : {name}</h1>
            <h1 className='mb-6'>previous name : {preName.current}</h1>
            <input type="text" value={name} onChange={(e) => {
                setName(e.target.value)
            }} className="mb-3" />
            {/* </form> */}
        </div>
    )
}

export default UseRefEx2
