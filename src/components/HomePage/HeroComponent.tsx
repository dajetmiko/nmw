import { FC } from "react"
import useCheckDarkMode from "@/utils/useCheckDarkMode"
import Flickity from "react-flickity-component";
import GbrBanner from "@/assets/Banner_Puasa.jpeg"
import GbrBanner2 from "@/assets/Diskon.webp"
import Image from "next/image";



const HeroComponent: FC<IHeroComponent> = ({}) => {
  const [darkMode] = useCheckDarkMode()
  return (
    <div className=" w-full pb-[50%] relative ">
      <div className="absolute w-full h-full top-0 left-0 ">
        <Flickity className="w-full h-full"
          elementType={'div'} options={{
          autoPlay: true,
          wrapAround: true,
          pageDots: false,
          freeScroll: false,
          contain: true}}>
          <img alt="banner1" className="w-full h-full" src={GbrBanner.src}/>
          <img alt="banner2" className="w-full h-full" src={GbrBanner2.src} />
        </Flickity>
      </div>
    </div>
  )
}

interface IHeroComponent{

}

export default HeroComponent