import { useState } from "react";

import "./App.css";
import Navigation from "./component/Navigation/Navigation";
import ContactHeader from "./component/ContactHeader/ContactHeader";
import ContactForm from "./component/Contactform/Contactform";

function App() {
  return (
    <>
      <div>
        {" "}
        <div>
          <Navigation />
          <ContactHeader />
          <main className="main_container">
            <ContactHeader />
            <ContactForm />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
