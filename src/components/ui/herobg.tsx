import React from 'react'

export function GridBackground({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="h-full w-full bg-transparent bg-base-700 bg-dot-white/[0.3] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center bg-base-800 justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_0%,#06151e)]"></div>
      <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-200 py-8">
        {children}
      </div>
    </div>
  )
}
