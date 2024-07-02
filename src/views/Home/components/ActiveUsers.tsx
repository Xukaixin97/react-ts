import type { ApexOptions } from 'apexcharts'
import Chart from 'react-apexcharts'
import BoxWrapper from './BoxWrapper'

export default function DeviceStatus() {
  const [series] = useState<ApexAxisChartSeries>([{
    name: 'Net Profit',
    data: [1, 2, 3, 4, 5, 4, 3],
  }])

  const [options] = useState<ApexOptions>({
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 5,
        columnWidth: '10',
        borderRadiusApplication: 'end',
      },
    },
    grid: {
      borderColor: '#4f5969',
      strokeDashArray: 3,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Oct', 'Oct'],
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: 'white',
          fontSize: '14px',
          fontFamily: 'D-DIN',
        },
      },

      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: 'white',
          fontSize: '14px',
          fontFamily: 'D-DIN',
        },
      },
    },

    fill: {
      colors: ['#3FE8DB'],
      type: 'gradient',
      gradient: {
        type: 'vertical',
        gradientToColors: ['#55FFE0'], // 颜色数组
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    // tooltip: {
    //   y: {
    //     formatter(val: number) {
    //       return `$ ${val} thousands`
    //     },
    //   },
    // },
  })

  return (
    <BoxWrapper title="日活跃用户">
      <Chart
        options={options}
        series={series}
        type="bar"
        width="370"
      // className="flex items-center h-[90%]"
      />
    </BoxWrapper>
  )
}
