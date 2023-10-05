import './App.css';
import { Fragment, useState } from 'react';

import List from './List';

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

    return (
        <Fragment>
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
            <List layout="numbered" items={2}/>
            <List layout="bullet" items={4}/>
        </Fragment>
    );
}

export default App;
