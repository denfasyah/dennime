"use client";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
    const opts = {
        height: '450',
        width: '850',
        
      };
  
  return (
    <div className="container flex justify-center mt-10">
      <Youtube
        videoId={youtubeId}
        onReady={(event) => event.target.pauseVideo()}
        opts={opts}
        iframeClassName="lg:w-[850px] lg:h-[350px] md:w-[650px] sm:w-[400px] w-[350px] h-[250px]"
      />
    </div>
  );
};

export default VideoPlayer;
