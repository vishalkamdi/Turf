// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import React from "react";

// import Hero from "./components/Hero/Hero";
// import Navbar from "./components/Navbar/Navbar";
// import Booking from "./components/Booking/Booking";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import Footer from "./components/Footer/Footer";
// import AddressPage from "./components/Address/AddressPage";

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Booking />
//       <AddressPage />
//       <Contact />
//       <Footer />
//     </>
//   );
// }
// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

// Import components
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Booking from "./components/Booking/Booking";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AddressPage from "./components/Address/AddressPage";

function App() {
  return (
    <Router basename="/Turf">
      <Navbar />
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/address" element={<AddressPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
