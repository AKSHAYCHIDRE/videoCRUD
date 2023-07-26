import { useEffect, useReducer, useState } from "react";
// import VideoData from "./mockData/videoData";
import AddVideo from "./component/addVideo";
import Video from "./component/video";
import VideosContext from "./context/videosContext";
import VideoDispatchContext from "./context/videoDispatch";
import axios from "axios";

function App() {
  const lightModeIcon = "./moon.svg";
  const darkModeIcon = "./sun.svg";

  const [editableVideo, setEditableVideo] = useState();
  const [mode, setMode] = useState("dark-mode");
  // const [videos, dispatch] = useReducer(videoReducer, VideoData);
  const [videos, dispatch] = useReducer(videoReducer, []);

  const url =
    "https://api.mockfly.dev/mocks/572cc1d0-7474-409d-b0ac-d09953a6e441/videos";

  useEffect(() => {
    async function getVideos() {
      const res = await axios.get(url);
      dispatch({ type: "LOAD", playload: res.data });
    }
    getVideos();
  }, []);

  function videoReducer(videos, action) {
    switch (action.type) {
      case "LOAD":
        return action.playload;
      case "ADD":
        return [...videos, { ...action.playload, id: videos.length + 1 }];
      case "UPDATE":
        const index = videos.findIndex((v) => v.id === action.playload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.playload);
        setEditableVideo(null);
        return newVideos;
      case "DELETE":
        return videos.filter((video) => video.id !== action.playload);
      default:
        return videos;
    }
  }

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <VideosContext.Provider value={videos}>
      <VideoDispatchContext.Provider value={dispatch}>
        <div className={mode}>
          <header>
            <div className="container header-inner">
              <div className="logo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-video"
                >
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <button
                className="theme-mode-icon"
                onClick={() =>
                  setMode(mode === "dark-mode" ? "light-mode" : "dark-mode")
                }
              >
                {mode === "dark-mode" ? (
                  <img
                    src={lightModeIcon}
                    alt="lightModeIcon"
                    title="lightModeIcon"
                  />
                ) : (
                  <img
                    src={darkModeIcon}
                    alt="darkModeIcon"
                    title="darkModeIcon"
                  />
                )}
              </button>
            </div>
          </header>

          <div className="container">
            <AddVideo editableVideo={editableVideo} />

            <div className="videoList">
              {videos.map((video, index) => (
                <Video
                  id={video.id}
                  title={video.title}
                  channel={video.channel}
                  verified={video.verified}
                  views={video.views}
                  key={index}
                  editVideo={editVideo}
                />
              ))}
            </div>
          </div>
        </div>
      </VideoDispatchContext.Provider>
    </VideosContext.Provider>
  );
}

export default App;
