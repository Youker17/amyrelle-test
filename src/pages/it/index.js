import Header from "@/components/Layout/Header";
import FooterSection from "@/components/home/FooterSection";
import Section1 from "@/components/home/Section1";
import HomeSection from "@/components/uikit/HomeSection";
import { avantageBoutique } from "@/data/it/aventageBoutique";
import { footerData } from "@/data/it/footerData";
import { headerData, languages, subHeader } from "@/data/it/headerData";
import { homeData } from "@/data/it/home";
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
    tag: "EDIZIONE LIMITATA",
    title: "IL CALENDARIO DELL'AVVENTO - L'ALVEARE",
    description:
      "SCOPRI I 25 MERAVIGLIOSI REGALI SPECIFICAMENTE CONCEPITI PER TE",
    buttonText: "SCOPRI",
  };

  const footerProps = {
    avantageBoutique: avantageBoutique,
    blackFooterHeader: "Vantaggi del Nostro Negozio Online",
    footerlinks: footerData,
    copyright: `© Copyright  ${new Date().getFullYear()}, Tutti i Diritti Riservati da Amyrelle e questo.`,
    urlPrefix:"it"
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
        urlPrefix="it"
      />
      {isClient && window.innerWidth > 640 ? (
        <ReactFullpage
          licenseKey={"YOUR_KEY_HERE"}
          scrollingSpeed={1000}
          navigation
          anchors={[
            "section1",
            "section2",
            "section3",
            "section4",
            "section5",
            "footer",
          ]}
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
