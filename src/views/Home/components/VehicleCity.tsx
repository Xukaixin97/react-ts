import Chart from 'react-apexcharts'
import type { ApexOptions } from 'apexcharts'
import BoxWrapper from './BoxWrapper'

export default function VehicleCity() {
  const [series] = useState<ApexAxisChartSeries>([{
    name: 'Net Profit',

    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380].reverse(),

  }])

  const [options] = useState<ApexOptions>({
    chart: {
      type: 'bar',
      height: 700,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 5,
        barHeight: '10',
        borderRadiusApplication: 'end',
        colors: {
          backgroundBarColors: ['#1b394c'],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 5,
        },
      },
    },
    grid: {
      borderColor: '#4f5969',
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: ['北京', '上海', '广州', '深圳', '成都', '杭州', '武汉', '西安', '重庆', '南京'],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        style: {
          colors: 'white',
          fontSize: '12px',
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
          fontSize: '12px',
          fontFamily: 'D-DIN',
        },
      },
    },

    fill: {
      colors: ['#3FE8DB'],
      type: 'gradient',
      gradient: {
        type: 'horizontal',
        gradientToColors: ['#55FFE0'], // 颜色数组
        opacityFrom: 0,
        opacityTo: 1,
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
    <BoxWrapper title="新增车辆城市TOP 10">
      <Chart
        options={options}
        series={series}
        type="bar"
        width={370}
        height={250}
      />
    </BoxWrapper>
  )
}
