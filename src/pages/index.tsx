import Image from "next/image";
import { Inter } from "next/font/google";
import NavbarComponent from "@/components/HomePage/NavbarComponent";
import { Provider } from "react-redux";
import store from "@/store";
import HomeComponent from "@/components/HomePage/HomeComponent";
import axios from "axios";
import { FC } from "react";

const inter = Inter({ subsets: ["latin"] });

const Home: FC<IPropsHome> = ({ data }) => {
  return (
    <div>
      <Provider store={store}>
        <HomeComponent data={data} />
      </Provider>
    </div>
  );
};

interface IPropsHome {
  data: IResponseDog;
}

export async function getServerSideProps() {
  await delay(3000);
  const res = await axios.get<IResponseDog>(
    `https://dog.ceo/api/breed/terrier/list`
  );
  const data = res.data;

  // Pass data to the page via props
  return { props: { data } };
}

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export interface IResponseDog {
  message: string[];
}

export default Home;
