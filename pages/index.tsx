import Head from 'next/head'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Banner from '@/components/Banner'
import { Product } from '@/type'
import Products from '@/components/Products'
import Footer from '@/components/Footer'
import TopFooter from '@/components/TopFooter'

const inter = Inter({ subsets: ['latin'] })

interface Props {
  productData: Product;
}

export default function Home({ productData }: Props) {
  // console.log('Index',productData)
  return (
    <>
      <Head>
        <title>ShopGenie || Make a wish!</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='sticky'>
        <Navbar/>
      </div>
      <main>
        <Banner/>
        <Products productData={productData}/>
        <TopFooter/>
        <Footer/>
      </main>
    </>
  )
}



////////////////////// server side rendering  data fetching start here//////////////////////////

export const getServerSideProps = async () => {
  // after deployiong www.ecommerce.vercel/api/productdata
  const productData =await (await fetch("http://localhost:8000/api/productdata")).json();

  return {
    props: {
      productData,
    },
  };
};