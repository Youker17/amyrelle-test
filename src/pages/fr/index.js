import FooterSection from "@/components/home/FooterSection";
import Section1 from "@/components/home/Section1";
import HomeSection from "@/components/uikit/HomeSection";
import { homeData } from "@/data/fr/home";
import { avantageBoutique } from "@/data/fr/aventageBoutique";
import ReactFullpage from "@fullpage/react-fullpage";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { footerData } from "@/data/fr/footerData";
import Header from "@/components/Layout/Header";
import { headerData, languages, subHeader } from "@/data/fr/headerData";

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
    tag: "ÉDITION LIMITÉE",
    title: "LE CALENDRIER DE L'AVENT - LA RUCHE",
    description:
      "DÉCOUVREZ LES 25 MERVEILLEUX CADEAUX SPÉCIALEMENT CONÇUS POUR VOUS",
    buttonText: "DÉCOUVRIR",
  };


  const footerProps = {
    avantageBoutique:avantageBoutique,
    blackFooterHeader:"Avantages De Notre Boutique En Ligne",
    footerlinks:footerData,
    copyright:`© Droits d'auteur ${new Date().getFullYear()}, Tous droits réservés par Amyrelle et ceci`,
    urlPrefix:"fr"
  }

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
        urlPrefix="fr"
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
