import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCourse from './components/AddCourse';
import ViewCourse from './components/ViewCourse';
import DeleteCourse from './components/DeleteCourse';
import SearchCourse from './components/SearchCourse';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/'  element={<AddCourse/>}/>
          <Route path='/search'  element={<SearchCourse/>}/>
          <Route path='/delete'  element={<DeleteCourse/>}/>
          <Route path='/Viewcourse'  element={<ViewCourse/>}/>
          </Route>
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
