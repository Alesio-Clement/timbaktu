import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cube";
import { Pagination, Autoplay, EffectCube } from "swiper/modules";
import slider1 from "../../assets/img/slider1.webp";
import slider2 from "../../assets/img/slider2.webp";
import slider3 from "../../assets/img/slider3.webp";
import "./slider.css";

const Slider = () => {
  const slides = [
    {
      id: 1,
      image: slider3,
      title: "Coding Made Fun for Kids",
      text: "Empower young minds with the basics of coding! Our interactive lessons make learning programming exciting, engaging, and easy to grasp for kids aged 8-16.",
      link: "/course/2",
    },
    {
      id: 2,
      image: slider1,
      title: "Start Your Coding Journey Today!",
      text: "Learn the fundamentals of programming, from variables to loops, and build a strong foundation in coding. Perfect for beginners looking to dive into the tech world!",
      link: "/course/1",
    },
    {
      id: 3,
      image: slider2,
      title: "Create Stunning Websites with WordPress!",
      text: "Master the art of website creation using WordPress. Learn how to design, customize, and manage professional websites with ease—no coding required!",
      link: "/course/4",
    },
  ];

  return (
    <section className="my-0">
      <Swiper
        modules={[Pagination, Autoplay, EffectCube]}
        effect="cube"
        cubeEffect={{
          shadow: true,
          slideShadows: false, // Disable shadows to reduce flickering
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={{ clickable: true, type: "bullets" }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="carousel-slide">
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="parallax-image"
                data-swiper-parallax="-50%"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <div className="carousel-content">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: index === 0 ? 0.3 : 0.5, // Stagger delay on first slide
                  }}
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {slide.text}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <Link to={slide.link} className="theme-btn">
                    JOIN NOW
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
