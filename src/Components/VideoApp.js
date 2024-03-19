import React, { useRef } from "react";

const VideoApp = () => {
    const VideoRef = useRef();

    const playVideo = ()=> VideoRef.current.play()
    const pauseVideo =()=> VideoRef.current.pause()

    return (
        <div>
            <video ref={VideoRef} width={300} height={300} controls>
                <source src={"https://youtu.be/ZycMJWv2vtY?si=TIZHgq-MTqBzHuY6"} type="video" />
                Your browser dosnot support video
            </video>
            <button onClick={playVideo}>Play</button>
            <button onClick={pauseVideo}>Pause</button>
        </div>
    )
}
export default VideoApp;