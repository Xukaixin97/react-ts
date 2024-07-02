import BoxWrapper from './BoxWrapper'
import status_bg from '@/assets/dashboard/status_bg.svg'
import status_bg2 from '@/assets/dashboard/status_bg2.svg'
import status_bg3 from '@/assets/dashboard/status_bg3.svg'
import status_bg4 from '@/assets/dashboard/status_bg4.svg'

export default function DeviceStatus() {
  return (
    <BoxWrapper title="设备状态">

      <div className="p-9 relative  flex justify-between items-center h-full ">
        <div
          className="flex flex-col items-center justify-center h-32 w-32"
          style={{
            background: `url(${status_bg}) center  no-repeat`,
          }}
        >
          <div className="text-[#DBE4E5] text-sm font-['SourceHanSansCN-Regular']">设备总数</div>
          <div className="text-[#00E5FF] text-xl font-['D-DIN-Bold'] font-bold">682019</div>
        </div>
        <div className="h-28 flex flex-col justify-between">
          <div className="relative flex items-center">
            <img src={status_bg4} alt="" className="h-8 object-fit absolute top-0 left-0 " />
            <div className="text-sm mr-6 ml-6 text-white z-10 font-['YouSheBiaoTiHei']">在线</div>
            <div className="text-lg text-[#00E5FF] z-10 font-['D-DIN']">264328</div>
          </div>
          <div className="relative flex items-center">
            <img src={status_bg3} alt="" className="h-8 object-fit absolute top-0 left-0 " />
            <div className="text-sm mr-6 ml-6 text-white z-10 font-['YouSheBiaoTiHei']">离线</div>
            <div className="text-lg text-[#D2D2D2] z-10 font-['D-DIN']">264328</div>
          </div>
          <div className="relative flex items-center">
            <img src={status_bg2} alt="" className="h-8 object-fit absolute top-0 left-0 " />
            <div className="text-sm mr-6 ml-6 text-white z-10 font-['YouSheBiaoTiHei']">故障</div>
            <div className="text-lg text-[#FF5600] z-10 font-['D-DIN']">264328</div>
          </div>
        </div>
      </div>

    </BoxWrapper>
  )
}
