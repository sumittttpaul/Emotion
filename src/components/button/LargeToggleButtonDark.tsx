import React, { useState } from 'react'
import { Tab } from '@headlessui/react'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

const LargeToggleButtonDark = () => {
  let [categories] = useState({
    Phone: {},
    Email: {},
  })

  return (
    <div className="w-full py-2">
      <Tab.Group>
        <Tab.List className="flex space-x-2 rounded-md bg-[#121212] p-[5px]">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-md py-4 text-[13px] text-white focus:outline-none',
                  selected
                    ? 'bg-[#202020]'
                    : 'text-white/[0.60]'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}

export default LargeToggleButtonDark;
