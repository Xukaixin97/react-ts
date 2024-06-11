import NumberBg from '@/assets/dashboard/number_bg.svg'

function NumberBox({ number }: { number: number }) {
  return (
    <div
      className="inline-block relative p-2 text-[#00FFEA] text-3xl mr-1 "
      style={{
        fontFamily: 'D-DIN',
        background: `url(${NumberBg}) center  no-repeat`,
      }}
    >
      <div className="z-50">{number}</div>
    </div>
  )
}

function TotalSummary() {
  return (
    <div className="flex-1 flex  m-auto pt-6 justify-evenly items-center   w-full ">
      <div className="text-center">
        <div className="text-xl mb-2 text-white">总设备数量</div>
        <div>
          <NumberBox number={6} />
          <NumberBox number={6} />
          <NumberBox number={6} />
          <NumberBox number={6} />
          <NumberBox number={6} />
        </div>
      </div>
      <div className="text-center">
        <div className="text-xl mb-2 text-white">总设备数量</div>
        <div>
          <NumberBox number={6} />
          <NumberBox number={6} />
          <NumberBox number={6} />
          <NumberBox number={6} />
          <NumberBox number={6} />
        </div>
      </div>
      <div className="text-center">
        <div className="text-xl mb-2 text-white">总设备数量</div>
        <div>
          <NumberBox number={6} />
          <NumberBox number={6} />
          <NumberBox number={6} />
          <NumberBox number={6} />
          <NumberBox number={6} />
        </div>
      </div>
    </div>
  )
}

export default TotalSummary
