import React from "react";

export default function VideoPlayer() {
  return (
    <div className="videoPlayer">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/izGwDsrQ1eQ"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}
