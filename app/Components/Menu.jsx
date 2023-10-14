import Link from "next/link";
import React from 'react'

export default function Menu() {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-white font-bold text-3xl mt-10'>¿Qué deseas calcular hoy?</h2>       
      <div className='mt-16'>
        <ul className='flex text-xl font-bold transition-transform  duration-500'>
          <li className='mx-5 p-5 rounded-xl py-2 cursor-pointer transform hover:scale-125 duration-300 bg-terciary hover:bg-white hover:text-terciary'>
            <Link href={"perimetro"}>Perímetro</Link>
            
          </li>
          <li className='mx-5 p-5 rounded-xl py-2 cursor-pointer transform hover:scale-125 duration-300 bg-terciary hover:bg-white hover:text-terciary'>
            <Link href={"area"}>Área</Link>
          </li>
          <li className='mx-5 p-5 rounded-xl py-2 cursor-pointer transform hover:scale-125 duration-300 bg-terciary hover:bg-white hover:text-terciary'>
            <Link href={"volumen"}>Volúmen</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
