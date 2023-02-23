import AllRoutes from "./AllRoutes/AllRoutes";
import UpperFooter from "./components/UpperFooter";
import HomePage from "./components/HomePage";
import NavTop from "./components/Navbar/NavTop";
import LowerFooter from "./components/LowerFooter";

function App() {
  return (
    <div>
      <NavTop />
      <AllRoutes />
      <UpperFooter />
    </div>
  );
}

export default App;
