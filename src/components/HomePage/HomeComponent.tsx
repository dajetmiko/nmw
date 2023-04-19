import { FC } from "react"
import useCheckDarkMode from "@/utils/useCheckDarkMode"
import NavbarComponent from "./NavbarComponent"
import HeroComponent from "./HeroComponent"
import ProdukComponent from "./ProdukComponent"
import ServiceComponent from "./ServiceComponent"
import PromoComponent from "./PromoComponent"
import FooterComponent from "./FooterComponent"

const HomeComponent: FC<IHomeComponent> = ({}) => {
  const [darkMode] = useCheckDarkMode()
  return (
    <div className={`flex flex-col ${darkMode ? "bg-black" : "bg-white"} ${darkMode ? "text-white" : "text-black"}`}>
      <NavbarComponent />
      <div className="ml-[12px] w-[calc(100% - 24px)] ">
        <HeroComponent />
        <ProdukComponent />
        <ServiceComponent />
      </div>
      <PromoComponent />
      <FooterComponent />
    </div>
  )
}

interface IHomeComponent{

}

export default HomeComponent