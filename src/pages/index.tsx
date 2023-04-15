import { Inter } from 'next/font/google'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import info from '../assets/info.svg'
import { useState } from 'react'
import Result from '../components/result'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [text, setText] = useState('');
  const [data, setData] = useState('');
  const [open, setOpen] = useState(false);

  function encrypt(text: string) {
    let encryp = text.replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
    setOpen(true);
    setData(encryp);
  }

  function decrypt(text: string) {
    let decryp = text.replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
    setOpen(true);
    setData(decryp);
  }

  return (
    <form action="#" className='flex md:flex-row flex-col' >
      <div className='absolute md:top-[40px] md:left-[80px] sm:top-[80px] sm:left-[40px] top-[24px] left-[16px]'>
        <Image
          src={logo}
          alt="Alura logo"
          width={32}
          height={48}
        />
      </div>
      <div className="pt-44 md:pl-60 min-[375px]:pl-10 pl-4 md:pr-10 min-[375px]:pr-10 pr-4 md:w-[920px] w-[660]">
        <textarea
          id="message"
          className={`${inter.className} font-normal text-2xl  w-full h-[192px] placeholder-dark-blue-300 text-dark-blue-300 bg-light-blue-200 rounded-lg border-0 border-light-blue-200 focus:ring-0 focus:border-0 resize-none`}
          placeholder="Digite seu texto"
          onChange={(event) => setText(event.target.value)}
        />
        <footer className='flex flex-col pt-60'>
          <p className={`flex gap-2 ${inter.className} font-normal text-xs text-gray-400 opacity-80 `}>
            <Image
              src={info}
              alt="Information icon"
              width={16}
              height={16}
            /> Apenas letras minúsculas e sem acento.</p>
          <div className='sm:flex min-[375px]:flex block gap-6 pt-4 gap-x-'>
            <button
              type="submit"
              className={`${inter.className} font-normal block text-sm py-6 px-6 mb-6 w-[328px] h-[67px] text-[#FFFF] bg-dark-blue-300 hover:bg-dark-blue-400  focus:ring-4 focus:outline-none rounded-3xl text-center `}
              onClick={() => encrypt(text)}
            >
              Criptografar
            </button>
            <button
              type="submit"
              className={`${inter.className} font-normal block text-sm py-6 px-6 w-[328px] h-[67px] text-dark-blue-300 bg-[##FFFF] hover:bg-light-blue-300  focus:ring-4 focus:outline-none rounded-3xl text-center border-2 border-dark-blue-300`}
              onClick={() => decrypt(text)}
            >
              Descriptografar
            </button>
          </div>
        </footer>
      </div>
      <Result isOpen={open}>
        {data}
      </Result>
      {/*<div className='flex flex-col items-center justify-center bg-[#FFFF] md:w-[400px] md:h-[700px] w-auto h-auto mt-10 md:ml-20 min-[375px]:ml-10 ml-4 md:mr-0 sm:mr-10 mr-4 md:mb-0 mb-20 rounded-[34px] shadow-md'>
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
  </div>*/}
    </form >
  )
}
