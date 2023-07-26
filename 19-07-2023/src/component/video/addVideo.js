import { useEffect, useState } from "react";

const initialVideoState = {
    date: "04, June 1996",
    verified: false,
    title: '',
    views: '',
};

function AddVideo({addVideos, editableVideo, updateVideo}) {

    const [video, setVideo] = useState(initialVideoState);

    function handleSubmit(e) {
        e.preventDefault();
        if(editableVideo) {
            updateVideo(video);
        } else {
            addVideos(video);
        }
        setVideo(initialVideoState);
    }

    function handleChange(e) {
        setVideo({...video,
            [e.target.name] : e.target.value,
        })
    }

    useEffect( ()=> {
        if(editableVideo) {
            setVideo(editableVideo)
            console.log(editableVideo);
        }
    }, [editableVideo])

    return (
        <>
            <form>
                <div className="form-group">
                    <input type="text" name="title" placeholder="title" onChange={handleChange} value={video.title}/>
                </div>
                <div className="form-group">
                    <input type="text" name="views" placeholder="views" onChange={handleChange} value={video.views}/>
                </div>
                <button className="addVideoBtn" onClick={handleSubmit}>
                    { editableVideo ? 'Edit' : 'add'} Video
                </button>
            </form>
        </>
    )
}

export default AddVideo;