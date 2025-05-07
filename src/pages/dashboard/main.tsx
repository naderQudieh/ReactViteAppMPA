import { createRoot } from 'react-dom/client'
import DashboardApp from './DashboardApp'
import Header from '../../components/Header'

const Dashboard = () => (
    <>
        <Header />
        <DashboardApp />
    </>
)

createRoot(document.getElementById('dashboard-root')!).render(<Dashboard />)