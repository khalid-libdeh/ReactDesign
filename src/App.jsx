import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import DetailsMain from './detailsComponents/detailsMain';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path ='/ReactDesign' element = {<Home/>}/>
          <Route path = '/ReactDesign/details' element = {<DetailsMain/>}/>

          </Routes>
 
      </BrowserRouter>
    </div>
  );
}

export default App;
