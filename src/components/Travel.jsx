import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import AereoIMG from "../images/slider/aereo.jpg";
import SocialIMG from "../images/slider/social.jpg";
import TurismoIMG from "../images/slider/turismo.jpg";
import ProductoIMG from "../images/slider/productos.jpg";
import { Link } from "react-router-dom";

import SwiperCore, {
    Navigation,
    Pagination,
    Mousewheel,
    Keyboard,
    Autoplay,
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

const Travel = () => {
    return (
        <section id="travel">
            <Link to="/videos_lachfilms">
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    loop={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    className="mySwiper">
                    <SwiperSlide>
                        <img src={SocialIMG} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={TurismoIMG} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={AereoIMG} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ProductoIMG} alt="" />
                    </SwiperSlide>
                </Swiper>
            </Link>
        </section>
    );
};

export default Travel;
