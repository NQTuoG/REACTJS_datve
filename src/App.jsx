import { useEffect } from "react";
import BookTickets from "./components/BookTickets"


function App() {
  useEffect(() => {
    const audio = new Audio('/audio.MP3');
    audio.play().catch(error => {
      console.log("Lỗi khi phát nhạc:", error);
    });
  }, []);
  return (
    <div className="relative  font-avenger bg-[url('../public/bgmovie.jpg')] bg-no-repeat bg-cover" style={{ height: '120vh' }}>

      <div className="absolute inset-0 bg-black opacity-80"></div>


      <div className="relative z-10 flex flex-col h-screen justify-between">
        <BookTickets />

      </div>
    </div>
  )
}

export default App
