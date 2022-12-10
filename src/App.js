import './App.css';
import Container from './components/Container';

import Menu from './components/Menu';

function App() {
  return (
    <div className="App w-full h-screen bg-primaryBg overflow-hidden flex">
      <Menu />
      <Container />
    </div>
  );
}

export default App;
