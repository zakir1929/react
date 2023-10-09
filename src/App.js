import './App.css';
import { Fragment, useState } from 'react';

import List from './List';
import Counter from './Counter';
import AddVideo from './AddVideo';

function App() {


    const videos = [
        {
            id: 1,
            name: "zakir",
            phone: 9893771306,
        },
        {
            id: 2,
            name: "umar",
            phone: 7458962125,
        },
        {
            id: 3,
            name: "khalid",
            phone: 4545454545,
        },
    ];
    
    const onVideoClick = () => {
        alert(1);
    }

    return (
        <Fragment>

            <AddVideo></AddVideo>

            <ul>
                {
                    videos.map(video => 
                        <li key={video.id}>
                        {video.id} &nbsp;
                        {video.name} &nbsp;
                        {video.phone} &nbsp;
                        </li>
                    )
                }
            </ul>
            <button onClick={onVideoClick}>
                Click Here
            </button>
            <List layout="numbered" items={2}/>
            <List layout="bullet" items={4}/>
            <Counter></Counter>
        </Fragment>
    );
}

export default App;
