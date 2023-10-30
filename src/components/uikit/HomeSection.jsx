import Image from 'next/image'
import SectionContent from './SectionContent'

function HomeSection({ tag, title, description, textStyle , imgLink,buttonText, buttonLink,buttonStyle }) {
    return (
        <section class="h-[100vh] relative section">
            <div class="bg-black/50 absolute top-0  w-full  h-screen ">
                <section class="relative h-screen w-full flex items-center ">
                    <Image draggable="false" className=' w-full h-screen z-10 object-cover absolute' width={1000} height={1000} src={imgLink} alt="" />
                    <section class="  pb-32 pt-[40vh] h-screen absolute top-0 flex bg-transparent justify-center items-center  self-end text-white w-full bg-gradient-to-r from-black/80 to-transparent ">
                        <div class="px-4  w-full sm:px-6 lg:px-8  bg-transparent">
                            <div class="grid items-center  bg-transparent">
                                <SectionContent buttonLink={buttonLink} textStyle={textStyle} buttonText={buttonText} buttonStyle={buttonStyle} description={description} title={title} tag={tag} />
                            </div>
                        </div>

                    </section>
                </section>
            </div>



        </section>
    )
}

export default HomeSection