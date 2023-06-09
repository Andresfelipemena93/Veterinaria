// eslint-disable-next-line no-unused-vars
import React from "react";

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className=" font-black text-3xl text-center">
        Seguimiento de pacientes
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold text-lg">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-5">
        <div className="mb-5">
          <label
            htmlFor="mascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre de la mascota
          </label>
          <input
            type="text"
            id="mascota"
            placeholder="Añade el nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="propietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre del propietario
          </label>
          <input
            type="text"
            id="propietario"
            placeholder="Añade el nombre del propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block text-gray-700 uppercase font-bold"
          >
            Ingresa el E-mail
          </label>
          <input
            type="email"
            id="email"
            placeholder="Añade el email"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="alta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha de alta
          </label>
          <input
            type="date"
            id="alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          />
        </div>

        <div >
          <label
            htmlFor="sintomas"
            className="block text-gray-700 uppercase font-bold "
          >
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="block text-gray-700 w-full p-2 mt-2 rounded-md mb-5"
            placeholder="Describe los síntomas"
          />
          <input 
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer
            transition-color"
            value={"Agregar paciente"}
          />
         
        </div>
      </form>
    </div>
  );
};

export default Formulario;
