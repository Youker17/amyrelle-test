import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Form from "@/components/contact/Form";
import Info from "@/components/contact/Info";
import PageHeader from "@/components/uikit/PageHeader";
import { footerData } from "@/data/es/footerData";
import { headerData, languages, subHeader } from "@/data/es/headerData";

function contact() {
  return (
    <>
    <Header
        languages={languages}
        headerData={headerData}
        subHeader={subHeader}
        urlPrefix="es"
      />
      <div className="pt-16">
        <PageHeader
          subHeader="PONTE EN CONTACTO"
          Header="Contáctanos"
          description="Estamos aquí para ayudarte los 7 días de la semana y respondemos en menos de 24 horas. Además, puedes encontrar la mayoría de las respuestas a tus preguntas en la página de preguntas frecuentes."
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
            header="Consultas Generales"
            paragraph={
              "Si eres un periodista en busca de información sobre servicios de medios, por favor contáctanos en: press@blocksvalley.com"
            }
          />
          <Form
            firstNamePlaceholder="Nombre"
            lastNamePlaceholder="Apellido"
            emailPlaceholder="Dirección de Correo Electrónico"
            phonePlaceholder="Teléfono"
            messagePlaceholder="Mensaje"
            buttonText="Enviar Mensaje"
          />
        </div>
      </div>
      <Footer
        blackFooterHeader="Ventajas de Nuestra Tienda en Línea"
        footerlinks={footerData}
        urlPrefix="es"
        copyright={`© Derechos de autor ${new Date().getFullYear()}, Todos los derechos reservados por Amyrelle y esto`}
      />
    </>
  );
}

export default contact;
