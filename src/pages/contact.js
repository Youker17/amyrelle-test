import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Form from "@/components/contact/Form";
import Info from "@/components/contact/Info";
import PageHeader from "@/components/uikit/PageHeader";
import { footerData } from "@/data/en/footerData";
import { headerData, languages, subHeader } from "@/data/en/headerData";
import Head from "next/head";

function contact() {
  return (
    <>
      <Header
        languages={languages}
        headerData={headerData}
        subHeader={subHeader}
      />
    <div className="pt-16">
      <Head>
        {/* eslint-disable @next/next/no-sync-scripts  */}
        <script src="https://smtpjs.com/v3/smtp.js"></script>
      </Head>
      <PageHeader
        subHeader="GET IN TOUCH"
        Header="Contact Us"
        description="We are here to help you 7 days a week and respond within 24 hours. Plus, you can find most answers to your questions right on FAQ page."
      />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13227.678283060997!2d-6.838857457817353!3d34.02027540579872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76b9194140af1%3A0x13366c999246615c!2sHassan%20Tower!5e0!3m2!1sen!2sma!4v1698439948085!5m2!1sen!2sma"
        width="600"
        height="450"
        allowfullscreen=""
        className="w-5/6 mx-auto mt-4 mb-10 h-3/6"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="flex container mx-auto justify-center items-center flex-col  lg:flex-row ">
        <Info
          header="General Inquiries​"
          paragraph={
            "If you are a reporter looking for information on media services please contact us at:press@blocksvalley.com"
          }
        />
        <Form
          firstNamePlaceholder="First Name"
          lastNamePlaceholder="Last Name"
          emailPlaceholder="Email Address"
          phonePlaceholder="Phone"
          messagePlaceholder="Message"
          buttonText="Submit Message"
        />
      </div>
    </div>
    <Footer
              blackFooterHeader="Advantages of Our Online Store" 
              footerlinks={footerData} 
              copyright={`© Copyright ${new Date().getFullYear()}, All Rights Reserved by Amyrelle`} />
    </>
       
    
  );
}

export default contact;
