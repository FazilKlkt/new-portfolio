import { useState } from "react";

function App() {
  const [text1, setText1] = useState("Fazil");
  const [text2, setText2] = useState("Husen");

  return (
    <>
      <div className="flex justify-around  m-4 rounded-md outline outline-1 min-h-[7vh]">
        <div className="self-center text-xl">{text1}</div>
        <div className="m-3 h-10 w-10 rounded-full outline outline-1"></div>
        <div className="self-center text-xl">{text2}</div>
      </div>
      <div className="flex justify-around  mx-40 rounded-md outline outline-1 min-h-[75vh]">
        {/* <div className="self-center text-xl">{text1}</div>
        <div className="m-3 h-10 w-10 rounded-full outline outline-1"></div>
        <div className="self-center text-xl">{text2}</div> */}
      </div>
      <div className="flex justify-around  m-4 rounded-md outline outline-1 min-h-[7vh]">
        {/* <div className="self-center text-xl">{text1}</div> */}
        {/* <div className="m-3 h-10 w-10 rounded-full outline outline-1"></div> */}
        {/* <div className="self-center text-xl">{text2}</div> */}
      </div>
    </>
  );
}

export default App;
