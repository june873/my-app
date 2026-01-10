import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';

function App() {
  const userData = [{
    name: "나성연",
    age: 22
  },
  {
    name: "루카스",
    age: 23
  }];
  return (
    <div className="App">
      <header className="App-header">
        {
          userData.map((first, index) => <NameCard name={first.name} age={first.age}></NameCard>)
        }
        
      </header>
    </div>
  );
}

export default App;
