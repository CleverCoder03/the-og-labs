// components/AnimatePresenceWrapper.jsx
'use client'

import { AnimatePresence, motion } from 'motion/react'
import { usePathname } from 'next/navigation'

export default function AnimatePresenceWrapper({ children }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        key={pathname}
        initial='initialState'
        animate='animateState'
        exit='exitState'
        variants={{
          initialState: {
            opacity: 0,
            // x: '-100vw',
          },
          animateState: {
            opacity: 1,
            x: '0',
            transition: {
              duration: 0.3,
            },
          },
          exitState: {
            opacity: 0,
            // x: '100vw',
            transition: {
              duration: 0.5,
            },
          },
        }}
        className='overflow-hidden'
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}