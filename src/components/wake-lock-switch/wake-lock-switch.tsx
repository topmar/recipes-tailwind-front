'use client'

import { useCallback, useEffect, useState } from 'react'
import { Switch } from '../ui/switch'
const WakeLockSwitch = () => {
  const [{ isWakeLocked, wakelock }, setWakeLock] = useState<{
    isWakeLocked: boolean
    wakelock: WakeLockSentinel | null
  }>({
    isWakeLocked: false,
    wakelock: null
  })
  const [disabled, setDisabled] = useState<boolean>(false)

  useEffect(() => {
    // check if wake lock is supported
    if ('wakeLock' in navigator === false) {
      setDisabled(true)
    }
  }, [])

  const handleChange = useCallback(
    async (checked: boolean) => {
      if (checked) {
        // enable wakelock
        const temp = await navigator.wakeLock.request('screen')
        setWakeLock((prev) => {
          return {
            ...prev,
            isWakeLocked: true,
            wakelock: temp
          }
        })
      } else {
        // disable wakelock
        wakelock?.release()
        setWakeLock((prev) => {
          return {
            ...prev,
            isWakeLocked: false
          }
        })
      }
    },
    [isWakeLocked, wakelock]
  )

  return (
    <div className="mt-5 flex items-center">
      <Switch
        className="data-[state=checked]:bg-orange-400 dark:data-[state=checked]:bg-orange-700 data-[state=unchecked]:bg-orange-200 mr-3 data-[state=unchecked]:disabled:bg-gray-300"
        onCheckedChange={(checked) => handleChange(checked)}
        disabled={disabled}
        id="toggle-cook-mode"
        aria-label="toggle-cook-mode"
      />

      <label htmlFor="toggle-cook-mode">
        {disabled ? (
          <p className="text-sm">Cook mode unavailable on this browser</p>
        ) : (
          <p className="font-bold">Cook mode (keep screen awake)</p>
        )}
      </label>
    </div>
  )
}

export default WakeLockSwitch
