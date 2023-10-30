import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ProductCard from "@/components/product/ProductCard";
import { categorie } from "@/data/en/categorie";
import { footerData } from "@/data/en/footerData";
import { headerData, languages, subHeader } from "@/data/en/headerData";
import { products } from "@/data/en/products";
import LayoutContextProvider from "@/context/LayoutContext";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Categorie({ category }) {
  const [categorieData, setCategorieData] = useState({
    name: "",
    description: "",
  });

  console.log(categorieData);
  const FetchData = async () => {
    var slug = "categorie1";

    // const categories = await fetch(`https://royalblue-okapi-697173.hostingersite.com/wp-json/wc/v3/products/categories?consumer_key=ck_b166031c91a90807e60f99b36beea8c239b565fe&consumer_secret=cs_793de54b2f6a19c7f5f2e7e0166a980f78de8974`);
    // const categoriebyId = await fetch('https://royalblue-okapi-697173.hostingersite.com/wp-json/wc/v1/products/categories/25?consumer_key=ck_b166031c91a90807e60f99b36beea8c239b565fe&consumer_secret=cs_793de54b2f6a19c7f5f2e7e0166a980f78de8974')
    // const products = await fetch(`https://royalblue-okapi-697173.hostingersite.com/wp-json/wc/v3/products?consumer_key=ck_b166031c91a90807e60f99b36beea8c239b565fe&consumer_secret=cs_793de54b2f6a19c7f5f2e7e0166a980f78de8974`);
    // const productbyId = await fetch("https://royalblue-okapi-697173.hostingersite.com/wp-json/wc/v1/products/143?consumer_key=ck_b166031c91a90807e60f99b36beea8c239b565fe&consumer_secret=cs_793de54b2f6a19c7f5f2e7e0166a980f78de8974")
    // const data = await categories.json();
    // console.log(data);
  };

  useEffect(() => {
    FetchData();
    GetRightData();
  }, []);

  const GetRightData = () => {
    const lang = localStorage.getItem("lang");
    const arrayOfNames = category.name?.split("|");
    const arrayOfDescription = category.description?.split("|");

    switch (lang) {
        case null:
        case "":
          setCategorieData({
            name: arrayOfNames?.[0],
            description: arrayOfDescription?.[0],
          });
          break;
        case "fr":
          setCategorieData({
            name: arrayOfNames?.[1],
            description: arrayOfDescription?.[1],
          });
          break;
        case "sp":
          setCategorieData({
            name: arrayOfNames?.[2],
            description: arrayOfDescription?.[2],
          });
          break;
        case "it":
          setCategorieData({
            name: arrayOfNames?.[3],
            description: arrayOfDescription?.[3],
          });
          break;
        case "de":
          setCategorieData({
            name: arrayOfNames?.[4],
            description: arrayOfDescription?.[4],
          });
          break;
        default:
            setCategorieData({
                name: arrayOfNames?.[0],
                description: arrayOfDescription?.[0],
              });
      }  
  };

  return (
    <>
   
      <LayoutContextProvider>
        <div className="mt-20  mx-auto text-black flex flex-col justify-center items-center gap-6">
          <Image
            alt=""
            width={1000}
            height={1000}
            src="https://www.guerlain.com/on/demandware.static/-/Sites-GSA_INT_Storefront_catalog_2/default/dw87ebee6f/HeroBanner_NewTemplate/Fragrance/A&M/SFFC_WEBSITE_CONTENT_PAGE_NewAssets_1680x710_A3_ARMA23_350_Coll_EDP.jpg"
            className=" h-[60vh] object-cover lg:object-contain"
          />
          <h2 className="font-light text-gray-600 font-poppins">
            Accessory Set Of Art
          </h2>
          <h1 className="lg:text-6xl text-4xl text-[#5e4134]  font-bold font-poppins">
            {categorieData.name}
          </h1>
          <p className="text-center px-4 max-w-2xl">
            {categorieData.description}
          </p>
          <div className="border border-black/40 w-5/6 mx-auto"></div>
          <div className="lg:grid-cols-3 md:grid-cols-2 grid-cols-1  grid gap-10  justify-between mx-auto">
            {products.map((product, i) => {
              return <ProductCard key={i} product={product} />;
            })}
          </div>
        </div>
      </LayoutContextProvider>
    </>
  );
}

export async function getStaticPaths() {
  const paths = categorie.map((category) => ({
    params: { slug: "accessory-set" }, // Assuming there's a slug property for each category
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  // Fetch category by slug
  const category = categorie[0];

  return {
    props: {
      category,
    },
  };
}
