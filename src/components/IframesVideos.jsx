import React from "react";

const IframesVideos = ({url}) => (
    <div className="m-i-1">
        <iframe
            src={url}
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen></iframe>
    </div>
);

export default IframesVideos;
