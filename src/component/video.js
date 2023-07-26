import { useContext } from "react";
import VideoDispatchContext from "../context/videoDispatch";

function Video({id, title, channel, verified, views, editVideo}) {
  const editIcon = "./edit.svg";
  const deleteIcon = "./trash.svg";

  const dispatch = useContext(VideoDispatchContext);

  return (
    <>
      <div className="videoCard">
        <img
          src={`https://picsum.photos/id/${id}/600/400`}
          alt="videoCard"
          title="videoCard"
          className="videoCardImage"
        />
        <h2 className="videoTitle">{title}</h2>
        <p className="videoChannelName">{channel}</p>
        <div className="videoViews">{views}</div>
        <span className="videoVerified">{verified}</span>
        <div className="videoAction">
          <button className="videoEdit" onClick={()=> editVideo(id)}>
            <img src={editIcon} alt="editIcon" title="Edit Icon" />
          </button>
          <button onClick={()=> dispatch({type:'DELETE', playload: id})} className="videoDelete">
            <img src={deleteIcon} alt="deleteIcon" title="Delete Icon" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Video;
