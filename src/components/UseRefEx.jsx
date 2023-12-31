import { useRef } from "react";
function UseRefEx() {
    const inputRef = useRef();

    const onSubmit = e => {
        e.preventDefault();
        console.log(inputRef.current.value);
        inputRef.current.value = 'hello'
    }
    return (
        <div >
            <form onSubmit={onSubmit}>
                <label htmlFor="name" >Name</label>
                <input type="text" ref={inputRef} id='name' className="form-control mb-2" />
                <button type="submit" className='btn btn-primary'>submit</button>
            </form>

        </div>
    )
}

export default UseRefEx;
