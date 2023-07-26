import PlayButton from "./playButton";
import Video from "./video";

function VideoList({ videos, deleteVideo, editVideo }) {
  return (
    <>
      <div className="videoPageWrapper">
        {videos.map((video) => (
          <Video
            key={video.id}
            id={video.id}
            verified={video.verified}
            title={video.title}
            date={video.date}
            views={video.views}
            deleteVideo={deleteVideo}
            editVideo={editVideo}
          >
            <PlayButton
              onPlay={() => console.log("Play Button")}
              onPause={() => console.log("Pause Button")}
            >
              {video.title}
            </PlayButton>
          </Video>
        ))}
      </div>
    </>
  );
}

export default VideoList;
