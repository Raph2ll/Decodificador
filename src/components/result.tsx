import highQualityProducts from '../assets/highQualityProducts.svg'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { entry } from '../pages/types'
const inter = Inter({ subsets: ['latin'] })


export default function Result(props: entry) {
  let { isOpen, children } = props;

  if (isOpen) {
    return (
      <div className='flex flex-col justify-between content-between m-[32px] bg-[#FFFF] md:w-[400px] md:h-[700px] w-auto h-auto mt-10 md:ml-20 min-[375px]:ml-10 ml-4 md:mr-0 sm:mr-10 mr-4 md:mb-0 mb-20 rounded-[34px] shadow-md'>
        <textarea
          className={`${inter.className} pt-[32px] h-[200px] rounded-3xl content-start font-normal text-base px-[32px] pb-8 resize-none`}
          value={children}
        />
        <button
          className={`${inter.className} m-[32px] content-end font-normal block text-sm py-6 px-6  sm:w-[328px] w-[250px] h-[67px] text-dark-blue-300 bg-[##FFFF] hover:bg-light-blue-300  focus:ring-4 focus:outline-none rounded-3xl text-center border-2 border-dark-blue-300`}
          onClick={() => navigator.clipboard.writeText(children)}
        >
          Copiar
        </button>
      </div >
    )
  } else {
    return (
      <div className='flex flex-col items-center justify-center bg-[#FFFF] md:w-[400px] md:h-[700px] w-auto h-auto mt-10 md:ml-20 min-[375px]:ml-10 ml-4 md:mr-0 sm:mr-10 mr-4 md:mb-0 mb-20 rounded-[34px] shadow-md'>
        <div className='md:block hidden'>
          <Image
            src={highQualityProducts}
            alt="Banner of high quality products"
            width={336}
            height={304}
          />
        </div>
        <h1 className={`${inter.className} font-bold text-2xl text-center text-gray-500 px-8 pt-8 pb-4`}>
          Nenhuma mensagem encontrada
        </h1>
        <p className={`${inter.className} font-normal text-base text-center px-8 pb-8`}>
          Digite um texto que você deseja criptografar ou descriptografar.
        </p>
      </div>
    )
  }
}