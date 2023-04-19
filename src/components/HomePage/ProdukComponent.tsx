import { FC } from "react"
import useCheckDarkMode from "@/utils/useCheckDarkMode"
import Flickity from "react-flickity-component";
import Prod1 from "@/assets/produk1.png"
import Prod2 from "@/assets/produk2.png"
import Prod3 from "@/assets/produk3.jpeg"
import Prod4 from "@/assets/produk4.jpeg"
import Prod5 from "@/assets/produk5.jpeg"
import Prod6 from "@/assets/produk6.jpeg"
import Prod7 from "@/assets/produk7.jpeg"
import Prod8 from "@/assets/produk8.jpeg"

import Image, { StaticImageData } from "next/image";

const ProdukComponent: FC<IHeroComponent> = ({}) => {
  const [darkMode] = useCheckDarkMode()
  return (
    <div className=" flex flex-col items-start  mt-[50px] ">
      <h2 className=" text-2xl font-bold mb-[12px]">
        Produk
      </h2>
      <div className=" w-full h-[272px] relative">
        <div className="absolute w-full h-full top-0 left-0 ">
          <Flickity className="w-full h-full"
            elementType={'div'} options={{
            wrapAround: false,
            pageDots: false,
            freeScroll: true,
            contain: true}}>
            {
              productHardcode.map((product) => <IndividualProduct 
                productImage={product.productImage}
                prodName={product.prodName}
                price={product.price}
                stock={product.stock}
              />
              )
            }
          </Flickity>
        </div>
      </div>
    </div>
  )
}

const productHardcode: IIndividualProduct[] = [
  {
    productImage: Prod1,
    prodName: "NMW MIGHTY SERUM 20 ML",
    price: 70000,
    stock: 7
  },
  {
    productImage: Prod2,
    prodName: "NMW ACNE CLEANSER 60 ML",
    price: 89999,
    stock: 13
  },
  {
    productImage: Prod3,
    prodName: "NMW MIGHTY SERUM 90 ML",
    price: 70000,
    stock: 10
  },
  {
    productImage: Prod4,
    prodName: "NMW MIGHTY SERUM 20 ML",
    price: 94350,
    stock: 7
  },
  {
    productImage: Prod5,
    prodName: "NMW ACNE LOTION 60ML",
    price: 150000,
    stock: 5
  },
  {
    productImage: Prod6,
    prodName: "NMW ACNE LOTION BARU",
    price: 30000,
    stock: 15
  },
  {
    productImage: Prod7,
    prodName: "NMW 7",
    price: 12000,
    stock: 4
  }


]


const IndividualProduct: FC<IIndividualProduct> = ({productImage, prodName, price, stock}) => {
  return(
    <div className="flex flex-col items-start mr-3 ml-1">
      <img src={productImage.src} className=" rounded-md" width={200} height={200}/>
      <h2 className="font-bold">
        {prodName.substring(0, 16)}...
      </h2>
      <p>
        Rp. {price}
      </p>
      <p>
        Stok Tersedia {stock}
      </p>
    </div>
  )

}

interface IIndividualProduct{
  productImage: StaticImageData,
  prodName: string,
  price: number, 
  stock: number
}

interface IHeroComponent{

}

export default ProdukComponent