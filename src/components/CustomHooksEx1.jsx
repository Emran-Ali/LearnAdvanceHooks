import useFetch from "../customHook/useFetch";

function CustomHooksEx1() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const res = useFetch(url, {});
    console.log('why double')
    if (res.loadin)
        return <h3>Loading.....</h3>
    const items = res.data;
    return (
        <div>
            <h1 className="text-center">It's a bad problem</h1>
            <h3 className="mb-5 text-center text-3xl">Fetch data from an api in react</h3>
            <div className="container text-center">
                {items.map((item) => (
                    <div key={item.id} className="item card mb-4">
                        <ol key={item.id}>
                            <div>
                                <strong>
                                    {"User_Name: "}
                                </strong>
                                {item.username},
                            </div>
                            <div>
                                Full_Name: {item.name},
                            </div>
                            <div>
                                User_Email: {item.email}
                            </div>
                        </ol>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CustomHooksEx1
