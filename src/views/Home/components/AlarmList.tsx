import { Dialog, DialogPanel } from '@headlessui/react'
import { Table, type TableProps } from 'antd'
import styles from './AlarmList.module.less'
import BoxWrapper from './BoxWrapper'
import icon_close from '@/assets/dashboard/close.png'

function AlarmType({ code }: { code: number }) {
  let borderColor, bgColor

  switch (code) {
    case 1:
      borderColor = '#E95E08'
      bgColor = 'rgba(161,94,0,0.34)'
      break
    case 2:
      borderColor = '#FF2C2C'
      bgColor = 'rgba(181,44,44,0.26)'
      break
    case 3:
      borderColor = '#08CEE2'
      bgColor = 'rgba(12,116,109,0.26)'
      break
    default:
      break
  }

  return (
    <div
      className="rounded border-solid border-1 px-4  cursor-pointer inline-block text-center"
      style={{
        background: bgColor,
        borderColor,
      }}
    >
      转把故障
    </div>
  )
}

interface DataType {
  time: string
  tel: string
  city: string
  type: string
}

const data: DataType[] = [

  {
    time: '2014-05-07  13:56:451',
    tel: '187****2352',
    city: '江苏省无锡市',
    type: '转把故障',
  },
  {
    time: '2014-05-07  13:56:452',
    tel: '187****2352',
    city: '江苏省无锡市',
    type: '转把故障',
  },
  {
    time: '2014-05-07  13:56:453',
    tel: '187****2352',
    city: '江苏省无锡市',
    type: '转把故障',
  },
]
export default function DeviceStatus() {
  const [isOpen, setIsOpen] = useState(false)

  const columns: TableProps<DataType>['columns'] = [
    {
      title: '时间',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: '手机',
      dataIndex: 'tel',
      key: 'tel',
    },
    {
      title: '城市',
      dataIndex: 'city',
      key: 'city',
    },
    {
      title: '故障类型',
      dataIndex: 'type',
      key: 'type',
      render: () => {
        return (
          <AlarmType code={Math.floor(Math.random() * 3) + 1} />
        )
      },
    },
    {
      title: '操作',
      key: 'action',
      render: () => {
        return (
          <div className="bg-[rgba(10,210,255,0.20)] rounded border-solid hover:scale-95 inline-block cursor-pointer border-1 border-[#0AD2FF] px-4 text-center " onClick={() => setIsOpen(true)}>
            详情
          </div>
        )
      },
    },
  ]
  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-50   focus:outline-none" onClose={() => setIsOpen(false)}>
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 p-16  fixed top-0 right-0 w-full h-full bg-black/70"
            >
            </DialogPanel>
            <DialogPanel
              transition
              // className="w-[80%] rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
              className={`${styles.carContent} duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 p-16 z-50 `}
            >
              <img src={icon_close} alt="icon_close" className="w-4 absolute top-[calc(72/858*100%)] right-[calc(72/1498*100%)] cursor-pointer  " onClick={() => setIsOpen(false)} />
            </DialogPanel>

          </div>
        </div>
      </Dialog>
      <BoxWrapper title="告警信息列表" className="w-full pb-6">
        <div className="absolute top-0 right-2  h-12 flex items-center text-xl text-[#FF7510] font-['YouSheBiaoTiHei']">
          日新增故障：
          {68}
          &nbsp;&nbsp;&nbsp;&nbsp;
          故障率：
          {2}
          %
        </div>
        <Table rowKey="time" columns={columns} dataSource={data} className={`mt-6 ${styles.wrapper}`} pagination={false} />
      </BoxWrapper>
    </>
  )
}
