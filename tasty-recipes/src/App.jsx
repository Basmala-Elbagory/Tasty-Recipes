import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import RecipeList from "./Components/RecipeList";
import Footer from "./Components/Footer";
import Chef from "./Components/ChefSection";
import About from "./Components/About";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <RecipeList />
      <Chef />
      <About />
      <Footer />
      
    </>
  );
}

export default App;