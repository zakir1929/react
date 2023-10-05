import './App.css';
import { Fragment, useState } from 'react';

function App() {

    // console.log(useState("hus"));

    const [count,setCount] = useState(0);

    function increment(){
        // count = count + 1;
        setCount(count + 1)
        setCount(count + 1)
        setCount(count + 1)
    }

    let name = "zakir hussain";

    return (
        <Fragment>
            <div>{name} Hello World </div>
            <div> <Demo /> </div>
        </Fragment>
    );
}

function Demo(){
    return(
        <Fragment>
            <h1>Demo Tag</h1>
        </Fragment>
    );
}

export default App;
