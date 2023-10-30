import img from "@/assets/404.png";
import useLang from "@/hooks/useLang";
import Image from "next/image";
import Link from "next/link";

function FourOFour() {
  const { lang } = useLang();

  return (
    <div className="h-screen flex justify-center items-center flex-col gap-4">
      <Image alt="" width={300} height={300} src={img} />
      <p className=" font-poppins leading-normal text-3xl -mt-10">
        Oops nothing found !
      </p>
      <Link href={lang + "/"}>
        <button className="font-bold translate-y-0 text-sm   p-1  bg-black text-white transition-all w-fit       ">
          <div className=" font-poppins group transition-all ease-in-out  border-2 border-gray-200 px-4         ">
            <div className=" w-full h-full text-center p-2 ">Go Home</div>
          </div>
        </button>
      </Link>
    </div>
  );
}

export default FourOFour;
