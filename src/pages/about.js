import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import About from "@/components/about/About";
import Testimonials from "@/components/about/Testimonials";
import PageHeader from "@/components/uikit/PageHeader";
import { footerData } from "@/data/en/footerData";
import { headerData, languages, subHeader } from "@/data/en/headerData";

function AboutPage() {
  return (
    <>
      <Header
        languages={languages}
        headerData={headerData}
        subHeader={subHeader}
      />
      <div className="mt-40">
        <PageHeader
          subHeader="DISCOVER OUR STORY AND MISSION"
          Header="About Us"
          description="We are here to help you 7 days a week and respond within 24 hours. Plus, you can find most answers to your questions right on FAQ page."
        />
        <About />
        <Testimonials />
      </div>
      <Footer
        blackFooterHeader="Advantages of Our Online Store"
        footerlinks={footerData}
        copyright={`© Copyright ${new Date().getFullYear()}, All Rights Reserved by Amyrelle`}
      />
    </>
  );
}

export default AboutPage;
