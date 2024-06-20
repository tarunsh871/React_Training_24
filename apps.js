import logo from './img1.svg';
import './App.css';

function App() {
  const currentDate = new Date().toLocaleDateString();
  return (
    <div>
      <h1>Name: Tarun Prakash Shahi</h1>
      <h2>Date: {currentDate}</h2>
      <h3>University Name: Amity University Kolkata</h3>
    </div>
  );
}

export default App;
