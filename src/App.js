import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { MyPage } from "./pages/MyPage"

const mainStyle = {
  display: 'flex',
  height: '100vh',
  justifyContent: 'center',
  backgroundColor: '#f1f1f2',
}

function App() {
  return (

    <BrowserRouter>
      <nav>
        {/* <NavLink to="/">Home</NavLink> */}
        <NavLink to="/MyPage">About</NavLink>
        {/* <NavLink to="/contact">Contact</NavLink> */}
      </nav>
      <div className="main" style={mainStyle}>
        <Routes>
          {/* <Route path="/" element={<Start />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/MyPage" element={<MyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
