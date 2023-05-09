import { FC, useEffect, useState } from "react";
import useCheckDarkMode from "@/utils/useCheckDarkMode";
import NavbarComponent from "./NavbarComponent";
import HeroComponent from "./HeroComponent";
import ProdukComponent from "./ProdukComponent";
import ServiceComponent from "./ServiceComponent";
import PromoComponent from "./PromoComponent";
import FooterComponent from "./FooterComponent";
import { IResponseDog, delay } from "@/pages";
import axios from "axios";

const HomeComponent: FC<IHomeComponent> = ({ data }) => {
  const [darkMode] = useCheckDarkMode();
  const [dataClient, setDataClient] = useState<null | IResponseDog>(null);
  useEffect(() => {
    const fetch = async () => {
      console.time("getDogsClient");
      await delay(2000);
      const res = await axios.get<IResponseDog>(
        "https://dog.ceo/api/breed/hound/list"
      );
      setDataClient(res.data);
      console.timeEnd("getDogsClient");
    };
    fetch();
  }, []);
  return (
    <div
      className={`flex flex-col ${darkMode ? "bg-black" : "bg-white"} ${
        darkMode ? "text-white" : "text-black"
      }`}
    >
      <div>{dataClient === null ? "LOADINGCLIENT" : ""}</div>
      <ul>
        {dataClient?.message.map((dogName) => (
          <li>{dogName + "CLIENT"}</li>
        ))}
      </ul>
      <ul>
        {data.message.map((dogName) => (
          <li>{dogName}</li>
        ))}
      </ul>
      {/* <NavbarComponent />
      <HeroComponent />
      <div className="ml-[12px] w-[calc(100% - 24px)] ">
        <ProdukComponent />
        <ServiceComponent />
      </div>
      <PromoComponent />
      <FooterComponent /> */}
    </div>
  );
};

interface IHomeComponent {
  data: IResponseDog;
}

export default HomeComponent;
