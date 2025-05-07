"use client";

import Image from "next/image";
import { imageLoader } from "@/common/Utils/imageLoaders";
import ClientTestimonial from "@/common/components/Landing/ClientTestimonial";
// import AdvertSectionTwo from "@/common/components/Landing/AdvertSectionTwo";
// import Ticker from "@/common/components/Landing/Ticker";
// import GettingStarted from "@/common/components/Landing/GettingStarted/page";
import styles from "./page.module.scss";
import Services from "@/common/components/Landing/Services";
// import Link from "next/link";
// import { appUrl } from "@/common/data";

export default function Home() {
  return (
    <main>
      <div className={`row ${styles.Landing}`}>
        <div
          className={`col-sm-12 col-xs-12 col-lg-7  ${styles.LandingLeftContainer}`}
        >
          <h1 className={styles.HeaderText}>
            Empowering All Ages with Tech Skills for the Future!
          </h1>
          <p className={styles.TagLine}>
            Welcome to Fiensma Services, where we start from playful computer
            appreciation for kids (5-12) to essential IT skills for school
            leavers and advanced web development & data analysis for
            graduates—unlock the power of technology with expert-led training..
          </p>
        </div>
      </div>
      <div id="about" className={styles.companyStory}>
        <div className={styles.leftside}>
          <hr />
          <h3>Our Story</h3>
          <p>why we started</p>
        </div>
        <div className={styles.rightside}>
          <p>
            Teaching Computer and Information Technology at the University of
            Uyo opened my eyes to a major gap in digital literacy. Many
            undergraduates and even graduates struggled with essential computer
            skills—simple tasks like typing, using Word and Excel, and
            navigating the digital world efficiently.
          </p>
          <p>
            This realization sparked the birth of Fiensma Services—a training
            institute dedicated to bridging this gap. Our mission is to empower
            both young children with an early appreciation for computers and
            equip school leavers, university students, and graduates with
            practical IT skills like office productivity, web development, and
            data analysis.
          </p>
          <p>
            At Fiensma Services, we believe technology is for everyone, and
            we’re here to ensure that no one is left behind in the digital age.
          </p>
        </div>
      </div>
      <Services />
      <div className={`row gx-5 ${styles.Features}`}>
        <div className="col-xs-12 col-sm-12 col-md-6">
          <h3>Benefits of Our Training Program</h3>
          <p className={styles.LeftText}>
            At Fiensma Services, we are more than just a computer training
            institute—we are a bridge to digital empowerment for all ages.
            Whether you&apos;re a young child exploring computers, a student
            preparing for higher education, or a graduate looking to enhance
            your career, we provide the right training to equip you with the
            skills you need.
          </p>
        </div>
        <div className={`col-xs-12 col-sm-12 col-md-6 ${styles.RightColumn}`}>
          <div className="row mb-4">
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <p className={styles.Heading}>Bridging the Digital Gap</p>
              <p className={styles.Content}>
                Many students and graduates struggle with basic computer skills.
                We’re here to change that.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <p className={styles.Heading}>Structured Learning for All</p>
              <p className={styles.Content}>
                From kids (5-12) learning computer appreciation to students &
                graduates mastering IT essentials.
              </p>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
              <p className={styles.Heading}>Practical & Hands-on Training</p>
              <p className={styles.Content}>
                Learn typing, office productivity, web development, and more
                with real-world applications.
              </p>
            </div>
           
          </div>
          
        </div>
      </div>
      <div className={`row gx-5 ${styles.Statistics}`}>
        <div className={`col-xs-12 col-sm-12 col-lg-12 ${styles.LeftColumn}`}>
        
          <div className={`row ${styles.StatContainer}`}>
            <div
              className={`${styles.StatItem} col-xs-12 col-sm-6 col-md-6 col-lg-6`}
            >
              <h2 className={styles.Stat}>5,000+</h2>
              <p className={styles.StatTitle}>Graduates</p>
            </div>
            <div
              className={`${styles.StatItem} col-xs-12 col-sm-6 col-md-6 col-lg-6`}
            >
              <h2 className={styles.Stat}>12</h2>
              <p className={styles.StatTitle}>Expert Instructors</p>
            </div>
          </div>
          <div className={`row ${styles.StatContainer}`}>
            <div
              className={`${styles.StatItem} col-xs-12 col-sm-6 col-md-6 col-lg-6`}
            >
              <h2 className={styles.Stat}>98%</h2>
              <p className={styles.StatTitle}>Success Rate</p>
            </div>
          </div>
        </div>
       
      </div>
     
      <ClientTestimonial />
      {/* <Faq/> */}
    </main>
  );
}
