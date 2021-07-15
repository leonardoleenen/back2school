import React, { useEffect, useState } from 'react'
import { Input, DatePicker, Space, Select, Button, Form } from 'antd'
import { UISignUpStore } from '../../stores/signup.store'
import { useRouter } from 'next/router'

const { Option } = Select

// TODO: Complete load static houses

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
  const [form] = Form.useForm()
  const user: User = UISignUpStore.useState(s => s.user)
  const alumnis = UISignUpStore.useState(s => s.alumnis)
  const router = useRouter()
  const [houseSelected, setHouseSelected] = useState(null)
  const [level, setLevel] = useState(null)
  const [, forceUpdate] = useState({})

  useEffect(() => {
    forceUpdate({})
  }, [])

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

  const save = data => {
    UISignUpStore.update(s => {
      const copyList = Object.assign([], alumnis)

      copyList.push({
        ...data,
        birthDay: data.birthDay.toDate()
      })
      s.alumnis = copyList
    })

    router.push('/signup/alumnis')
  }

  const checkIfAlreadyExist = () => {
    // TODO: Verify if alumni already exist and avoid register
  }

  console.log(form.isFieldsTouched(true))

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
        <Form form={form} onFinish={save}>
          <div className="mb-6">
            <p className="text-sm text-gray-900 mb-2 font-semibold">
              Datos personales
            </p>
            <Form.Item
              name="firstName"
              rules={[
                { required: true, message: 'Please input your first name' }
              ]}
            >
              <Input
                style={{ borderRadius: 8 }}
                className="py-2 px-3 text-gray-500 text-sm border border-gray-300 block w-full"
                placeholder="Nombre"
              />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                { required: true, message: 'Please input your first name' }
              ]}
            >
              <Input
                style={{ borderRadius: 8 }}
                className="py-2 px-3 text-gray-500 text-sm border border-gray-300 block w-full"
                placeholder="Apellido"
              />
            </Form.Item>

            <Form.Item
              name="id"
              rules={[{ required: true, message: 'Por favor, ingrese su DNI' }]}
            >
              <Input
                type="number"
                style={{ borderRadius: 8 }}
                className="py-2 px-3 text-gray-500 text-sm border border-gray-300 block w-full"
                placeholder="DNI"
              />
            </Form.Item>
            <Form.Item
              name="birthDay"
              rules={[
                { required: true, message: 'Por favor, la fecha de nacimiento' }
              ]}
            >
              <DatePicker
                style={{ borderRadius: 8 }}
                placeholder="Fecha de nacimiento"
                className="w-full"
              />
            </Form.Item>

            <Form.Item
              name="genre"
              rules={[
                { required: true, message: 'Por favor, indique el genero' }
              ]}
            >
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
            </Form.Item>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-900 mb-2 font-semibold">
              Cobertura médica
            </p>
            <Form.Item
              name="healthInsurance"
              rules={[
                {
                  required: true,
                  message: 'Por favor, su obra social o prepaga '
                }
              ]}
            >
              <Input
                style={{ borderRadius: 8 }}
                className="py-2 px-3 text-gray-500 text-sm border border-gray-300 block w-full"
                placeholder="Obra Social"
              />
            </Form.Item>

            <Form.Item
              name="securityNumber"
              rules={[
                { required: true, message: 'Por favor, su número de afiliado ' }
              ]}
            >
              <Input
                style={{ borderRadius: 8 }}
                type="number"
                className="py-2 px-3 text-gray-500 text-sm border border-gray-300 block w-full"
                placeholder="Número de afiliado"
              />
            </Form.Item>
          </div>
          <div className="mb-6 mt-8">
            <p className="text-sm text-gray-900 mb-2 font-semibold">
              Institucional
            </p>
            <Form.Item name="college">
              <Select defaultValue="Sede" className="w-full">
                <Option value="QUILMES">Quilmes</Option>
                <Option value="NORTE">Norte</Option>
              </Select>
            </Form.Item>
            <Form.Item name="house">
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
            </Form.Item>
            <Form.Item name="level">
              <Select
                defaultValue="Curso"
                onChange={el => setLevel(el)}
                className="w-full"
              >
                {houseSelected &&
                  levels
                    .filter(l => l.parent === houseSelected.parent)[0]
                    .value.map(l => (
                      <Option key={l} value={l}>
                        {l}
                      </Option>
                    ))}
              </Select>
            </Form.Item>
          </div>

          <div className="pt-6">
            <Button
              type="primary"
              htmlType="submit"
              disabled={
                !form.isFieldsTouched(true) ||
                !!form.getFieldsError().filter(({ errors }) => errors.length)
                  .length
              }
              className="w-full rounded-lg bg-red-500 shadow-base  text-white text-sm mb-3"
            >
              Guardar alumno
            </Button>
            <button
              onClick={() => router.push('/signup/alumnis')}
              className="text-center w-full block text-sm font-semibold text-gray-600"
            >
              Cancelar
            </button>
          </div>
        </Form>
      </section>
    </div>
  )
}

export default NewAlumni
