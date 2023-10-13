"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SwiperButtonNext from "./Components/SliderButtons/Next";
import SwiperButtonPrevious from "./Components/SliderButtons/Prev";

import { imageLoader } from "@/common/Utils/imageLoaders";

import { Pagination, Navigation, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { _slides } from "./util";
import { teamData } from "./teamData";
import styles from "./about.module.scss";

const About = () => {
  const router = useRouter();
  return (
    <main>
      <div className={`row ${styles.AboutUs}`}>
        <div
          className={`col-sm-12 col-xs-12 col-lg-6  ${styles.LeftContainer}`}
        >
          <h2 className={styles.HeaderText}>
            We are a team of creators and{" "}
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
        <div className={`col-sm-12 col-xs-12 col-lg-6 ${styles.LeftContainer}`}>
          <Image
            loader={() =>
              imageLoader(
                "https://res.cloudinary.com/dbg2z1svm/image/upload/v1695105193/ibx-website-v2/about-us/mission_img_cppp1i_1_nu9dbc.webp"
              )
            }
            src="https://res.cloudinary.com/dbg2z1svm/image/upload/v1695105193/ibx-website-v2/about-us/mission_img_cppp1i_1_nu9dbc.webp"
            width={505}
            height={543}
            priority={true}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8UQ8AAnUBeRHU5C8AAAAASUVORK5CYII="
            className={styles.LeftImage}
            alt=""
          />
        </div>
        <div
          className={`col-sm-12 col-xs-12 col-lg-6  ${styles.RightContainer}`}
        >
          <h3>Our Mission</h3>
          <p className={styles.Text}>
            At Ibx, our mission is to revolutionize the way individuals transact
            with fiat currencies. We strive to provide a secure and
            user-friendly platform that simplifies P2P trading, empowering our
            users to take control of their financial future. Through innovation,
            transparency, and exceptional customer service, we aim to foster
            trust and accessibility in the world of traditional currencies.
          </p>
        </div>
      </div>
      <div className={`row gx-5 ${styles.Vision}`}>
        <div className={`col-xs-12 col-sm-7 ${styles.LeftColumn}`}>
          <h3 className={styles.Title}>Our Vision</h3>
          <p className={styles.LeftText}>
            Our vision is to become the leading global platform for peer-to-peer
            fiat currency trading, known for our commitment to security,
            reliability, and user experience. We envision a world where
            individuals can easily and safely engage in P2P transactions,
            unlocking the full potential of traditional financial systems. By
            fostering a vibrant community and embracing cutting-edge
            technologies, we seek to reshape the future of finance.
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
        <p className={styles.Text}>
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
      <div id="ourteam" className={styles.OurTeam}>
        <h3 className={styles.Title}>Meet Our Team</h3>
        <div className={styles.ActionBar}>
          <p className={styles.LeftText}>
            <span className={styles.FirstSentence}>
              {" "}
              Our team of credible professionals with proven records of running
            </span>
            <span>successful businesses across digital channels</span>
          </p>
          <div className={styles.ActionContainer}>
            <Image
              src="/want_to_join.svg"
              alt=""
              width={275.18}
              height={160.31}
              className={styles.WantToJoin}
            />
            <button
              className={styles.ActionButton}
              onClick={() => router.push("/careers")}
            >
              Open Positions
            </button>
          </div>
        </div>

        <div className={styles.CarouselContainer}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            spaceBetween={0}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            <div className={styles.SwiperButtonContainer}>
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
            </div>

            {teamData.map((_slide) => (
              <SwiperSlide key={_slide?.id} className={styles.Slide}>
                <div className={styles.SlideItem}>
                  <div className={styles.ImageContainer}>
                    <Image
                      loader={() => imageLoader(_slide.image_url)}
                      width={293.5}
                      height={313.8}
                      src={_slide.image_url}
                      alt=""
                      className={styles.TeamImage}
                    />
                  </div>
                </div>
                <div className={styles.MetaData}>
                  <p className={styles.Name}>{_slide?.name}</p>
                  <small className={styles.Role}>{_slide?.role}</small>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default About;
