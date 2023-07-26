import { useState } from "react";

import VideosData from "./data/videoData";
import AddVideo from "./component/video/addVideo";
import VideoList from "./component/video/videoList";
import "./../src/index.css";

function App() {
  const [videos, setVideos] = useState(VideosData);
  const [editableVideo, setEditableVideo] = useState();

  function addVideos(video) {
    setVideos([...videos, { ...video, id: videos.length + 1 }]);
  }

  function deleteVideo(id) {
    setVideos(videos.filter(video=> video.id!==id))
  }

  function editVideo(id) {
    setEditableVideo(videos.find(video=> video.id===id));
  }

  function updateVideo(video) {
   const index = videos.findIndex(v => v.id === video.id);
   const newVideos = [...videos];
   newVideos.splice(index, 1 , video);
   setVideos(newVideos);
  }

  return (
    <div className="App" onClick={() => console.log("this is app text")}>
      <AddVideo addVideos={addVideos} editableVideo={editableVideo} updateVideo={updateVideo} />
      <VideoList editVideo={editVideo} deleteVideo={deleteVideo} videos={videos} />
    </div>
  );
}

export default App;
