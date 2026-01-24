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
    <Routes>
      <Route path="/" element={<posts />} />
      <Route path="/posts/:id" element={<posts />} />
    </Routes>
  );
}

export default App;