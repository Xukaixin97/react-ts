import type { FC } from 'react'
import { useRoutes } from 'react-router-dom'
import { routeConfig } from './routes'

const App: FC = () => {
  return (
    <>
      {useRoutes(routeConfig)}
    </>
  )
}

export default App
