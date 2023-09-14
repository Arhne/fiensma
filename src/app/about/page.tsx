"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import styles from "./about.module.scss";
import { imageLoader } from "@/common/Utils/imageLoaders";

import { Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { _slides } from "./util";

const About = () => {
  return (
    <main>
      <div className={`row ${styles.AboutUs}`}>
        <div
          className={`col-sm-12 col-xs-12 col-lg-6  ${styles.LeftContainer}`}
        >
          <small className={styles.AboutUsTag}>About Us</small>
          <h2 className={styles.HeaderText}>
            We are a team of <br /> creators and <br />{" "}
            <span className={styles.HighlightedInnovators}>innovators</span>
          </h2>
          <p className={styles.TagLine}>
            We believe that peace and prosperity are built on economic and
            financial freedom, and by making more of it available to people, we
            alleviate suffering worldwide.
          </p>
        </div>
      </div>
      <div className={`row gx-5 ${styles.Mission}`}>
        <div className="col-sm-12 col-xs-12 col-lg-6"></div>
        <div
          className={`col-sm-12 col-xs-12 col-lg-6  ${styles.RightContainer}`}
        >
          <h3>Our Mission</h3>
          <p className={styles.Text}>
            Our mission is to simplify currency transactions for individuals,
            foreign businesses, freelancers, and other institutions by utilizing
            cutting-edge technologies.
          </p>
        </div>
      </div>
      <div className={`row gx-5 ${styles.Vision}`}>
        <div className={`col-xs-12 col-sm-7 ${styles.LeftColumn}`}>
          <h3 className={styles.Title}>Our Vision</h3>
          <p className={styles.LeftText}>
            Our vision is to rank the top decentralized exchanges platform that
            enables anyone anywhere to control their own money.
          </p>
        </div>
        <div className={`col-xs-12 col-sm-5 ${styles.RightColumn}`}>
          <Image
            loader={() =>
              imageLoader(
                "https://res.cloudinary.com/dbg2z1svm/image/upload/v1694618651/ibx-website-v2/about-us/hand_dollar_cofs0e.webp"
              )
            }
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1694618651/ibx-website-v2/about-us/hand_dollar_cofs0e.webp"
            width={505}
            height={543}
            className={styles.RightImage}
            alt=""
          />
        </div>
      </div>
      <div className={styles.Values}>
        <h3>The 4 Values we live by</h3>
        <p>
          We hold our customers so dearly and always focus on bring a seamless
          solution to them.
        </p>

        <div className={`row gx-5  ${styles.Trust}`}>
          <div className={`col-xs-12 col-sm-12 col-lg-5 ${styles.Left}`}>
            <h4>Trust</h4>
            <p>
              Trust is what we’ve earned. We are driven by the sole aim of
              easing currency transactions for foreign organizations,
              individuals, freelancers, and other institutions.
            </p>
          </div>
          <div className={`col-xs-12 col-sm-12 col-lg-7 ${styles.Right}`}>
            <Image
              loader={() =>
                imageLoader(
                  "https://res.cloudinary.com/dbg2z1svm/image/upload/v1694623598/ibx-website-v2/about-us/trust_img_yfq0uz.png"
                )
              }
              src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1694623598/ibx-website-v2/about-us/trust_img_yfq0uz.png"
              width={761}
              height={543}
              className={styles.RightImage}
              alt=""
            />
          </div>
        </div>
        <div className="row gx-5 mt-3">
          <div className={`col-xs-12 col-sm-12 col-lg-6 ${styles.Teamwork}`}>
            <h4>Team Work</h4>
            <p>
              We believe in teamwork. We are driven by the sole aim of easing
              currency transactions for foreign organizations, individuals,
              freelancers, and other institutions.
            </p>
          </div>
          <div
            className={`col-xs-12 col-sm-12 col-lg-6 ${styles.Transparency}`}
          >
            <h4>Transparency</h4>
            <p>
              We provide a simple, secure, yet traceable way to perform
              transactions.
            </p>
          </div>
        </div>
        <div className={`row gx-5 mt-3 ${styles.Accountability}`}>
          <div className={`col-xs-12 col-sm-12 col-lg-5 ${styles.Left}`}>
            <h4>Accountability</h4>
            <p>
              In any trading scenario, we accept responsibility for our actions
              and outcomes.
            </p>
          </div>
          <div className={`col-xs-12 col-sm-12 col-lg-7 ${styles.Right}`}>
            <Image
              loader={() =>
                imageLoader(
                  "https://res.cloudinary.com/dbg2z1svm/image/upload/v1694627979/ibx-website-v2/about-us/accountability_img_jxlb9z.webp"
                )
              }
              src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1694627979/ibx-website-v2/about-us/accountability_img_jxlb9z.webp"
              width={761}
              height={543}
              className={styles.RightImage}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <div className={styles.OurTeam}>
        <h3 className={styles.Title}>Meet Our Team</h3>
        <p className={styles.LeftText}>
          Our vision is to rank the top decentralized exchanges platform that
          enables anyone anywhere to control their own money.
        </p>
        <div className={styles.CarouselContainer}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {/* <div className={styles.SwiperButtonContainer}>
              <SwiperButtonNext>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1693404384/ibx-website-v2/icons/left_arrow_icon_dpdlxk.svg"
                  width={47}
                  height={47}
                  alt=""
                />
              </SwiperButtonNext>
              <SwiperButtonPrevious>
                <Image
                  src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1693404384/ibx-website-v2/icons/right_arrow_icon_adrnmh.svg"
                  width={47}
                  height={47}
                  alt=""
                />
              </SwiperButtonPrevious>
            </div> */}

      {/* {_slides.map((_slide) => (
              <SwiperSlide key={_slide?.id} className={styles.Slide}>
                {({ isActive }) => (
                  <div
                    className={`${styles.SlideItem} ${
                      isActive && styles.ActiveSwiper
                    }`}
                  >
                    <div className={styles.HeaderContainer}>
                      <Image
                        loader={() => imageLoader(_slide.imageSrc)}
                        width={85}
                        height={85}
                        src={_slide.imageSrc}
                        alt=""
                      />
                      <div className={styles.Header}>
                        <h6>{_slide.title}</h6>
                        <small>CEO youtube</small>
                      </div>
                    </div>
                    <div className={styles.Content}>{_slide.content}</div>
                  </div>
                )}
              </SwiperSlide>
            ))} */}
      {/* </Swiper>
        </div>
      </div> */}
    </main>
  );
};

export default About;
