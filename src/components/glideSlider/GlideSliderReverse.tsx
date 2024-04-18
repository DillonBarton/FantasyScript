import { useEffect, useRef } from "react";
import styles from "./glideSlider.module.css";
import { ScreenCard } from "./GlideSlider";

const data = [
  "fashion",
  "fashion",
  "property",
  "construction",
  "graphic",
  "professional",
  "Restaurant",
  "null",
  "null",
  "null",
];

export default function GlideSliderReverse({
  unitOfMeasurement,
  duration,
  width,
}) {
  const sliderTrackReverse = useRef(null);


  function setCloneNodes() {
    const firstSliderClone =
      sliderTrackReverse.current.childNodes[
        sliderTrackReverse.current.childNodes.length - 2
      ].cloneNode(true);
    const secondSliderClone =
      sliderTrackReverse.current.childNodes[
        sliderTrackReverse.current.childNodes.length - 1
      ].cloneNode(true);
    sliderTrackReverse.current.prepend(firstSliderClone, secondSliderClone);
  }

  function getFullDistance() {
    const nodeListLengthMinusClones =
      sliderTrackReverse.current.childNodes.length - 2;
    let distanceToTranslate = nodeListLengthMinusClones * width;
    if (unitOfMeasurement === "vw") {
      distanceToTranslate = convertVwToPx(distanceToTranslate);
    }
    return distanceToTranslate;
  }

  function convertVwToPx(distance) {
    return (distance * document.documentElement.clientWidth) / 100;
  }

  function setsliderPosition() {
    const distanceToTranslate = getFullDistance();
    sliderTrackReverse.current.style.transform = `translateX(-${distanceToTranslate}px)`;
  }

  function beginTransition() {
    setTimeout(() => {
      sliderTrackReverse.current.style.transition = `${duration}s linear`;
      sliderTrackReverse.current.style.transform = `translateX(0)`;
    }, 0);
  }

  function resetAnimation(e) {
    if (e.target.id) {
      const distanceToTranslate = getFullDistance();
      sliderTrackReverse.current.style.transition = "none";
      sliderTrackReverse.current.style.transform = `translateX(-${distanceToTranslate}px)`;
      beginTransition();
    }
  }

  function setSpeed() {
    const fullDistance = getFullDistance();
    let slowDuration = getDuration(fullDistance);
    slowDuration *= 3;
    sliderTrackReverse.current.style.transition = `${Math.round(slowDuration)}s linear`;
    sliderTrackReverse.current.style.transform = `translateX(-${1}px)`;
  }

  function resetSpeed() {
    const fullDistance = getFullDistance();
    const slowDuration = getDuration(fullDistance);
    sliderTrackReverse.current.style.transition = `${Math.round(slowDuration)}s linear`;
    sliderTrackReverse.current.style.transform = `translateX(${1}px)`;
  }

  function getDuration(fullDistance) {
    const speed = fullDistance / duration;
    return (
      Math.abs(sliderTrackReverse.current.getBoundingClientRect().x) / speed
    );
  }

  useEffect(() => {
    setCloneNodes();
    setsliderPosition();
    beginTransition();

    sliderTrackReverse.current.addEventListener(
      "transitionend",
      resetAnimation,
    );
    sliderTrackReverse.current.addEventListener("mouseenter", setSpeed);
    sliderTrackReverse.current.addEventListener("mouseleave", resetSpeed);
  }, []);

  return (
    <div className={`${styles.sliderContainer} boxW100`}>
      <div
        className={`${styles.backgroundBlender} ${styles.leftBlender}`}
      ></div>

      <div
        ref={sliderTrackReverse}
        id="sliderTrackReverse"
        className={`${styles.sliderTrackReverse} boxW100H100 flexRow sc`}
      >
        {data.map((elem, index) => (
          <ScreenCard key={index} number={index} text={elem}></ScreenCard>
        ))}
      </div>

      <div
        className={`${styles.backgroundBlender} ${styles.rightBlender}`}
      ></div>
    </div>
  );
}
