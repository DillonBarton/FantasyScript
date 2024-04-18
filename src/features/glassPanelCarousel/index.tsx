import styles from "@/features/glassPanelCarousel/glassCarousel.module.css";
import Panel from "@/features/glassPanelCarousel/panel/Panel";

export default function GlassCarousel() {
  return (
    <div className={`${styles.heroSection} w-full`}>
      <Panel>
        <picture>
          <source srcSet="/images/dataViz.avif" />
          <source srcSet="/images/dataViz.webp" />
          <img src="/images/dataViz.png" alt="dataViz" />
        </picture>
      </Panel>
      <Panel initialValue={2}>
        <picture>
          <source srcSet="/images/designVariety.avif" />
          <source srcSet="/images/designVariety.webp" />
          <img src="/images/designVariety.png" alt="designVariety" />
        </picture>
      </Panel>
      <Panel initialValue={3} panelMediaClasses="w-full">
        <video muted={true} loop={true} autoPlay={true}>
          <source src="/videos/SEO.mp4" type="video/mp4" />
          <object data="/videos/SEO.mp4" type="video/mp4"></object>
          <embed src="/videos/SEO.mp4" type="video/mp4" />
        </video>
      </Panel>
      <Panel initialValue={4}>
        <picture>
          <source srcSet="/images/responsiveDesign.avif" />
          <source srcSet="/images/responsiveDesign.webp" />
          <img src="/images/responsiveDesign.jpg" alt="responsiveDesign" />
        </picture>
      </Panel>
      <Panel initialValue={5}>
        <picture>
          <source srcSet="/images/dataViz.avif" />
          <source srcSet="/images/dataViz.webp" />
          <img src="/images/dataViz.png" alt="dataViz" />
        </picture>
      </Panel>
      <Panel initialValue={0}>
        <picture>
          <source srcSet="/images/responsiveDesign.avif" />
          <source srcSet="/images/responsiveDesign.webp" />
          <img src="/images/responsiveDesign.jpg" alt="responsiveDesign" />
        </picture>
      </Panel>
    </div>
  );
}
