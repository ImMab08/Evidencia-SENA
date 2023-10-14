'use client'
import React, { useState } from 'react';
import Inicio from '../Components/Inicio'

export default function Page() {
  // Definir los estados para las selecciones y valores de entrada
  const [selectedShape, setSelectedShape] = useState('cuadrado');
  const [sideLength, setSideLength] = useState(0);
  const [longitud, setLongitud] = useState(0);
  const [ancho, setAncho] = useState(0);
  const [area, setArea] = useState(0);

  // Función para calcular el área de un rectángulo
  function calcularAreaRectangulo(base, altura) {
    if (base > 0 && altura > 0) {
      const area = base * altura;
      return area;
    } else {
      return "Los valores de la base y la altura deben ser positivos";
    }
  }   

  // Función para calcular el área de un cuadrado
  function calcularAreaCuadrado(lado) {
    if (lado > 0) {
      const area = lado * lado;
      return area;
    } else {
      return "El valor del lado debe ser positivo";
    }
  }

  // Función para calcular el área de un círculo
  function calcularAreaCirculo(radio) {
    if (radio > 0) {
      const area = Math.PI * radio * radio;
      return area;
    } else {
      return "El valor del radio debe ser positivo";
    }
  }

  // Función para calcular el área de un triángulo equilátero
  function calcularAreaTrianguloEquilatero(base, altura) {
    if (base > 0 && altura > 0) {
      const area = (base * altura) / 2;
      return area;
    } else {
      return "Los valores de la base y la altura deben ser positivos";
    }
  }

  // Función para calcular el área de un hexágono regular
  function calcularAreaHexagonoRegular(lado) {
    if (lado > 0) {
      const area = (3 * Math.sqrt(3) * lado * lado) / 2;
      return area;
    } else {
      return "El valor del lado debe ser positivo";
    }
  }

  // Función para manejar el cálculo del área
  const handleCalculateArea = () => {
    let calculatedArea = 0;

    switch (selectedShape) {
      case 'cuadrado':
        calculatedArea = calcularAreaCuadrado(sideLength);
        break;
      case 'circulo':
        calculatedArea = calcularAreaCirculo(sideLength);
        break;
      case 'rectangulo':
        calculatedArea = calcularAreaRectangulo(sideLength, ancho);
        break;
      case 'triangulo':
        calculatedArea = calcularAreaTrianguloEquilatero(sideLength, longitud);
        break;
      case 'hexagono':
        calculatedArea = calcularAreaHexagonoRegular(sideLength);
        break;
      default:
        break;
    }

    if (calculatedArea > 0) {
      setArea(calculatedArea);
    } else {
      alert('Ingresa valores válidos para el cálculo del área');
    }
  };

  return (
    <div className='mt-10'>
      <h2 className='text-center text-xl font-extrabold'>
        Calcular el <span className='text-terciary'>Área</span> de una figura Geométrica
      </h2>
      <div className='mt-5 mx-10 flex flex-col items-center'>
        <div className='flex'>
          <div className='flex flex-col mb-10 mx-10 items-center'>
            <label className='font-extrabold' htmlFor="shape">
              Selecciona una figura
            </label>
            <select
              id="shape"
              value={selectedShape}
              onChange={(e) => setSelectedShape(e.target.value)}
              className='text-white text-center mt-3 font-extrabold bg-transparent w-[200px] h-8 border-2 rounded-md'
            >
              <option className='text-black font-bold' value="cuadrado">
                Cuadrado
              </option>
              <option className='text-black font-bold' value="circulo">
                Círculo
              </option>
              <option className='text-black font-bold' value="rectangulo">
                Rectángulo
              </option>
              <option className='text-black font-bold' value="triangulo">
                Triángulo equilátero
              </option>
              <option className='text-black font-bold' value="hexagono">
                Hexágono regular
              </option>
            </select>
          </div>
          <div className='flex flex-col mb-10 mx-10 items-center'>
            <label className='font-extrabold mb-3' htmlFor="sideLength">
              {selectedShape === 'circulo' ? 'Radio' : 'Lado'} en cm
            </label>
            <input
              type="number"
              id="sideLength"
              value={sideLength}
              onChange={(e) => setSideLength(e.target.value)}
              className='font-extrabold text-center bg-transparent w-40 h-8 border-2 rounded-md'
            />
          </div>
          {selectedShape === 'rectangulo' && (
            <>
              <div className='flex flex-col mb-10 mx-10 items-center'>
                <label className='font-extrabold mb-3' htmlFor="ancho">
                  Ancho en cm
                </label>
                <input
                  type="number"
                  id="ancho"
                  value={ancho}
                  onChange={(e) => setAncho(e.target.value)}
                  className='font-extrabold text-center bg-transparent w-40 h-8 border-2 rounded-md'
                />
              </div>
            </>
          )}
          {selectedShape === 'triangulo' && (
            <>
              <div className='flex flex-col mb-10 mx-10 items-center'>
                <label className='font-extrabold mb-3' htmlFor="longitud">
                  Longitud en cm
                </label>
                <input
                  type="number"
                  id="longitud"
                  value={longitud}
                  onChange={(e) => setLongitud(e.target.value)}
                  className='font-extrabold text-center bg-transparent w-40 h-8 border-2 rounded-md'
                />
              </div>
            </>
          )}
        </div>
        <div className='flex flex-col mb-10 items-center'>
          <button className='mt-5 mb-5 font-extrabold bg-terciary p-3 rounded-2xl transform hover:scale-110 duration-300' onClick={handleCalculateArea}>
            Calcular Área
          </button>
          {area > 0 && (
            <p className='font-extrabold text-xl'>
              El área de la figura es: <span className='text-terciary'>{area}</span>
            </p>
          )}
        </div>
        <Inicio />
      </div>
    </div>
  );
}