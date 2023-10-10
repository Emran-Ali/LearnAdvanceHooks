import useFetch from "../customHook/useFetch";

function CustomHooksEx1() {
    const res = useFetch('https://jsonplaceholder.typicode.com/posts', {});
    console.log('abc');
    console.log(res);
    return (
        <div>
            {/* {res.map((post) => (
                <h1 key={post.id} className="mb-3">{post.title}</h1>
            )
            )} */}

            use
        </div>
    )
}

export default CustomHooksEx1
