import './App.css';
import Navigation from './Nav'
import Home from './component/Home'
import GraduateStudent from './component/GradStudent'
import Researcher from './component/Researcher'
import Committee from './component/Committee'
import Research from './component/Research'
import Publications from './component/Publications'
import {Routes, Route} from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* 이처럼 self-closing을 해주면 화면에 바로 나타남. Home이 계속 떠있었던 것도 이때문. */}
      
      <Routes>
        <Route path="/committee" element={<Committee/>}/>
        <Route path="/researcher" element={<Researcher/>}/>
        <Route path="/gradstu" element={<GraduateStudent/>}/>
        <Route path="/research" element={<Research/>}/>
        <Route path="/publications" element={<Publications/>}/>
        <Route path="/" element={<Home/>} />
      </Routes>


    </div>

  );
}

export default App;
