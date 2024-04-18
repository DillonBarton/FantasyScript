"use client";

import { useRef } from "react";

import styles from "./bubbleDisplay.module.css";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

import bg from "../../../public/images/dreamWorld.jpg"

export default function BubbleDisplay() {
  /**
   * make bubble come out of top but not bottom
   * BUBBLE EFFECTS
   * when bubble is hovered z-index comes to top layer and scale 1.01.
   * when clicked covers whole bubble section and changes text.
   * maybe also runs a slide show
   */

  const bubbleDisplay = useRef<HTMLDivElement>(null);
  const bubbleAnimated = useAnimateOnScroll(bubbleDisplay, [
    styles.bubbleDisplayAnimation,
  ]);

  return (
    <div className={`${styles.bubbleDisplayContainer}`}>
      <div
        ref={bubbleDisplay}
        className={`${styles.bubbleDisplay} w-full h-full`}
      >
        <div
          className={`${styles.bubbleDisplayBackground} z-[0]`}
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        />
        <div className={`${styles.bubble} ${styles.bubbleOne}`}>
          <div className={styles.bubbleShadow} />
          <div className={`${styles.bubbleBackground} w-full h-full`} />
          <div
            className={`${styles.text} w-full h-full flex justify-center items-center`}
          >
            seo
          </div>
        </div>

        <div className={`${styles.bubble} ${styles.bubbleTwo}`}>
          <div className={styles.bubbleShadow} />
          <picture>
            <source srcSet="/images/youtube.avif" />
            <source srcSet="/images/youtube.webp" />
            <img
              className={styles.bubbleImage}
              src="/images/youtube_50.jpeg"
              alt="youtube icon image"
            />
          </picture>
        </div>

        <div className={`${styles.bubble} ${styles.bubbleThree}`}>
          <div className={styles.bubbleShadow} />
          <div className={`${styles.bubbleBackground} w-full h-full`} />
          <div
            className={`${styles.text} w-full h-full flex justify-center items-center`}
          >
            digital marketing
          </div>
        </div>

        <div className={`${styles.bubble} ${styles.bubbleFour}`}>
          <div className={styles.bubbleShadow} />
        </div>

        <div className={`${styles.bubble} ${styles.bubbleFive}`}>
          <div className={styles.bubbleShadow} />
          <picture>
            <source srcSet="/images/linkedin.avif" />
            <source srcSet="/images/linkedin.webp" />
            <img
              className={styles.bubbleImage}
              src="/images/linkedin_50.jpeg"
              alt="linkedin icon image"
            />
          </picture>
        </div>

        <div className={`${styles.bubble} ${styles.bubbleSix}`}>
          <div className={styles.bubbleShadow} />
          <picture>
            <source srcSet="/images/twitter.avif" />
            <source srcSet="/images/twitter.webp" />
            <img
              className={styles.bubbleImage}
              src="/images/twitter_50.jpeg"
              alt="twitter icon image"
            />
          </picture>
        </div>

        <div className={`${styles.bubble} ${styles.bubbleSeven}`}>
          <div className={styles.bubbleShadow} />
          <picture>
            <source srcSet="/images/instagram.avif" />
            <source srcSet="/images/instagram.webp" />
            <img
              className={styles.bubbleImage}
              src="/images/instagram_50.jpeg"
              alt="instagram icon image"
            />
          </picture>
        </div>

        <div className={`${styles.bubble} ${styles.bubbleEight}`}>
          <div className={styles.bubbleShadow} />
        </div>

        <div className={`${styles.bubble} ${styles.bubbleNine}`}>
          <div className={styles.bubbleShadow} />
          <div className={`${styles.bubbleBackground} w-full h-full`} />
          <div
            className={`${styles.text} w-full h-full flex justify-center items-center`}
          >
            data visualisation
          </div>
        </div>

        <div className={`${styles.bubble} ${styles.bubbleTen}`}>
          <div className={styles.bubbleShadow} />
          <div className={`${styles.bubbleBackground} w-full h-full`} />
          <div
            className={`${styles.text} w-full h-full flex justify-center items-center`}
          >
            web design
          </div>
        </div>

        <div className={`${styles.bubble} ${styles.bubbleEleven}`}>
          <div className={styles.bubbleShadow} />
        </div>

        <div className={`${styles.bubble} ${styles.bubbleTwelve}`}>
          <div className={styles.bubbleShadow} />
          {/* <img className={styles.bubbleImage} src="/images/dataVIZ.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
}
