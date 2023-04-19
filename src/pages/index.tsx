import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavbarComponent from '@/components/HomePage/NavbarComponent'
import { Provider } from 'react-redux';
import store from '@/store';
import HomeComponent from '@/components/HomePage/HomeComponent';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Provider store={store}>
        <HomeComponent />  
      </Provider>
    </div>
  )
}
