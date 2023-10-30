import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Form from "@/components/contact/Form";
import Info from "@/components/contact/Info";
import PageHeader from "@/components/uikit/PageHeader";
import { footerData } from "@/data/de/footerData";
import { headerData, languages, subHeader } from "@/data/de/headerData";

function contact() {
  return (
    <>
     <Header
        languages={languages}
        headerData={headerData}
        subHeader={subHeader}
        urlPrefix="de"
      />
      <div className="pt-16">
        <PageHeader
          subHeader="NEEM CONTACT OP"
          Header="Neem Contact Met Ons Op"
          description="We staan 7 dagen per week voor je klaar en reageren binnen 24 uur. Bovendien kun je de meeste antwoorden op je vragen vinden op de FAQ-pagina."
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus"
          width="600"
          height="450"
          allowfullscreen=""
          className="w-5/6 mx-auto mt-4 mb-10 h-3/6"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="flex container mx-auto justify-center items-center flex-col  lg:flex-row ">
          <Info
            header="Algemene Vragen"
            paragraph={
              "Als u een verslaggever bent die op zoek is naar informatie over mediadiensten, neem dan contact met ons op via: press@blocksvalley.com"
            }
          />
          <Form
            firstNamePlaceholder="Voornaam"
            lastNamePlaceholder="Achternaam"
            emailPlaceholder="E-mailadres"
            phonePlaceholder="Telefoon"
            messagePlaceholder="Bericht"
            buttonText="Verstuur Bericht"
          />
        </div>
      </div>
      <Footer
        blackFooterHeader="Voordelen van Onze Online Winkel"
        footerlinks={footerData}
        copyright={`© Auteursrecht ${new Date().getFullYear()}, Alle rechten voorbehouden door Amyrelle en dit`}
        urlPrefix="de"
      />
    </>
  );
}

export default contact;
