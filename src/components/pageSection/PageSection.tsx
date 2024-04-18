"use client";
import { useRef } from "react";

import styles from "./pageSection.module.css";
import useAnimateOnScroll from "@/hooks/useAnimateOnScroll";

export default function PageSection({
  children,
  isReversed = false,
  title,
  subtitle,
  paragraphs,
}: {
  children: React.ReactNode;
  isReversed?: boolean;
  title: string;
  subtitle: string;
  paragraphs: string[];
}) {

  /**
   * transfrom rotateY the section divider svg 180deg every other dection divider.
   * make sectionContainer flexColumn and svg elements position relative so elements don't overlap
   */

  const sectionRef = useRef<HTMLDivElement>(null);
  const animated = useAnimateOnScroll(sectionRef, [styles.textAnimation]);
  return (
    <div className={`${styles.wrapper} w-full h-full flex flex-grow gap-20 justify-center items-center`}>
      <div
        className={`${styles.display} ${isReversed ? styles.order2 : styles.order1} flex justify-start items-center h-full`}
      >
        {children}
      </div>
      <div
        className={`${styles.textContainer} ${isReversed ? styles.order1 : styles.order2} h-full flex flex-col justify-center items-start`}
      >
        <div
          ref={sectionRef}
          className={`${styles.text} w-full flex flex-col justify-center items-start`}
        >
          <h2 className={`${styles.textHeader} w-full`}>{title}</h2>
          <h4 className={`${styles.textHeader} w-full`}>{subtitle}</h4>
          {paragraphs.map((text, i) => (
            <p className={`${styles.textParagraph} w-full`} key={i}>
              {text}
            </p>
          ))}
          <a className={styles.classicBtn} href="#">
            {title}
          </a>
        </div>
      </div>
    </div>
  );
}
