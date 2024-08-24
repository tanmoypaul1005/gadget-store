
"use client"
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CommonSelectBox({
    label = "Select",
    options = ["Option 1", "Option 2", "Option 3"],
    onChange = () => { },
    value = "",
    ...props
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-500 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300">
          {label}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-white" aria-hidden="true" />
        </MenuButton>
      </div>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-500 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {
                options?.map((option, index) => (
                    <MenuItem key={index}>
                    {({ focus }) => (
                      <div
                        className={classNames(
                          focus ? ' text-white' : 'text-white',
                          'block px-4 py-2 text-sm',
                        )}
                      >
                      {option}
                      </div>
                    )}
                  </MenuItem>
                ))
            }
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
