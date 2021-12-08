import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import SelectedYearPage from './pages/SelectedYearPage';
import { Header } from 'semantic-ui-react';

function App() {
  return (
    <div className="App">
        <Header as='h2' image='/images/f1_logo.svg' data-testid="navHeader" className="navHeader" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="year/:year" element={<SelectedYearPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
