import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { footerData as footerDataDe } from "@/data/de/footerData";
import {
  headerData as headerDataDe,
  languages as languagesDe,
  subHeader as subHeaderDe,
} from "@/data/de/headerData";
import { footerData as footerDataEn } from "@/data/en/footerData";
import {
  headerData as headerDataEn,
  languages as languagesEn,
  subHeader as subHeaderEn,
} from "@/data/en/headerData";
import { footerData as footerDataEs } from "@/data/es/footerData";
import {
  headerData as headerDataEs,
  languages as languagesEs,
  subHeader as subHeaderEs,
} from "@/data/es/headerData";
import { footerData as footerDataFr } from "@/data/fr/footerData";
import {
  headerData as headerDataFr,
  languages as languagesFr,
  subHeader as subHeaderFr,
} from "@/data/fr/headerData";
import { footerData as footerDataIt } from "@/data/it/footerData";
import {
  headerData as headerDataIt,
  languages as languagesIt,
  subHeader as subHeaderIt,
} from "@/data/it/headerData";
import useLang from "@/hooks/useLang";
import { createContext } from "react";

export const LayoutContext = createContext(null);

const LayoutContextProvider = ({ children }) => {
  const { lang } = useLang();

  switch (lang) {
    case null:
    case "":
      return (
        <LayoutContext.Provider>
          <Header
            languages={languagesEn}
            headerData={headerDataEn}
            subHeader={subHeaderEn}
          />
          {children}
          <Footer
            blackFooterHeader="Advantages of Our Online Store"
            footerlinks={footerDataEn}
            copyright={`© Copyright ${new Date().getFullYear()}, All Rights Reserved by Amyrelle`}
          />
        </LayoutContext.Provider>
      );
    case "fr":
      return (
        <LayoutContext.Provider>
          <Header
            languages={languagesFr}
            headerData={headerDataFr}
            subHeader={subHeaderFr}
          />
          {children}
          <Footer
            blackFooterHeader="Avantages de Notre Boutique en Ligne"
            footerlinks={footerDataFr}
            copyright={`© Droits d'auteur ${new Date().getFullYear()}, Tous droits réservés par Amyrelle et ceci`}
            urlPrefix="fr"
          />
        </LayoutContext.Provider>
      );
    case "de":
      return (
        <LayoutContext.Provider>
          <Header
            languages={languagesDe}
            headerData={headerDataDe}
            subHeader={subHeaderDe}
          />
          {children}
          <Footer
            blackFooterHeader="Voordelen van Onze Online Winkel"
            footerlinks={footerDataDe}
            copyright={`© Auteursrecht ${new Date().getFullYear()}, Alle rechten voorbehouden door Amyrelle en dit`}
            urlPrefix="de"
          />
        </LayoutContext.Provider>
      );
    case "es":
      return (
        <LayoutContext.Provider>
          <Header
            languages={languagesEs}
            headerData={headerDataEs}
            subHeader={subHeaderEs}
          />
          {children}
          <Footer
            blackFooterHeader="Ventajas de Nuestra Tienda en Línea"
            footerlinks={footerDataEs}
            urlPrefix="es"
            copyright={`© Derechos de autor ${new Date().getFullYear()}, Todos los derechos reservados por Amyrelle y esto`}
          />
        </LayoutContext.Provider>
      );
    case "it":
      return (
        <LayoutContext.Provider>
          <Header
            languages={languagesIt}
            headerData={headerDataIt}
            subHeader={subHeaderIt}
          />
          {children}
          <Footer
            blackFooterHeader="Vantaggi del Nostro Negozio Online"
            footerlinks={footerDataIt}
            copyright={`© Copyright  ${new Date().getFullYear()}, Tutti i Diritti Riservati da Amyrelle e questo.`}
          />
        </LayoutContext.Provider>
      );
    default:
      return <LayoutContext.Provider>{children}</LayoutContext.Provider>;
  }
};

export default LayoutContextProvider;
