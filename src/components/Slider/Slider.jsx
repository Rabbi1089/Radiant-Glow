// src/components/Slider.jsx

import { Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/controller";

const Slider = () => {
  return (
    <section className="mt-0 rounded-full mx-4 sm:mx-8 md:mx-20 lg:mx-50 z-10">
      <div className="flex items-center ">
        <Swiper
          modules={[Autoplay, A11y]}
          spaceBetween={30} // Adjust the spacing as needed
          slidesPerView={1} // Show only one slide by default
          autoplay
        >
          <SwiperSlide>
            <div
              className="hero min-h-[180px] md:min-h-[480px] w-full"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/two-girls-are-doing-make-up-front-big-mirror_231208-3556.jpg?t=st=1731768964~exp=1731772564~hmac=758e77653d21ccfbcd6c84d7af07b6d7ac30ccf78f23c55e2acfa1c679a2dfa7&w=1380)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-2 text-xl md:mb-5 md:text-5xl font-bold">
                    Complete Makeover Service
                  </h1>
                  <p className="mb-5">
                    <button
                      type="button"
                      className="px-8 py-3 font-semibold rounded-md bg-blue-800 text-gray-100"
                    >
                      Book Now
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-[180px] md:min-h-[480px]  w-full"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/beautiful-young-woman-wearing-sari_23-2149503029.jpg?t=st=1731769144~exp=1731772744~hmac=95cff3b8f7a06e70b1c72d5c284ff649472d1b3fd14736d48597e1411ff60691&w=1380)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-2 text-xl md:mb-5 md:text-5xl font-bold">
                    Pioneers Of Beauty Related Services
                  </h1>
                  <p className="mb-5">
                    <button
                      type="button"
                      className="px-8 py-3 font-semibold rounded-md bg-blue-800 text-gray-100"
                    >
                      Book Now
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-[180px] md:min-h-[480px]  w-full"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/woman-drying-hair-hairsalon_1157-27183.jpg?t=st=1731769208~exp=1731772808~hmac=c039e840acb788d20fc76cebcfd66656134bfadabd17a810e2c781640972a36f&w=1380)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-2 text-xl md:mb-5 md:text-5xl font-bold">
                    Professional Makeup Services
                  </h1>
                  <p className="mb-5">
                    <button
                      type="button"
                      className="px-8 py-3 font-semibold rounded-md bg-blue-800 text-gray-100"
                    >
                      Book Now
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="hero min-h-[180px] md:min-h-[480px]  w-full"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/two-beautiful-women-models-with-makeup-clean-healthy-skin-face-pink-wall_158538-14840.jpg?t=st=1731769243~exp=1731772843~hmac=d3cd6e9d911270ab5a74daac8d89a5473794541153278b2c84dde732da21a219&w=1380)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-2 text-xl md:mb-5 md:text-5xl font-bold">
                    Exclusive Bridal Makeup
                  </h1>
                  <p className="mb-5">
                    <button
                      type="button"
                      className="px-8 py-3 font-semibold rounded-md bg-blue-800 text-gray-100"
                    >
                      Book Now
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
