import { useToggle } from './hooks/useToggle'
import './App.css'
//['blue', 'orange', 'cyan', 'teal']
function App() {
    const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal'])
    return (
        <div className='App'>
            <header className='App-header'>
                <button onClick={() => toggle()}>{String(value)}</button>
            </header>
        </div>
    )
}

export default App
