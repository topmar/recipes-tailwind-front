'use client'

import { Monitor, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { ChangeEvent, useEffect, useState } from 'react'

const LightSwitch = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const lightSwitches = [
    { id: 'light', icon: <Sun size={17} strokeWidth={1.5} /> },
    { id: 'dark', icon: <Moon size={17} strokeWidth={1.5} /> },
    { id: 'system', icon: <Monitor size={17} strokeWidth={1.5} /> }
  ]
  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.id)
  }
  return (
    <section className="mt-1 flex w-fit justify-center rounded-sm bg-orange-800">
      {lightSwitches.map(({ id, icon }) => (
        <div key={id}>
          <input
            type="radio"
            id={id}
            name="theme-select"
            className="peer hidden"
            onChange={handleThemeChange}
            checked={theme === id}
          />
          <label
            htmlFor={id}
            className="peer-checked:bg-orange-500 rounded-sm p-1 cursor-pointer flex items-center justify-center"
          >
            {icon}
          </label>
        </div>
      ))}
    </section>
  )
}

export default LightSwitch
