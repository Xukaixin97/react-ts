import moment from 'moment'

// 设置语言环境
moment.locale('zh-cn', {
  weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),
})

export default function CurrentTime() {
  const [time, setTime] = useState<any>(moment().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss dddd'))

  useInterval(() => {
    setTime(moment().locale('zh-cn').format('YYYY-MM-DD HH:mm:ss dddd'))
  }, 1000)

  return <div className="text-md absolute right-8 top-12 text-white">{time}</div>
}
