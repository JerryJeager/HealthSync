import { Outlet } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      {/* Footer should go here */}
      <Footer />
    </>
  );
}

export default App;
