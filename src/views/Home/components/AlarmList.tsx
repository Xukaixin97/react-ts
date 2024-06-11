import { Table, type TableProps } from 'antd'
import BoxWrapper from './BoxWrapper'
import styles from './AlarmList.module.less'

function AlarmType({ code }: { code: number }) {
  // const [color, setColor] = useState('')

  // useMount(() => {
  //   switch (code) {
  //     case 1:

  //       setColor('#E95E08')
  //       break
  //     case 2:

  //       setColor('#FF2C2C')

  //       break
  //     case 3:

  //       setColor('#08CEE2')
  //       break
  //     default:
  //       break
  //   }
  // })

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
        <div className="bg-[rgba(10,210,255,0.20)] rounded border-solid hover:scale-95 inline-block cursor-pointer border-1 border-[#0AD2FF] px-4 text-center ">
          详情
        </div>
      )
    },
  },
]

const data: DataType[] = [
  {
    time: '2014-05-07  13:56:45',
    tel: '187****2352',
    city: '江苏省无锡市',
    type: '转把故障',
  },
  {
    time: '2014-05-07  13:56:45',
    tel: '187****2352',
    city: '江苏省无锡市',
    type: '转把故障',
  },
  {
    time: '2014-05-07  13:56:45',
    tel: '187****2352',
    city: '江苏省无锡市',
    type: '转把故障',
  },
]
export default function DeviceStatus() {
  return (
    <BoxWrapper title="告警信息列表" className="w-full pb-6">
      <div className="absolute top-0 right-2  h-12 flex items-center text-xl text-[#FF7510] font-['YouSheBiaoTiHei']">
        日新增故障：
        {68}
        &nbsp;&nbsp;&nbsp;&nbsp;
        故障率：
        {2}
        %
      </div>
      <Table columns={columns} dataSource={data} className={`mt-6 ${styles.wrapper}`} pagination={false} />
    </BoxWrapper>
  )
}
