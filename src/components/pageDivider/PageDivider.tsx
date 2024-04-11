import React from "react";
import styles from "./pageDivider.module.css";

/**
 * TODO - Implement isTop functionality
 *
 * @param isTop
 * @constructor
 */

const PageDivider = ({ isTop = false }: { isTop?: boolean }) => {
  return (
    <div className={styles.shapeDividerLayer1}>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          fill="url(#sectionGradient)"
          x="0"
          y="0"
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        />
        <defs>
          <linearGradient id="sectionGradient" gradientTransform="rotate(90)">
            <stop offset="5%" stopColor="rgba(15, 15, 15, 0.05)" />
            <stop offset="95%" stopColor="rgba(15, 15, 15, 0.99)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default PageDivider;
