import { FC } from "react"
import useCheckDarkMode from "@/utils/useCheckDarkMode"
import { StaticImageData } from "next/image"
import aesthaetic from "@/assets/aesthetic.jpeg"
import clinical from "@/assets/clinical.jpeg"
import medical from "@/assets/medical.jpeg"
import spa from "@/assets/spa.jpeg"


const ServiceComponent: FC<IServiceComponent> = ({}) => {
  const [darkMode] = useCheckDarkMode()
  return (
    <div className="flex flex-col mt-[50px]">
      <h2 className=" text-2xl font-bold mb-[20px]">
        Layanan
      </h2>
      <div className="flex flex-row justify-between">
        {
          iServiceHardcode.map((serv) => <IndividualService image={serv.image} servName={serv.servName}/>)
        }
      </div>
    </div>
  )
}

const iServiceHardcode: IIndividualService[] = [
  {image: aesthaetic, servName: "aesthaetic"},
  {image: clinical, servName: "clinical"},
  {image: medical, servName: "medical"},
  {image: spa, servName: "spa"},
]

const IndividualService: FC<IIndividualService> = ({image}) => {
  return (
    <div className=" w-[22.5%] pb-[40%] relative mr=[1.5%] ml-[1%]">
      <img className="absolute w-full h-full rounded-md" src={image.src}/>
    </div>
  )
}

interface IIndividualService{
  image: StaticImageData,
  servName: string,
}

interface IServiceComponent{

}

export default ServiceComponent