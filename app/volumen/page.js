'use client'
import React, { useState } from 'react';
import Inicio from '../Components/Inicio'

export default function Page() {
  // Definir los estados para las selecciones y valores de entrada
  const [selectedShape, setSelectedShape] = useState('cuadrado');
  const [sideLength, setSideLength] = useState(0);
  const [altura, setAltura] = useState(0);
  const [volumen, setVolumen] = useState(0);

  // Función para calcular el volumen de un cubo
  function calcularVolumenCubo(lado) {
    if (lado > 0) {
      const volumen = lado * lado * lado;
      return volumen;
    } else {
      return "El valor del lado debe ser positivo";
    }
  }   

  // Función para calcular el volumen de una esfera
  function calcularVolumenEsfera(radio) {
    if (radio > 0) {
      const volumen = (4/3) * Math.PI * radio * radio * radio;
      return volumen;
    } else {
      return "El valor del radio debe ser positivo";
    }
  }

  // Función para calcular el volumen de un cilindro
  function calcularVolumenCilindro(radio, altura) {
    if (radio > 0 && altura > 0) {
      const volumen = Math.PI * radio * radio * altura;
      return volumen;
    } else {
      return "Los valores del radio y la altura deben ser positivos";
    }
  }

  // Función para el cálculo del volumen
  const handleCalculateVolumen = () => {
      let calculatedVolumen = 0;
    
      switch (selectedShape) {
        case 'cubo':
          calculatedVolumen = calcularVolumenCubo(sideLength);
          break;
        case 'esfera':
          calculatedVolumen = calcularVolumenEsfera(sideLength);
          break;
        case 'cilindro':
          calculatedVolumen = calcularVolumenCilindro(sideLength, altura);
          break;
        default:
          break;
      }
    
      if (calculatedVolumen !== "El valor del lado debe ser positivo" && calculatedVolumen !== "El valor del radio debe ser positivo" && calculatedVolumen !== "Los valores del radio y la altura deben ser positivos") {
        setVolumen(calculatedVolumen);
      } else {
        alert('Ingresa valores válidos para el cálculo del volumen');
      }
  };
  

  return (
    <div className='mt-10'>
      <h2 className='text-center text-xl font-extrabold'>
        Calcular el <span className='text-terciary'>Volumen</span> de una figura Geométrica
      </h2>
      <div className='mt-5 mx-10 flex flex-col items-center'>
        <div className='flex'>
          <div className='flex flex-col mb-10 mx-10 items-center'>
            <label className='font-extrabold' htmlFor="shape">
              Selecciona una figura tridimensional
            </label>
            <select
              id="shape"
              value={selectedShape}
              onChange={(e) => setSelectedShape(e.target.value)}
              className='text-white text-center mt-3 font-extrabold bg-transparent w-[200px] h-8 border-2 rounded-md'
            >
              <option className='text-black font-bold' value="cubo">
                Cubo
              </option>
              <option className='text-black font-bold' value="esfera">
                Esfera
              </option>
              <option className='text-black font-bold' value="cilindro">
                Cilindro
              </option>
            </select>
          </div>
          <div className='flex flex-col mb-10 mx-10 items-center'>
            <label className='font-extrabold mb-3' htmlFor="sideLength">
              {selectedShape === 'esfera' ? 'Radio' : 'Lado'} en cm
            </label>
            <input
              type="number"
              id="sideLength"
              value={sideLength}
              onChange={(e) => setSideLength(e.target.value)}
              className='font-extrabold text-center bg-transparent w-40 h-8 border-2 rounded-md'
            />
          </div>
          {selectedShape === 'cilindro' && (
            <>
              <div className='flex flex-col mb-10 mx-10 items-center'>
                <label className='font-extrabold mb-3' htmlFor="altura">
                  Altura en cm
                </label>
                <input
                  type="number"
                  id="altura"
                  value={altura}
                  onChange={(e) => setAltura(e.target.value)}
                  className='font-extrabold text-center bg-transparent w-40 h-8 border-2 rounded-md'
                />
              </div>
            </>
          )}
        </div>
        <div className='flex flex-col mb-10 items-center'>
          <button className='mt-5 mb-5 font-extrabold bg-terciary p-3 rounded-2xl transform hover:scale-110 duration-300' onClick={handleCalculateVolumen}>
            Calcular Volumen
          </button>
          {volumen > 0 && (
            <p className='font-extrabold text-xl'>
              El volumen de la figura es: <span className='text-terciary'>{volumen}</span>
            </p>
          )}
        </div>
        <Inicio />
      </div>
    </div>
  );
}
