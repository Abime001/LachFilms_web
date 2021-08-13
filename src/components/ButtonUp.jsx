import React, { useEffect } from "react";

const ButtonUp = () => {
    useEffect(() => {
        var x = document.getElementById("go__up");

        window.onscroll = function () {
            "use strict";

            if (window.pageYOffset >= 200) {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
        };

        x.onclick = function () 
        {
            "use strict";
            window.scrollTo(0, 0);
        };
    }, []);

    return (
        <button id="go__up" title="Ir arriba">
            <i className="fas fa-caret-square-up"></i>
        </button>
    );
};

export default ButtonUp;
