import ActiveUsers from './components/ActiveUsers'
import AlarmList from './components/AlarmList'
import CurrentTime from './components/CurrentTime'
import DeviceStatus from './components/DeviceStatus'
import BMAP from './components/Map'
import NewData from './components/NewData'
import SalesChannel from './components/SalesChannel'
import Title from './components/Title'
import TotalSummary from './components/TotalSummary'
import VehicleCity from './components/VehicleCity'
import VehicleType from './components/VehicleType'

function Home() {
  const [onlyMap] = useState(false)
  return (

    <div className="w-full h-screen relative">
      <BMAP />

      {onlyMap && (
        <>
          <header className="w-full absolute top-0 left-0">
            <Title />
            <CurrentTime />
          </header>

          <section about="left panel" className="flex flex-col gap-4 justify-between w-auto  absolute top-[6.75rem] left-6 z-50 h-[calc(100vh-8.25rem)] ">
            <DeviceStatus />
            <ActiveUsers />
            <NewData />
          </section>

          <section about="right panel" className="flex flex-col gap-4 justify-between w-auto  absolute top-[6.75rem] right-6 z-50 h-[calc(100vh-8.5rem)] ">
            <VehicleType />
            <VehicleCity />
            <SalesChannel />
          </section>

          <section about="TotalSummary" className="w-[calc(100%-47.75rem)]   absolute top-[7.75rem]  left-[50%] translate-x-[-50%] z-50 ">
            <TotalSummary />
          </section>

          <section about="AlarmList" className="w-[calc(100%-52rem)]   absolute  bottom-6  left-[50%] translate-x-[-50%] z-50 ">
            <AlarmList />
          </section>
        </>
      )}
    </div>
  )
}

export default Home
