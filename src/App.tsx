import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import { DataContextProvider } from './Context/DataContext';
import Resumo from './Pages/Resumo';
import Vendas from './Pages/Vendas';
import './Style.css';
import Venda from './Pages/Venda';

function App() {
  return (
    <HashRouter>
      <DataContextProvider>
        <div className="container">
          <div>
            <Sidenav />
          </div>
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/vendas" element={<Vendas />}></Route>
              <Route path="/vendas/:id" element={<Venda />}></Route>
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </HashRouter>
  );
}

export default App;
