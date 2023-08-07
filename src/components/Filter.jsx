import { useState } from 'react'
import { Tab } from '@headlessui/react'
import { useEmail } from '../context/EmailProvider'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Filter() {

    const {emailCategoria} = useEmail()

  return (
    <div className='flex justify-center divide-y-8'>
    <div className="w-full max-w-md px-2 sm:px-0 ">
      <Tab.Group
        onChange={(index) => {
            emailCategoria(index)
          }}
      >
        <Tab.List className="flex space-x-1 rounded-xl bg-black p-[2px] shadow-md shadow-gray-500">
            <Tab
              className={({ selected }) =>
                classNames(
                  'transition-colors duration-500 w-full rounded-xl  text-sm leading-5',
                  ' focus:outline-none',
                  selected
                    ? 'bg-white shadow font-bold'
                    : 'hover:bg-white/[0.30] text-white font-light '
                )
              }
            >
              Todos
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                    'transition-colors duration-500 w-full rounded-xl  text-sm leading-5',
                    ' focus:outline-none',
                    selected
                      ? 'bg-white shadow font-bold'
                      : 'hover:bg-white/[0.30] text-white font-light '
                )
              }
            >
              Leídos
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                    'transition-colors duration-500 w-full rounded-xl  text-sm leading-5',
                    ' focus:outline-none',
                    selected
                      ? 'bg-white shadow font-bold'
                      : 'hover:bg-white/[0.30] text-white font-light '
                )
              }
            >
              Enviados
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                    'transition-colors duration-500 w-full rounded-xl  text-sm leading-5',
                    ' focus:outline-none',
                    selected
                      ? 'bg-white shadow font-bold'
                      : 'hover:bg-white/[0.30] text-white font-light '
                )
              }
            >
              Recibidos
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                    'transition-colors duration-500 w-full px-2 rounded-xl  text-sm leading-5',
                    ' focus:outline-none',
                    selected
                      ? 'bg-white shadow font-bold'
                      : 'hover:bg-white/[0.30] text-white font-light '
                )
              }
            >
              Comunicados
            </Tab>
        
        </Tab.List>
      </Tab.Group>
    </div>
    </div>
  )
}
