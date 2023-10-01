import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// SASS
import './index.scss'

// CONTEXT
import { MinicartContextProvider } from './context/MinicartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <MinicartContextProvider>
        <App />
    </MinicartContextProvider>
)
