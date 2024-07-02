import TitleBg from '@/assets/dashboard/title_bg.png'

export default function Title() {
  return (
    <div
      className="text-center p-10 font-['PangMenZhengDao'] text-4xl font-normal tracking-wider text-white  w-full"
      style={{
        background: `url(${TitleBg}) no-repeat center / 100% 100%`,
      }}
    >
      智能两轮车大数据运营平台
    </div>
  )
}
