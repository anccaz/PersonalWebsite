import styles from "./App.module.css";
import { Navbar as HeroNavbar } from "./components/Hero/Hero";
import { Navbar as MainNavbar} from "./components/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <MainNavbar />  
      <HeroNavbar />  
      <Hero />
      <About />
      <Experience />
    </div>
  );
}

export default App;