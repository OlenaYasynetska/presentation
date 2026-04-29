import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/shared/components/Layout/Layout'
import { HomePage } from '@/features/home'

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ path: '/', element: <HomePage /> }],
  },
])
