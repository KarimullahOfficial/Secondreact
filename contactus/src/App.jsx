import { useState } from "react";

import "./App.css";
import Navigation from "./component/Navigation/Navigation";
import Contact from "./component/ContactHeader/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        {" "}
        <Navigation></Navigation>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
