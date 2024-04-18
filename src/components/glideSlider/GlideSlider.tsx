import {RefObject, useEffect, useRef} from "react";
import styles from "./glideSlider.module.css";
import cardStyles from "./glideSliderCards.module.css";

export default function GlideSlider({
  unitOfMeasurement,
  duration,
  width
}: {
  unitOfMeasurement: string,
  duration: number,
  width: number
}) {
  const sliderTrack = useRef<HTMLDivElement>(null);
  const dataTwo = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
  ];

  function setCloneNodes(track: NonNullable<RefObject<HTMLDivElement>["current"]>) {
    const arrayLength = Math.ceil(document.documentElement.clientWidth / width);
    for (let i = 0; i < arrayLength; i++)
      track.append(track.childNodes[i].cloneNode(true));
  }

  function getFullDistance() {
    const nodeListLengthNoClones =
      sliderTrack.current!.childNodes.length -
      Math.ceil(document.documentElement.clientWidth / width);
    const distanceToTranslate = nodeListLengthNoClones * width;
    return unitOfMeasurement === "vw" ? convertVwToPx(distanceToTranslate) : distanceToTranslate;
  }

  function getRemainingDistance(fullDistance) {
    const distanceToTranslate =
      fullDistance - Math.abs(sliderTrack.current!.getBoundingClientRect().x);
    return distanceToTranslate;
  }

  function beginTransition() {
    const distanceToTranslate = getFullDistance();
    setTimeout(() => {
      sliderTrack.current!.style.transition = `${duration}s linear`;
      sliderTrack.current!.style.transform = `translateX(-${distanceToTranslate}px)`;
    }, 0);
  }

  function restartTransition(e) {
    if (e.target === e.currentTarget) {
      sliderTrack.current!.style.transition = "none";
      sliderTrack.current!.style.transform = "translateX(0)";
      beginTransition();
    }
  }

  function setSpeed() {
    const fullDistance = getFullDistance();
    let slowDuration = getDuration(fullDistance);
    slowDuration *= 3;
    sliderTrack.current!.style.transition = `${Math.round(slowDuration)}s linear`;
    sliderTrack.current!.style.transform = `translateX(-${fullDistance - 1}px)`;
  }

  function resetSpeed() {
    const fullDistance = getFullDistance();
    const slowDuration = getDuration(fullDistance);
    sliderTrack.current!.style.transition = `${Math.round(slowDuration)}s linear`;
    sliderTrack.current!.style.transform = `translateX(-${fullDistance + 1}px)`;
  }

  function convertVwToPx(distance) {
    return (distance * document.documentElement.clientWidth) / 100;
  }

  function getDuration(fullDistance) {
    const distanceToTranslate = getRemainingDistance(fullDistance);
    const speed = fullDistance / duration;
    return distanceToTranslate / speed;
  }

  useEffect(() => {
    const track = sliderTrack.current;
    if(!track) return;
    setCloneNodes(track);
    beginTransition();

    track.addEventListener("transitionend", restartTransition);
    track.addEventListener("mouseenter", setSpeed);
    track.addEventListener("mouseleave", resetSpeed);
  }, []);

  return (
    <div className={`${styles.sliderContainer} boxW100`}>
      <div className={`${styles.backgroundBlender} ${styles.leftBlender}`}/>

      <div
        ref={sliderTrack}
        id="sliderTrack"
        className={`${styles.sliderTrack} boxW100H100 flexRow sc`}
      >
        {dataTwo.map((elem, index) => (
          <Card key={index} number={index} text={elem}></Card>
        ))}
      </div>

      <div className={`${styles.backgroundBlender} ${styles.rightBlender}`}/>
    </div>
  );
}

export function ScreenCard({
   number,
   text
}: {
  number: number,
  text: string
}) {
  return (
    <div
      className={`${cardStyles.screenSliderItemContainer} boxH100 flexRow cc`}
    >
      <div
        className={`${cardStyles.screenSliderItemShadow} boxH100 flexRow cc`}
      >
        <a
          href=""
          className={`${cardStyles.screenSliderItem} ${cardStyles[`screenSlider${number}`]} boxW100H100 flexRow cc`}
        >
          <h2>{text}</h2>
        </a>
      </div>
    </div>
  );
}

export function Card({
 number,
 text
}: {
  number: number,
  text: string
}) {
  {
    return (
        <div className={`${cardStyles.cardSliderItemContainer} boxH100 flexRow sc`}>
          <div
              className={`${cardStyles.cardSlidetItemShadow} boxW100H100 flexRow cc`}
          >
            <a
                href="#"
                className={`${cardStyles.cardSliderItem} ${cardStyles[`cardSlider${number}`]} boxW100H100 flexRow cc`}
            >
              <h2>{text}</h2>
            </a>
          </div>
        </div>
    );
  }
}
