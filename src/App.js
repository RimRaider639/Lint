import AllRoutes from "./AllRoutes/AllRoutes";
import UpperFooter from "./components/UpperFooter";
import NavTop from "./components/Navbar/NavTop";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <AllRoutes />
      <UpperFooter />
    </>
  );
}

export default App;
