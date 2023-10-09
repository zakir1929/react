
import './AddVideo.css';

import { useState } from 'react';

function AddVideo(){

    const [video,setVideo] = useState({
        name: "Zakir",
        surname: "Hussain",
    });

    function handleForm(e){
        e.preventDefault();
        console.log(video);
    }

    function handleChange(e){
        setVideo({...video,
            [e.target.name] : e.target.value
        });
    }

    return (
        <form>
            <input onChange={handleChange} name="title" type="text" />
            <input onChange={handleChange} name="views" type="text" />
            <button type="submit" onClick={handleForm}>
                Submit
            </button>
        </form>
    )
}

export default AddVideo;