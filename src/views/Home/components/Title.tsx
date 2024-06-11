import TitleBg from '@/assets/dashboard/title_bg.svg'

export default function Title() {
  return (
    <div className="text-center ">
      <img
        src={TitleBg}
        alt="123"
        width="100%"
      />
      <div
        className="font-['PangMenZhengDao'] text-3xl mt-9 font-normal tracking-wider text-white absolute inset-0 w-full"
      >
        智能两轮车大数据运营平台
      </div>
    </div>
  )
}
