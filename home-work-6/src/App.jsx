
import { Suspense } from 'react'
import './App.css'
import Bottles from './compex/Bottles'



const bottleSpane  = fetch('https://raw.githubusercontent.com/ProgrammingHero1/awesome-water-bottles/refs/heads/main/public/bottles.json')
.then(res => res.json());
function App() {
  

  return (
    <>
      
 
       <Suspense fallback ={ <h1> Lodding websaid............</h1>}>
            <Bottles
             bottleSpane = {bottleSpane} 
            >
            
            </Bottles>
       </Suspense>
    
        </>
  )
}

export default App