import { useEffect } from "react";
import { BtnLine } from "./components/BtnLine"


function App() {
  const num1 = null;
  const num2 = null;
  const op = null;
  return (
    <div className="App flex justify-center items-center h-screen">
      <div id="main" className="bg-gray-600 w-[350px] h-[480px] rounded border border-gray-500">
        <input id="screen" type="text" className="text-end text-2xl font-medium p-6 mt-8 mx-6 rounded border border-black w-[-webkit-fill-available]"/>
        <BtnLine />
      </div>
    </div>
  )
}

export default App
