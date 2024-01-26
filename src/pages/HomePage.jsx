import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import Footer from "../components/Footer";
function HomePage() {
  return (
    <main className={styles.homepage}>
      <section>
        <h1>Simple Weather App</h1>
        <h2>
          The Weather App: Offers current weather,3-hour Forecast 5 days,Basic
          weather maps
        </h2>
        <Link to="/app" className={styles.cta}>
          Let's Start
        </Link>
      </section>
      <Footer />
    </main>
  );
}

export default HomePage;
