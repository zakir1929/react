import logo from './logo.svg';
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

    return (
        <Fragment>
        <div>{count}</div>
        <button onClick={increment}>
            Click Alert
        </button>
        </Fragment>
    );
}

export default App;
