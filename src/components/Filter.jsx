import { Tab } from '@headlessui/react'
import { useCategoriesStore } from '../hooks/useCategoriesStore'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function Filter() {

  const {handleSetCategorieFilter,categorieFilter} = useCategoriesStore()

  return (
    <div className='flex justify-center divide-y-8'>
    <div className="w-full max-w-md px-2 sm:px-0 ">
      <Tab.Group
        onChange={(index) => {
            handleSetCategorieFilter(index)
          }}
        selectedIndex={categorieFilter}
      >
        <Tab.List className="flex space-x-1 rounded-xl bg-black p-[2px] shadow-md shadow-gray-500">
            <Tab
              className={({ selected }) =>
                classNames(
                  'transition-colors px-2 font-bold duration-500 w-full rounded-xl  text-sm leading-5',
                  ' focus:outline-none',
                  selected
                    ? 'bg-white shadow'
                    : 'hover:bg-white/[0.30] text-white text-xs'
                )
              }
            >
              Todos
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  'transition-colors px-2 font-bold duration-500 w-full rounded-xl  text-sm leading-5',
                  ' focus:outline-none',
                  selected
                    ? 'bg-white shadow'
                    : 'hover:bg-white/[0.30] text-white text-xs'
              )
              }
            >
              Leídos
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                    'transition-colors px-2 font-bold duration-500 w-full rounded-xl  text-sm leading-5',
                    ' focus:outline-none',
                    selected
                      ? 'bg-white shadow'
                      : 'hover:bg-white/[0.30] text-white text-xs'
                )
              }
            >
              Sin Leer
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  'transition-colors px-2 font-bold duration-500 w-full rounded-xl  text-sm leading-5',
                  ' focus:outline-none',
                  selected
                    ? 'bg-white shadow'
                    : 'hover:bg-white/[0.30] text-white text-xs'
              )
              }
            >
              Enviados
            </Tab>

            <Tab
              className={({ selected }) =>
                classNames(
                  'transition-colors px-2 font-bold duration-500 w-full rounded-xl  text-sm leading-5',
                  ' focus:outline-none',
                  selected
                    ? 'bg-white shadow'
                    : 'hover:bg-white/[0.30] text-white text-xs'
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
