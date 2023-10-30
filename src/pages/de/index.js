import Header from "@/components/Layout/Header";
import FooterSection from "@/components/home/FooterSection";
import Section1 from "@/components/home/Section1";
import HomeSection from "@/components/uikit/HomeSection";
import { avantageBoutique } from "@/data/de/aventageBoutique";
import { footerData } from "@/data/de/footerData";
import { headerData, languages, subHeader } from "@/data/de/headerData";
import { homeData } from "@/data/de/home";
import ReactFullpage from "@fullpage/react-fullpage";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

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
    tag: "BEPERKTE EDITIE",
    title: "DE ADVENTSKALENDER - DE BIJENKORF",
    description: "ONTDEK DE 25 PRACHTIGE CADEAUS SPECIAAL VOOR JOU GEMAAKT",
    buttonText: "ONTDEKKEN",
  };

  const footerProps = {
    avantageBoutique:avantageBoutique,
    blackFooterHeader:"Ventajas de Nuestra Tienda en Línea",
    footerlinks:footerData,
    urlPrefix:"de",
    copyright:`© Auteursrecht ${new Date().getFullYear()}, Alle rechten voorbehouden door Amyrelle en dit`
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
        urlPrefix="de"
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
          <FooterSection {...footerProps}  />
        </>
      )}
    </>
  );
}
