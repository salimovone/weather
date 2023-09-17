import Home from "./components/Home";
import bg from "./assets/weather_bg/rain_sun.jpeg";



function App() {  
  return (
    <div
      className="w-screen h-screen overflow-y-hidden app"
      style={{
        backgroundImage: `url(${bg})`
      }}
    >
      <Home />
    </div>
  );
}

export default App;
