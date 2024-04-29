import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { MyPage } from "./pages/MyPage"
import Posts from "./component/Posts";
import EditProfile from "./component/EditProfile";
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
        <NavLink to="/MyPage">About</NavLink>
      </nav>
      <div className="main" style={mainStyle}>
        <Routes>
          <Route path="/MyPage" element={<MyPage />}>
            <Route path="Posts" element={<Posts />} />
            <Route path="EditProfile" element={<EditProfile />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
