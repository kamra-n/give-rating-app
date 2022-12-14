import './App.css';
import Main from './Pages/Main';
import { AppContext } from './Context/AppContext';
function App() {
  return (
    <AppContext>
    <Main />
    </AppContext>
  );
}

export default App;