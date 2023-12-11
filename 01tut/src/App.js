import logo from './logo.svg';
import './App.css';

function App() {
  const handleNameChange = () => {
    const names = ['Kiana','Kaylani','Amy','Andrew'];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {handleNameChange()}, Lets learn to code!
        </p>
      </header>
    </div>
  );
}

export default App;
