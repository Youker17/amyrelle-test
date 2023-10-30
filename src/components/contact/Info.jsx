
function Info({header,paragraph}) {
    return (
        <div className="w-full text-center lg:text-left lg:w-2/6 flex flex-col gap-4 lg:pl-24">
            <h1 className=" text-2xl text-[#5e4134]  font-bold font-poppins ">{header}</h1>
            <p>1408 Blocks Valley, Sydney, <br />
                NSW 2060, Australia <br />
                (+61) 555-1408 <br />
                info@blocksvalley.com</p>
            <p className="w-[300px] mx-auto mb-12 lg:mb-0 lg:w-full">{paragraph}</p>
        </div>
    )
}

export default Info