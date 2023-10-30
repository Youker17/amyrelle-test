
export default function Header({
  languages,
  headerData,
  subHeader,
  urlPrefix,
}) {
  // const router = useRouter();
  // const { slug } = router.query;
  // const [lang, setLang] = useState("");
  // const [click, setClick] = useState(false);

  // useEffect(() => {
  //   var storedLang = localStorage.getItem("lang");

  //   console.log(storedLang)

  //   if (click) {
  //     if (storedLang == "") {
  //       router.push("http://localhost:3000/");
  //     }

  //     localStorage.setItem("lang", storedLang);
  //     router.push("/" + storedLang);
  //   }
  //   setClick(false);
  //   languages.forEach(l => {
  //     l.selected = l.url == storedLang;
  // });
  // }, [click]);

  // const SelectLang = (url, event) => {
  //   localStorage.setItem("lang", url);
  //   setLang(url);
  //   setClick(true);
  // };
  return (
    <>
      {/* <div className="fixed w-full top-0 left-0 z-50">
        <nav className="w-full flex lg:hidden ">
          <MobileHeader />
        </nav>
        <nav className="w-full hidden  lg:flex capitalize flex-col  justify-center items-center pt-3 gap-3 border-b border-gray-200 bg-white  text-black h-fit">
          <div className="container flex flex-row  items-center justify-between">
            <div>
              <div className=" flex group flex-row items-center gap-3 font-poppins font-bold text-sm">
                {languages.find((l) => l.selected).text}
                <svg
                  class="w-3 h-3 group-hover:rotate-180 transition-all text-gray-800 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
                <div className="hidden w-36 transition-all transform opacity-0 group-hover:opacity-100 ease-in-out delay-150 group-hover:flex flex-col gap-2 py-3 absolute bg-white shadow-2xl top-10">
                  {languages.map((e, i) => (
                    <div
                      key={i}
                      onClick={() => SelectLang(e.url, "user")}
                      className={twMerge(
                        "flex cursor-pointer flex-row items-center gap-3 p-3 w-full hover:bg-gray-900 hover:text-white",
                        e.selected == true && " bg-gray-900 text-white "
                      )}
                    >
                      <div className="font-poppins font-bold text-sm">
                        {e.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Link
              href={languages.find((l) => l.selected).url + "/"}
              className="font-bold text-3xl cursor-pointer text-[#282828] font-dearjane"
            >
              <DesctopLogo />
            </Link>
            <div className="flex flex-row gap-2 font-poppins text-xs text-gray-600">
              {subHeader.map((e, i) => (
                <>
                  <Link href={e.link}>{e.text}</Link>
                  {i != 2 ? <span>|</span> : null}
                </>
              ))}
            </div>
          </div>
          <div className="container  flex flex-row justify-center gap-10   ">
          
            {headerData.map((e, i) => (
              <Link
                key={i}
                href={e.link}
                className={twMerge(
                  " cursor-pointer text-sm transition-all hover:border-b font-poppins py-3 border-black",
                  slug == e.link ? " font-bold text-[#282828] " : ""
                )}
              >
                {e.text}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <SideCart /> */}
    </>
  );
}
