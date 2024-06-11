import ActiveUsers from './components/ActiveUsers'
import CurrentTime from './components/CurrentTime'
import DeviceStatus from './components/DeviceStatus'
import Footer from './components/Footer'
import NewData from './components/NewData'
import SalesChannel from './components/SalesChannel'
import Title from './components/Title'
import TotalSummary from './components/TotalSummary'
import VehicleCity from './components/VehicleCity'
import VehicleType from './components/VehicleType'
import AlarmList from './components/AlarmList'

function Home() {
  return (
    <div className="w-full h-full bg-[#081f3e] relative  flex flex-col">
      <header>
        <Title />
        <CurrentTime />
      </header>
      <div className="flex-1 flex ">
        <div className="p-6 flex flex-col gap-4 justify-between w-auto h-full">
          <DeviceStatus />
          <ActiveUsers />
          <NewData />
        </div>
        {/* <div className="flex-1 flex flex-col justify-between w-auto  h-full"> */}
        <div className="flex-1 flex flex-col justify-between w-auto  h-full">
          <TotalSummary />
          <AlarmList />
        </div>
        <div className="p-6 flex flex-col gap-4 justify-between w-auto h-full ">
          <VehicleType />
          <VehicleCity />
          <SalesChannel />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
