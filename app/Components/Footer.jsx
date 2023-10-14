/* eslint-disable @next/next/no-img-element */
'user client'
import React from 'react'

function Footer() {
  return (
    
    <footer class=" rounded-lg m-4 mt-56">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="" class="flex items-center mb-4 sm:mb-0 mr-96">
                    <img src="img/Sena_Colombia_logo.svg.png" class="h-8 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap text-orange-600">ADSO</span>
                </a>
                <p className=''>Página diseña con fines educativos para la evidencia <br />
                    <span className='text-terciary'> GA2-240201528-AA4: crear un algoritmo para sistematizar el cálculo de
                    perímetros, áreas y volúmenes de figuras planas y sólidos regulares</span>
                </p>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">Franky Vargas</a>. <br /> Fichas: 2721549.</span>
        </div>
    </footer>


  )
}

export default Footer;