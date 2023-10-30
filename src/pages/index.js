import Header from "@/components/Layout/Header";
import TestPoppup from "@/components/Layout/TestPoppup";
import FooterSection from "@/components/home/FooterSection";
import Section1 from "@/components/home/Section1";
import HomeSection from "@/components/uikit/HomeSection";
import { avantageBoutique } from "@/data/en/aventageBoutique";
import { footerData } from "@/data/en/footerData";
import { headerData, languages, subHeader } from "@/data/en/headerData";
import { homeData } from "@/data/en/home";
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
      navigationButtons.forEach((button) => (button.style.zIndex = "10"));
    }
  };

  const Section1Props = {
    tag: "LIMITED EDITION",
    title: "THE BEEHIVE - ADVENT CALENDAR",
    description: "DISCOVER THE 25 WONDERFUL GIFTS CRAFTED JUST FOR YOU",
    buttonText: "DISCOVER",
  };

  const footerProps = {
    avantageBoutique:avantageBoutique,
    blackFooterHeader:"Advantages of Our Online Store",
    footerlinks:footerData,
    copyright:`© Copyright ${new Date().getFullYear()}, All Rights Reserved by Amyrelle`,
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
      />
      <TestPoppup />
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
