import img from "@/assets/thank-you.png";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { footerData } from "@/data/en/footerData";
import { headerData, languages, subHeader } from "@/data/en/headerData";
import useLang from "@/hooks/useLang";
import Image from "next/image";
import Link from "next/link";

function ThankYou() {
  const { lang } = useLang();

  return (
    <>
      <Header
        languages={languages}
        headerData={headerData}
        subHeader={subHeader}
      />
      <div className="flex mt-32 container mx-auto w-full gap-10 md:gap-0 flex-col md:flex-row">
        <div className="w-full md:w-3/6">
          <Image
            src={img}
            alt=""
            draggable="false"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
        <div className="w-full md:w-3/6 px-2 sm:px-10 flex flex-col gap-4  justify-center">
          <h1 className="text-3xl md:text-6xl text-[#5e4134]  font-bold font-poppins">
            Thank you !
          </h1>
          <p className="">
            {" "}
            Estamos realmente agradecidos por ponerse en contacto con nosotros.
            Su consulta es importante para nosotros y apreciamos la oportunidad
            de ayudarle. Nuestro equipo dedicado está trabajando diligentemente
            para brindarle el mejor apoyo posible.
          </p>
          <Link href={lang + "/"}>
            <button className="font-bold translate-y-0 text-sm   p-1  bg-black text-white transition-all w-fit       ">
              <div className=" font-poppins group transition-all ease-in-out  border-2 border-gray-200 px-4         ">
                <div className=" w-full h-full text-center p-2 ">Go Home</div>
              </div>
            </button>
          </Link>
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

export default ThankYou;
