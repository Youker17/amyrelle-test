import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Form from "@/components/contact/Form";
import Info from "@/components/contact/Info";
import PageHeader from "@/components/uikit/PageHeader";
import { footerData } from "@/data/fr/footerData";
import { headerData, languages, subHeader } from "@/data/fr/headerData";

function contact() {
  return (
    <>
     <Header
        languages={languages}
        headerData={headerData}
        subHeader={subHeader}
        urlPrefix="fr"
      />
      <div className="pt-16">
        <PageHeader
          subHeader="NOUS CONTACTER"
          Header="Contactez-nous"
          description="Nous sommes là pour vous aider 7 jours sur 7 et nous répondons dans les 24 heures. De plus, vous pouvez trouver la plupart des réponses à vos questions sur la page FAQ."
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
            header="Demandes Générales"
            paragraph={
              "Si vous êtes un journaliste à la recherche d'informations sur les services médias, veuillez nous contacter à l'adresse : press@blocksvalley.com"
            }
          />
          <Form
            firstNamePlaceholder="Prénom"
            lastNamePlaceholder="Nom de Famille"
            emailPlaceholder="Adresse Email"
            phonePlaceholder="Téléphone"
            messagePlaceholder="Message"
            buttonText="Envoyer le Message"
          />
        </div>
      </div>
      <Footer
        blackFooterHeader="Avantages de Notre Boutique en Ligne"
        footerlinks={footerData}
        copyright={`© Droits d'auteur ${new Date().getFullYear()}, Tous droits réservés par Amyrelle et ceci`}
      />
    </>
  );
}

export default contact;
