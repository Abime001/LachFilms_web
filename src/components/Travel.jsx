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
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const Travel = () => (
    <section id="travel">
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            loop={true}
            autoplay={true}
            className="mySwiper">
            <SwiperSlide>
                <Link to="/videos_lachfilms">
                    <img src={SocialIMG} alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to="/videos_lachfilms">
                    <img src={TurismoIMG} alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to="/videos_lachfilms">
                    <img src={AereoIMG} alt="" />
                </Link>
            </SwiperSlide>
            <SwiperSlide>
                <Link to="/videos_lachfilms">
                    <img src={ProductoIMG} alt="" />
                </Link>
            </SwiperSlide>
        </Swiper>
    </section>
);

export default Travel;
