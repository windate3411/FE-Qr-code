import { useState } from "react";
import QrCodeCard from "./components/QrCodeCard";

function App() {
  return (
    <div className="h-full flex justify-center items-center px-6">
      <QrCodeCard />
    </div>
  );
}

export default App;
