import { useContext, useEffect, useState } from "react";
import VideoDispatchContext from "../context/videoDispatch";

const initialState = {
    title: '',
    channel: '',
    views: '',
    verified: true,
}

function AddVideo({editableVideo}) {

    const [video, setVideo] = useState(initialState);
    const dispatch = useContext(VideoDispatchContext);

    function handleSubmit(e) {
        e.preventDefault();
        if(editableVideo) {
            dispatch({type:'UPDATE', playload: video})
        }
        else {
            dispatch({type:'ADD', playload: video})
        }
        setVideo(initialState);
    }

    function handleChange(e) {
        setVideo({
            ...video, 
            [e.target.name]: e.target.value,
        })
    }
    
    useEffect(()=> {
        window.scrollTo(0, 0);
        if(editableVideo) {
            setVideo(editableVideo);
        }
    }, [editableVideo])

    return (
        <>
            <div className="addVideoWrapper">
                <h4 className="section-title"> 
                    {editableVideo ? "Edit Video" : "Add Video"}
                </h4>
                <form className="form-wrapper">
                    <div className="form-group">
                        <label className="input-label">Title</label>
                        <input className="input-field" required name="title" type="text" onChange={handleChange} value={video.title}/>
                    </div>
                    <div className="form-group">
                        <label className="input-label">Channel</label>
                        <input className="input-field" required name="channel" type="text" onChange={handleChange} value={video.channel}/>
                    </div>
                    <div className="form-group">
                        <label className="input-label">Views</label>
                        <input className="input-field" required name="views" type="text" onChange={handleChange} value={video.views}/>
                    </div>
                    <button className="add-videobtn" onClick={handleSubmit}>
                        {editableVideo ? "Edit Video" : "Add Video"}
                    </button>
                </form>
            </div>
        </>
    )
}

export default AddVideo;
