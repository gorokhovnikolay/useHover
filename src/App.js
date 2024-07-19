import { useViewportSize } from './hooks/useViewportSize'
import './App.css'

function App() {
    const { height, width } = useViewportSize()
    return (
        <div className='App'>
            <header className='App-header'>
                Width: {width}, height: {height}
            </header>
        </div>
    )
}

export default App
