'use client'
import React, { useState } from 'react';
import Inicio from '../Components/Inicio'

export default function Page() {
  // Definir los estados para las selecciones y valores de entrada
  const [selectedShape, setSelectedShape] = useState('cuadrado');
  const [sideLength, setSideLength] = useState(0);
  const [longitud, setLongitud] = useState(0);
  const [ancho, setAncho] = useState(0);
  const [perimeter, setPerimeter] = useState(0);

  // Función para calcular el perímetro de un rectángulo
  function calcularPerimetroRectangulo(base, altura) {
    if (base > 0 && altura > 0) {
      const perimetro = 2 * (parseFloat(base) + parseFloat(altura)); // Asegúrate de que los valores se manejen como números
      return perimetro;
    } else {
      return "Los valores de la base y la altura deben ser positivos";
    }
  }   

  // Función para calcular el perímetro de un cuadrado
  function calcularPerimetroCuadrado(lado) {
    if (lado > 0) {
      const perimetro = 4 * lado;
      return perimetro;
    } else {
      return "El valor del lado debe ser positivo";
    }
  }

  // Función para calcular el perímetro de un círculo
  function calcularPerimetroCirculo(radio) {
    if (radio > 0) {
      const perimetro = 2 * Math.PI * radio;
      return perimetro;
    } else {
      return "El valor del radio debe ser positivo";
    }
  }

  // Función para calcular el perímetro de un triángulo equilátero
  function calcularPerimetroTrianguloEquilatero(lado) {
    if (lado > 0) {
      const perimetro = 3 * lado;
      return perimetro;
    } else {
      return "El valor del lado debe ser positivo";
    }
  }

  // Función para calcular el perímetro de un hexágono regular
  function calcularPerimetroHexagonoRegular(lado) {
    if (lado > 0) {
      const perimetro = 6 * lado;
      return perimetro;
    } else {
      return "El valor del lado debe ser positivo";
    }
  }

  // Función para manejar el cálculo del perímetro
  const handleCalculatePerimeter = () => {
    let calculatedPerimeter = 0;

    switch (selectedShape) {
      case 'cuadrado':
        calculatedPerimeter = calcularPerimetroCuadrado(sideLength);
        break;
      case 'circulo':
        calculatedPerimeter = calcularPerimetroCirculo(sideLength);
        break;
      case 'rectangulo':
        calculatedPerimeter = calcularPerimetroRectangulo(sideLength, ancho);
        break;
      case 'triangulo':
        calculatedPerimeter = calcularPerimetroTrianguloEquilatero(sideLength);
        break;
      case 'hexagono':
        calculatedPerimeter = calcularPerimetroHexagonoRegular(sideLength);
        break;
      default:
        break;
    }

    if (calculatedPerimeter > 0) {
      setPerimeter(calculatedPerimeter);
    } else {
      alert('Ingresa valores válidos para el cálculo del perímetro');
    }
  };

  return (
    <div className='mt-10'>
      <h2 className='text-center text-xl font-extrabold'>
        Calcular el <span className='text-terciary'>Perímetro</span> de una figura Geométrica
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
        </div>
        <div className='flex flex-col mb-10 items-center'>
          <button className='mt-5 mb-5 font-extrabold bg-terciary p-3 rounded-2xl transform hover:scale-110 duration-300' onClick={handleCalculatePerimeter}>
            Calcular Perímetro
          </button>
          {perimeter > 0 && (
            <p className='font-extrabold text-xl'>
              El perímetro de la figura es: <span className='text-terciary'>{perimeter}</span>
            </p>
          )}
        </div>
        <Inicio />
      </div>
    </div>
  );
}