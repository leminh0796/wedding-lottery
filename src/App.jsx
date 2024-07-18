import './App.css';
import RandomNumber from './RandomNumber';

function App() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full mt-16">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-8xl font-['Eyesome_Script'] mb-10">M & T</h1>
        <span className="text-5xl font-bold font-['Eyesome_Script'] ml-10">26 . 07 . 2024</span>
      </div>
      <div className="flex flex-col items-center justify-center mt-16">
        <RandomNumber />
        <div className="text-4xl text-center mt-16 font-serif leading-loose">❤️ Xin cảm ơn tất cả mọi người đã đến chung vui cùng tụi mình nhé ❤️</div>
      </div>
    </div>
  );
}

export default App;
