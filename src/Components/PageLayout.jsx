import React from 'react'
import Header from './Header'

export default function PageLayout({children}) {
  return (
    <div className='h-[100dvh] w-[100dwh] bg-slate-200'>
          <div className=''>
      <Header />
      </div>
        {children}
    </div>
  )
}
