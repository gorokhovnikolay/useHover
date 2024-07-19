import { useWindowScroll } from './hooks/useWindowScroll'
import './App.css'

const style = {
    position: 'fixed',
    top: '50%',
    right: '50%',
    transform: 'translate(50%, -50%)',
    padding: '20px',
    background: '#3f444f',
    borderRadius: '15px',
}

function App() {
    const [scroll, scrollTo] = useWindowScroll()
    return (
        <div className='App'>
            <header className='App-header'>
                <div style={style}>
                    <p>
                        Scroll position x: {scroll.x}, y: {scroll.y}
                    </p>
                    <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
                </div>
            </header>
        </div>
    )
}

export default App
