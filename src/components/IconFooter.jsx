import React from "react";

const IconFooter = ({icon, url, title}) => (
    <a target="_blank" href={url}>
        <img src={icon} title={title} />
    </a>
);

export default IconFooter;
