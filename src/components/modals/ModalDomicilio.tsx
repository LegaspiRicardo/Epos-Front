// components/ModalDomicilio.tsx
import React, { useState } from "react";

interface ModalDomicilioProps {
  isOpen: boolean;
  onClose: () => void;
  onContinue: (domicilio: Domicilio) => void;
}

export interface Domicilio {
  calle: string;
  numeroExterior: string;
  numeroInterior?: string;
  colonia: string;
  ciudad: string;
  estado: string;
  codigoPostal: string;
  referencias: string;
}

const ModalDomicilio: React.FC<ModalDomicilioProps> = ({
  isOpen,
  onClose,
  onContinue,
}) => {
  const [domicilio, setDomicilio] = useState<Domicilio>({
    calle: "",
    numeroExterior: "",
    numeroInterior: "",
    colonia: "",
    ciudad: "",
    estado: "",
    codigoPostal: "",
    referencias: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onContinue(domicilio);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDomicilio((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Agregar Domicilio</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Calle *
            </label>
            <input
              type="text"
              name="calle"
              value={domicilio.calle}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-3 bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número Exterior *
              </label>
              <input
                type="text"
                name="numeroExterior"
                value={domicilio.numeroExterior}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-3 bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número Interior
              </label>
              <input
                type="text"
                name="numeroInterior"
                value={domicilio.numeroInterior}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-3 bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Colonia *
            </label>
            <input
              type="text"
              name="colonia"
              value={domicilio.colonia}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-3 bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ciudad *
              </label>
              <input
                type="text"
                name="ciudad"
                value={domicilio.ciudad}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-3 bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Estado *
              </label>
              <input
                type="text"
                name="estado"
                value={domicilio.estado}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-3 bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Código Postal *
            </label>
            <input
              type="text"
              name="codigoPostal"
              value={domicilio.codigoPostal}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-3 bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Referencias
            </label>
            <textarea
              name="referencias"
              value={domicilio.referencias}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-3 bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex space-x-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-500 text-white py-2 rounded hover:bg-gray-600"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 bg-cyan-950 text-white py-2 rounded hover:bg-cyan-800"
            >
              Continuar Cotización
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalDomicilio;
