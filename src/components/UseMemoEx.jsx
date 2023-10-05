import { useState, useEffect, useMemo, useRef } from 'react'

function UseMemoEx() {
    const [number, setNumber] = useState(1);
    const [inc, setIncrement] = useState(0);

    const render = useRef(1);
    // const sqrt = getSqrt(number);
    const sqrt = useMemo(() => getSqrt(number), [number]);

    useEffect(() => {
        render.current = render.current + 1;
    })

    const onClick = () => {
        setIncrement((pre) => {
            console.log(pre + 1);
            return pre + 1;
        })
    }

    return (
        <div>
            <h1 className='mb-3 text-3xl'>Render: {render.current}</h1>
            <input type="number" value={number} className="input input-bordered w-full max-w-xs mb-6" onChange={(e) => {
                setNumber(
                    e.target.value)
            }} />
            <h1 className='mb-3 text-3xl'>Squreroot of {number} is: {sqrt}</h1>
            <button onClick={onClick} className='btn btn-primary'  >Re Render</button>


        </div>
    )
}

function getSqrt(n) {
    for (let i = 0; i < 10000; i++) {
        console.log(i)
    }
    console.log('called');
    return Math.sqrt(n);
}

export default UseMemoEx
