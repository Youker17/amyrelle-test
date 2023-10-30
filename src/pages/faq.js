import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PageHeader from "@/components/uikit/PageHeader";
import { accordionData } from "@/data/en/faq";
import { headerData, languages, subHeader } from "@/data/en/headerData";
import { footerData } from "@/data/en/footerData";

function faq() {
  return (
    <>
      <Header
        languages={languages}
        headerData={headerData}
        subHeader={subHeader}
      />
      <div className="mt-40">
        <PageHeader
          subHeader="ANSWERS TO COMMON QUESTIONS AND INQUIRIES"
          Header="FAQ"
          description="We are here to help you 7 days a week and respond within 24 hours. Plus, you can find most answers to your questions right on FAQ page."
        />

        <div className="my-28   md:w-5/6 mx-auto md:flex gap-6 ">
          <div className="mx-auto w-5/6 md:w-3/6">
            {accordionData.map(({ title, content }, i) => (
              <Accordion
                key={i}
                type="single"
                className="bg-[#dddddd]  px-2"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>{title}</AccordionTrigger>
                  <AccordionContent className="text-[#8f8f8f] px-[12px] py-[24px]">
                    {content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
          <div className="mx-auto w-5/6 md:w-3/6">
            {accordionData.map(({ title, content }, i) => (
              <Accordion
                key={i}
                type="single"
                className="bg-[#dddddd]  px-2"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger>{title}</AccordionTrigger>
                  <AccordionContent className="text-[#8f8f8f] px-[12px] py-[24px]">
                    {content}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>

      <Footer
        blackFooterHeader="Advantages of Our Online Store"
        footerlinks={footerData}
        copyright={`© Copyright ${new Date().getFullYear()}, All Rights Reserved by Amyrelle`}
      />
    </>
  );
}

export default faq;
