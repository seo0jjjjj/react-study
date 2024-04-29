import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
function App() {
  return (
    <>

      <BrowserRouter>
        <nav>
          <NavLink className="selected" to="/">Home</NavLink>
          <NavLink className="selected" to="/about">About</NavLink>
          <NavLink className="selected" to="/contact">Contact</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


function Start(props) {
  return <h1>Start</h1>
}


function About(props) {
  return <h1>About</h1>
}

function Contact(props) {
  return <h1>Contact</h1>
}

export default App;
