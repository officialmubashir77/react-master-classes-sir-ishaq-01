import './App.css'
import List from './components/list/List'

function App() {
  
  let helloVar = "Hello World ." ;

  return (
    <>
      <div>
        <h1>{helloVar}</h1>

        <p>For read in depth read <strong>information.txt</strong> and check all components in code</p>

        <List/>
      </div>
    </>
  )
}

export default App
