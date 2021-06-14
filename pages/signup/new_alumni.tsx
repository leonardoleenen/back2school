import React from 'react'
import { Input, DatePicker, Space, Select } from 'antd'

const { Option } = Select;

const NewAlumni = (): JSX.Element => {
    return <div>
    <section className="bg-indigo-900 pt-6 pb-4 rounded-b-xl shadow-xl flex justify-center">
      <img src="/stgeorge-logo.png" alt="St. George Logo" className="w-32" />
    </section>
    <section className="px-4 py-8">
      <p className="text-lg font-semibold text-center mb-6 text-gray-800">Agregar alumno</p>
      <div className="text-center mb-6">
          <img src="/avatar-placeholder.png" alt="Avatar" className="block m-auto" />
          <p className="text-sm text-gray-600 pt-2">Agregar foto</p>
      </div>
      <form>
          <div className="mb-6">
              <p className="text-sm text-gray-900 mb-2 font-semibold">Datos personales</p>
              <label className="mb-3 block">
                 <Input style={{borderRadius: 8}} className="py-2 px-3 text-gray-500 text-sm border border-gray-300 block w-full" placeholder="Nombre" />
              </label>
              <label className="mb-3 block">
                <Input style={{borderRadius: 8}} className="py-2 px-3 text-gray-500 text-sm border border-gray-300 block w-full" placeholder="Apellido" />
              </label>
              <label className="mb-3 block">
                <Input type="number" style={{borderRadius: 8}} className="py-2 px-3 text-gray-500 text-sm border border-gray-300 block w-full" placeholder="DNI" />
              </label>
              <label className="mb-3 block">
                <Space direction="vertical" className="w-full">
                    <DatePicker style={{borderRadius: 8}} placeholder="Fecha de nacimiento" className="w-full" />
                </Space>
              </label>
              <label className="mb-3 block">
                <Select defaultValue="Sexo" className="w-full">
                    <Option value="masculino">Masculino</Option>
                    <Option value="femenino">Femenino</Option>
                </Select>
              </label>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-900 mb-2 font-semibold">Cobertura médica</p>
            <label className="mb-3 block">
                <Input style={{borderRadius: 8}} className="py-2 px-3 text-gray-500 text-sm border border-gray-300 block w-full" placeholder="Obra Social" />
            </label>
            <label className="mb-3 block">
                <Input style={{borderRadius: 8}} type="number" className="py-2 px-3 text-gray-500 text-sm border border-gray-300 block w-full" placeholder="Número de afiliado" />
              </label>            
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-900 mb-2 font-semibold">Institucional</p>
            <label className="mb-3 block">
                <Select defaultValue="Sede" className="w-full">
                    <Option value="norte">Norte</Option>
                    <Option value="sur">Sur</Option>
                </Select>
              </label>
              <label className="mb-3 block">
                <Select defaultValue="Nivel" className="w-full">
                    <Option value="kinder">Kinder</Option>
                    <Option value="Primario">Primario</Option>
                    <Option value="femeninSecundarioo">Secundario</Option>
                </Select>
              </label>  
              <label className="mb-3 block">
                <Select defaultValue="Curso" className="w-full">
                    <Option value="k1s">K1 S</Option>
                </Select>
              </label>          
          </div>
      </form>
      <div className="pt-6">
        <button className="w-full rounded-lg bg-red-500 shadow-base p-2 text-white text-sm mb-3">Guardar alumno</button>
        <a href="" className="text-center block text-sm font-semibold text-gray-600">Cancelar</a>
      </div>
    </section>
  </div>
}

export default NewAlumni
