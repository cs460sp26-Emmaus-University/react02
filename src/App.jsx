import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Hello World! 👋</h1>
      <p>
        This is a simple Vite + React starter for your assignment.<br />
        Deploy it to Render.com when you're done!
      </p>

      <div style={{ marginTop: '40px' }}>
        <p style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
          You clicked <strong>{count}</strong> times
        </p>
        <button onClick={() => setCount(count + 1)}>
          Click me!
        </button>
      </div>

      <p style={{ marginTop: '60px', fontSize: '1rem', color: '#888' }}>
        Edit <code>src/App.jsx</code> and see your changes live.<br />
        Then push to GitHub → it will auto-deploy on Render.com
      </p>
    </div>
  )
}

export default App
