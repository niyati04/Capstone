import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import LoginPage from "./Pages/Login";
import SignUpPage from "./Pages/SignUp";
import { Provider } from "react-redux";
import store from "./StateManagement/store";
import Navbar from "./Components/Navbar";
import Shop from "./Pages/Shop";
import About from "./Pages/About";
import Footer from "./Components/Footer";

function App() {
  // const location = useLocation();
  // const isLoginPage = location.pathname === "/LoginPage";
  // const isSignUpPage = location.pathname === "/SignUpPage";

  // Only render the Navbar component if not on LoginPage or SignUpPage
  // const renderNavbar = !isLoginPage && !isSignUpPage;
  return (
    <Provider store={store}>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" exact element={<LoginPage />} />
          <Route path="/SignUpPage" exact element={<SignUpPage />} />
          <Route path="/Shop" exact element={<Shop />} />

          <Route path="/About" exact element={<About />} />
        </Routes>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
