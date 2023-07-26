function Video({id, title, date, views, verified, children, deleteVideo, editVideo}) {

    return (
    <div className="video-section">
        <img alt="iamge" src={`https://picsum.photos/id/${id}/600/400`}/>
        <div>
          <button onClick={()=> editVideo(id)}>Edit</button>
        </div>
        <div>
          <button onClick={()=> deleteVideo(id)}>Delete</button>
        </div>
        <h4>{title}</h4>
        <p>{date}</p>
        <p>{views} views</p>
        <p>{verified && "✅" }</p>
        <p>{children}</p>
    </div>
  )  
}

export default Video;