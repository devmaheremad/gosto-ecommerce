import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components";
import { About, Blog, Contact, Favorite, Home, Profile, Shop } from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/gosto-ecommerce" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
