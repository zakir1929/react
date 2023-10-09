import {useState} from 'react';


function Counter(){

    const [count,setCount] = useState(0);

    function addCount(){
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        console.log(count);
    }

    return (
        <>
            <h1>{count}</h1>
            <button onClick={addCount}>Add Count +</button>
        </>
    )

}

export default Counter;