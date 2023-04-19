import { ComponentProps, FC } from "react"
import useCheckDarkMode from "@/utils/useCheckDarkMode"
import useScreenDimensions from "@/utils/useCheckDimensions"
import Link from "next/link"
import ImgNMW from "@/assets/nmw.png"

const NavbarComponent: FC<INavbarComponent> = ({}) => {
  const [darkMode, setDarkMode] = useCheckDarkMode()
  const {screenWidth} = useScreenDimensions()
  return (
    <nav className={`flex flex-row items-center shadow-[0_15px_10px_-15px_rgba(0,0,0,0.3)] h-[64px] justify-between`}>
      {screenWidth > 768 ?
        <DesktopLink />
        :
        <button className={`w-[40px] h-[40px] cursor-pointer border-none`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className ="block h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
        </button>
      }
      {screenWidth <= 768 &&
        <LinkNavbar href="/" className="ml-[15px]">
          <img className="w-[96px] h-[32px]" src={ImgNMW.src}/>
        </LinkNavbar>
      }
      <div className="flex flex-row items-center mr-[20px]">
        <button className={`bg-gray-200 text-black rounded-sm p-[10px] text-[15px] cursor-pointer`} onClick={() => {
          setDarkMode(!darkMode)}}
          >
          Mode gelap
        </button>
        <button className={`text-white bg-orange-500 rounded-sm p-[10px] text-[15px] cursor-pointer`}>
          Masuk
        </button>
      </div>
    </nav>
  )
}

const DesktopLink = () => {
  return (
    <div className="flex flex-row items-center h-full ml-[20px]">
      <LinkNavbar href="/">
        <img className="w-[96px] h-[32px]" src={ImgNMW.src}/>
      </LinkNavbar>
      <LinkNavbar href="/product">
        Produk
      </LinkNavbar>
      <LinkNavbar href="/product">
        Pelayanan
      </LinkNavbar>
      <LinkNavbar href="/product">
        Tentang
      </LinkNavbar>
      <LinkNavbar href="/cabang">
        Cabang
      </LinkNavbar>
      <LinkNavbar href="/article">
        Artikel
      </LinkNavbar>
    </div>
  )
}

const LinkNavbar: FC<ILinkNavbar> = ({children}) => {
  const [darkMode] = useCheckDarkMode()
  return (
    <Link href="/article" className={`flex mr-[15px] ${!darkMode ? "text-gray-600" : "text-gray-200"}` +  
    `  h-full items-center border-b-4 ${!darkMode ? "border-b-white" : "border-b-black"} hover:border-b-orange-400 hover:text-orange-400`}>
      {children}
    </Link>
  )
}

type TLink = ComponentProps<typeof Link>
interface ILinkNavbar extends TLink{}

interface INavbarComponent{

}

export default NavbarComponent