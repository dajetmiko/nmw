import { FC } from "react"
import useCheckDarkMode from "@/utils/useCheckDarkMode"
import promo1 from "@/assets/promo1.webp"
import promo2 from "@/assets/promo2.webp"


const PromoComponent: FC<IPromoComponent> = ({}) => {
  const [darkMode] = useCheckDarkMode()
  return (
    <div className=" flex flex-col items-start mt-[50px] ">
      <h2 className=" text-2xl font-bold mb-[20px] ml-[12px]">
        Promo
      </h2>
      <div className=" flex flex-row items-center w-full h-fit justify-between">
        <div className=" w-[49%] pb-[25%] relative">
          <img className="w-full h-full absolute left-0 top-0" src={promo1.src}/>
        </div>
        <div className=" w-[49%] pb-[25%] relative">
          <img className="w-full h-full absolute left-0 top-0" src={promo2.src}/>
        </div>
      </div>
    </div>
  )
}

interface IPromoComponent{

}

export default PromoComponent