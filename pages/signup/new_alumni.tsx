import React, { useState } from 'react'
import { Input, DatePicker, Space, Select } from 'antd'
import { UISignUpStore } from '../../stores/signup.store'
import { useRouter } from 'next/router'
const { Option } = Select

const houses = [
  {
    college: 'QUILMES',
    parent: 'PREP',
    value: 'Stevenson'
  },
  {
    college: 'QUILMES',
    parent: 'PREP',
    value: 'Roberts'
  },
  {
    college: 'QUILMES',
    parent: 'PREP',
    value: 'Haxell'
  },
  {
    college: 'QUILMES',
    parent: 'PREP',
    value: 'Jackson'
  },
  {
    college: 'QUILMES',
    parent: 'COLLEGE',
    value: 'Cuts'
  },
  {
    college: 'QUILMES',
    parent: 'COLLEGE',
    value: 'Lockwood'
  },
  {
    college: 'QUILMES',
    parent: 'COLLEGE',
    value: 'Farran'
  },
  {
    college: 'QUILMES',
    parent: 'COLLEGE',
    value: 'Agar'
  }
]

const levels = [
  {
    college: 'QUILMES',
    parent: 'COLLEGE',
    value: ['ES1', 'Es2', 'ES3', 'ES4', 'ES5', 'ES6']
  },
  {
    college: 'QUILMES',
    parent: 'PREP',
    value: ['EP1', 'EP2', 'EP3', 'EP4', 'EP5', 'EP6']
  }
]

const NewAlumni = (): JSX.Element => {
  const user: User = UISignUpStore.useState(s => s.user)
  const alumnis = UISignUpStore.useState(s => s.alumnis)
  const router = useRouter()
  const [houseSelected, setHouseSelected] = useState(null)

  const [alumni, setAlumni] = useState<Alumni>({
    firstName: '',
    lastName: '',
    id: '',
    course: {
      college: '',
      level: '',
      house: ''
    },
    photo: '',
    securityHeath: '',
    numberSecurityHealth: '',
    genre: 'M'
  })

  const save = () => {
    UISignUpStore.update(s => {
      const copyList = Object.assign([], alumnis)
      copyList.push(alumni)
      s.alumnis = copyList
    })
    router.push('/signup/alumnis')
  }

  console.log(houseSelected)
  return (
    <div>
      <section className="bg-indigo-900 pt-6 pb-4 rounded-b-xl shadow-xl flex justify-center">
        <img src="/stgeorge-logo.png" alt="St. George Logo" className="w-32" />
      </section>
      <section className="px-4 py-8">
        <p className="text-lg font-semibold text-center mb-6 text-gray-800">
          Agregar alumno
        </p>
        <div className="text-center mb-6">
          <img
            src="/avatar-placeholder.png"
            alt="Avatar"
            className="block m-auto"
          />
          <p className="text-sm text-gray-600 pt-2">Agregar foto</p>
        </div>
        <form>
          <div className="mb-6">
            <p className="text-sm text-gray-900 mb-2 font-semibold">
              Datos personales
            </p>
            <label className="mb-3 block">
              <Input
                style={{ borderRadius: 8 }}
                value={alumni.firstName}
                onChange={value => {
                  alumni.firstName = value.target.value
                  setAlumni(Object.assign({}, alumni))
                }}
                className="py-2 px-3 text-gray-500 text-sm border border-gray-300 block w-full"
                placeholder="Nombre"
              />
            </label>
            <label className="mb-3 block">
              <Input
                style={{ borderRadius: 8 }}
                value={alumni.lastName}
                onChange={value => {
                  alumni.lastName = value.target.value
                  setAlumni(Object.assign({}, alumni))
                }}
                className="py-2 px-3 text-gray-500 text-sm border border-gray-300 block w-full"
                placeholder="Apellido"
              />
            </label>
            <label className="mb-3 block">
              <Input
                type="number"
                value={alumni.id}
                onChange={value => {
                  alumni.id = value.target.value
                  setAlumni(Object.assign({}, alumni))
                }}
                style={{ borderRadius: 8 }}
                className="py-2 px-3 text-gray-500 text-sm border border-gray-300 block w-full"
                placeholder="DNI"
              />
            </label>
            <label className="mb-3 block">
              <Space direction="vertical" className="w-full">
                <DatePicker
                  style={{ borderRadius: 8 }}
                  placeholder="Fecha de nacimiento"
                  className="w-full"
                />
              </Space>
            </label>
            <label className="mb-3 block">
              <Select
                value={alumni.genre}
                onChange={value => {
                  alumni.genre = value as any
                  setAlumni(Object.assign({}, alumni))
                }}
                defaultValue="Sexo"
                className="w-full"
              >
                <Option value="M">Masculino</Option>
                <Option value="F">Femenino</Option>
              </Select>
            </label>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-900 mb-2 font-semibold">
              Cobertura médica
            </p>
            <label className="mb-3 block">
              <Input
                style={{ borderRadius: 8 }}
                className="py-2 px-3 text-gray-500 text-sm border border-gray-300 block w-full"
                placeholder="Obra Social"
              />
            </label>
            <label className="mb-3 block">
              <Input
                style={{ borderRadius: 8 }}
                type="number"
                className="py-2 px-3 text-gray-500 text-sm border border-gray-300 block w-full"
                placeholder="Número de afiliado"
              />
            </label>
          </div>
          <div className="mb-6">
            <p className="text-sm text-gray-900 mb-2 font-semibold">
              Institucional
            </p>
            <label className="mb-3 block">
              <Select defaultValue="Sede" className="w-full">
                <Option value="QUILMES">Quilmes</Option>
                <Option value="NORTE">Norte</Option>
              </Select>
            </label>
            <label className="mb-3 block">
              <Select
                defaultValue="House"
                className="w-full"
                onChange={el => {
                  setHouseSelected(houses.filter(h => h.value === el)[0])
                }}
              >
                <Option value="kinder">Kinder</Option>
                {houses
                  .filter(h => h.college === 'QUILMES')
                  .map(h => (
                    <Option key={h.value} value={h.value}>
                      {h.value}
                    </Option>
                  ))}
              </Select>
            </label>
            <label className="mb-3 block">
              <Select defaultValue="Curso" className="w-full">
                <Option value="k1s">K1 S</Option>
                {houseSelected &&
                  levels
                    .filter(l => l.parent === houseSelected.parent)[0]
                    .value.map(l => (
                      <Option key={l} value={l}>
                        {l}
                      </Option>
                    ))}
              </Select>
            </label>
          </div>
        </form>
        <div className="pt-6">
          <button
            onClick={save}
            className="w-full rounded-lg bg-red-500 shadow-base p-2 text-white text-sm mb-3"
          >
            Guardar alumno
          </button>
          <button
            onClick={() => router.push('/signup/alumnis')}
            className="text-center w-full block text-sm font-semibold text-gray-600"
          >
            Cancelar
          </button>
        </div>
      </section>
    </div>
  )
}

export default NewAlumni
