import FooterSection from "@/components/home/FooterSection";
import Section1 from "@/components/home/Section1";
import HomeSection from "@/components/uikit/HomeSection";
import { homeData } from "@/data/es/home";
import { avantageBoutique } from "@/data/es/aventageBoutique";
import ReactFullpage from "@fullpage/react-fullpage";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { footerData } from "@/data/es/footerData";
import Header from "@/components/Layout/Header";
import { headerData, languages, subHeader } from "@/data/es/headerData";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const afterLoad = (origin, destination, direction) => {
    const section1IsVisible = destination.anchor === "section1";
    const navigationButtons = document.querySelectorAll("#fp-nav");
    const video = document.querySelector(".hero_video-desktop");

    if (section1IsVisible) {
      video.play();
      navigationButtons.forEach((button) => (button.style.zIndex = "-1000"));
    } else {
      navigationButtons.forEach((button) => (button.style.zIndex = "999999"));
    }
  };

  const Section1Props = {
    tag: "EDICIÓN LIMITADA",
    title: "EL CALENDARIO DE ADVIENTO - LA COLMENA",
    description:
      "DESCUBRE LOS 25 MARAVILLOSOS REGALOS HECHOS ESPECIALMENTE PARA TI",
    buttonText: "DESCUBRIR",
  };

  const footerProps = {
    avantageBoutique:avantageBoutique,
    blackFooterHeader:"Ventajas de Nuestra Tienda en Línea",
    footerlinks:footerData,
    copyright:`© Derechos de autor ${new Date().getFullYear()}, Todos los derechos reservados por Amyrelle y esto`,
    urlPrefix:"es"
  };

  const render = ({ state, fullpageApi }) => (
    <>
      <ReactFullpage.Wrapper>
        <Section1 {...Section1Props} />
        {homeData.map((e, i) => (
          <HomeSection key={i} {...e} />
        ))}
        <FooterSection {...footerProps} />
      </ReactFullpage.Wrapper>
    </>
  );

  return (
    <>
     <Header
        languages={languages}
        headerData={headerData}
        subHeader={subHeader}
        urlPrefix="es"
      />
      {isClient && window.innerWidth > 640 ? (
        <ReactFullpage
          licenseKey={"YOUR_KEY_HERE"}
          scrollingSpeed={1000}
          navigation
          anchors={["section1", "section2", "section3", "section4", "section5","footer"]}
          afterLoad={afterLoad}
          render={render}
        />
      ) : (
        <>
          <Section1 {...Section1Props} />
          {homeData.map((e, i) => (
            <HomeSection key={i} {...e} />
          ))}
          <FooterSection {...footerProps} />
        </>
      )}
    </>
  );
}
