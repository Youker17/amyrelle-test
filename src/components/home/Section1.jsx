import { PauseVideo, StartVideo, VolumeDown, VolumeUp } from '@/assets/Icon'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import thumbnail from "@/assets/home/thumbnail.jpg"

function Section1({tag, title, description, urlPrefix,buttonText}) {
  const [mute, setMute] = useState(true)
  const [play, setPlay] = useState(true)
  const videoRef = useRef(null)

  useEffect(() => {
    if (play == false) {
      videoRef.current.pause();
    }
    else if (play == true) {
      videoRef.current.play();
    }


    if (mute == false) {
      videoRef.current.muted = false;
    }
    else if (mute == true) {
      videoRef.current.muted = true;
    }
  }, [play, mute])


  return (
    <section id='section1' class=" hero-video h-screen bg-transparent section">
      <section class="video-container bg-transparent">
        <video ref={videoRef} id="hero_video" class="hero_video-desktop h-screen w-[100vw]"  poster={thumbnail} src="http://maison-amyral.com/wp-content/uploads/2023/10/video.mp4" autoPlay loop playsinline muted></video>
        <section class="  pb-32 pt-[40vh] h-screen absolute top-0 flex bg-transparent justify-center items-center  self-end text-white w-full bg-gradient-to-r from-black/80 to-transparent ">
          <div class="px-4  w-full sm:px-6 lg:px-8  bg-transparent">
            <div class="grid items-center  bg-transparent">
              <div className='z-10 text-white'>
                <span className=' border-y-2 border-white text-xs py-[2px]'>{tag}</span>
                <h1 className='leading-6 text-xl pt-4 pb-1'>{title}</h1>
                <p className='font-bold leading-6 text-xs'>{description}</p>
                <Link href={urlPrefix + ""} ><button className='py-1 font-medium px-5 bg-white text-black mt-5'>{buttonText}</button></Link>
              </div>
            </div>
            <div class="mt-10 flex-col flex justify-start sm:flex-row  absolute bottom-[30px]   sm:space-x-8">
              <div class="flex gap-4">
                <StartVideo onClick={() => setPlay(false)} play={play} />
                <PauseVideo onClick={() => setPlay(true)} play={play} />
                <VolumeDown onClick={() => setMute(false)} mute={mute} />
                <VolumeUp onClick={() => setMute(true)} mute={mute} />
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Section1