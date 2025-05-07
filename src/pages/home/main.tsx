import { createRoot } from 'react-dom/client'
import HomeApp from './HomeApp'
import Header from '../../components/Header'
import ReactDOM from 'react-dom/client';

const App = () => (
    <>
        <Header />
        <HomeApp />
    </>
)
 
const rootElement = document.getElementById('root')!
const root = createRoot(rootElement)
root.render(<App />)