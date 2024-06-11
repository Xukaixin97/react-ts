import type { ReactNode } from 'react'
import box_bg from '@/assets/dashboard/box_bg.png'
import box_title_bg from '@/assets/dashboard/box_title_bg.svg'

export default function BoxWrapper({ title, children, className }: { title: string, className?: string, children: ReactNode }) {
  return (
    <div
      className={`w-[370px] h-auto  relative ${className}`}
      style={{
        background: `url(${box_bg}) no-repeat center / 100% 100%`,
      }}
    >
      <img src={box_title_bg} alt="box_bg" className="w-auto absolute left-0 object-fit " />
      <div
        className="text-xl  ml-8 h-8  flex items-center"
        style={{
          'background': 'linear-gradient(to bottom, #DDECF6, #6EC9FF)',
          // eslint-disable-next-line ts/ban-ts-comment
          // @ts-expect-error
          '-webkit-background-clip': 'text',
          'color': 'transparent',
          'fontFamily': 'YouSheBiaoTiHei',
        }}
      >
        {title}
      </div>
      {children}
    </div>
  )
}
