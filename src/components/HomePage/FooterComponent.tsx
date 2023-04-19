import { FC } from "react"
import useCheckDarkMode from "@/utils/useCheckDarkMode"
import nmw from "@/assets/nmw.png"
import useScreenDimensions from "@/utils/useCheckDimensions"

const FooterComponent: FC<IFooterComponent> = ({}) => {
  const [darkMode] = useCheckDarkMode()
  const {screenWidth} = useScreenDimensions()
  return (
    <div className=" bg-gray-700 w-full h-[300px] mt-[50px] flex flex-row">
      <div className=" flex flex-col w-[50%] h-full mt-[30px] ml-[30px]">
        <img className=" w-[180px] h-[60px]" src={nmw.src}/>
        <p className="text-white">
          Revive - Defy - Beauty
        </p>
      </div>
      <div className=" flex flex-col w-[50%] h-full mt-[30px] ml-[30px]">
        <h2 className="text-white font-bold text-2xl">
          Navigasi
        </h2>
        <p className="text-white cursor-pointer">
          Tentang
        </p>
        <p className="text-white cursor-pointer">
          Layanan
        </p>
        <p className="text-white cursor-pointer">
          Produk
        </p>
        <p className="text-white cursor-pointer">
          Katalog
        </p>
      </div>
    </div>
  )
}

interface IFooterComponent{

}

export default FooterComponent