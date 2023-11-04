import Start from './components/Start'
import Quiz from './components/Quiz'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {questions} from "./questions";

function App() {
  return (
     <div className="relative h-[480px] w-[400px] bg-white mx-auto mt-[80px] rounded-[7px] ">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start/>}/>
        <Route path="/quiz" element={ <Quiz questions={questions}/>}/>
      </Routes>
     </BrowserRouter>
     </div>
    )
}

export default App
