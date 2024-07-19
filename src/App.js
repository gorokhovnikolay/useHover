import { useHover } from './hooks/useHover'
import './App.css'

function App() {
    const { hovered, ref } = useHover()
    return (
        <div className='App'>
            <header className='App-header'>
                <div ref={ref}>
                    {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
                </div>
            </header>
        </div>
    )
}

export default App
