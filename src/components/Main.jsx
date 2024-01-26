import { useEffect, useState } from "react";
import styles from "./Main.module.css";
// import { useSelector } from "react-redux";
function Main({ cityWeather }) {
  const weatercondition = cityWeather.weather[0].main;
  const [backgroundClass, setBackGroundClass] = useState("");
  const date = new Date(cityWeather.dt * 1000).toDateString();
  useEffect(() => {
    switch (weatercondition) {
      case "Clear":
        setBackGroundClass(styles["background-sunny"]);
        break;
      case "Clouds":
        setBackGroundClass(styles["background-cloud"]);
        break;
      case "Rain":
        setBackGroundClass(styles["background-rainy"]);
        break;
      case "Drizzle":
        setBackGroundClass(styles["background-rainy"]);
        break;
      case "Thunderstorm":
        setBackGroundClass(styles["background-rainy"]);
        break;
      case "Snow":
        setBackGroundClass(styles["background-snow"]);
        break;
      default:
        setBackGroundClass("");
        break;
    }
  }, [weatercondition]);

  return (
    <section className={`${styles.main} ${backgroundClass}`}>
      <div className={styles["main-text"]}>
        <p>{date}</p>
        <h2>
          {" "}
          {cityWeather.name} {cityWeather.sys.country}
        </h2>
        <p> {Math.round(cityWeather.main.temp)}℃</p>
        <p>{cityWeather.weather[0].description}</p>
        <h3>
          <span>H:{Math.round(cityWeather.main.temp_max)}℃</span>
          <span>L:{Math.round(cityWeather.main.temp_min)}℃</span>
        </h3>
      </div>
    </section>
  );
}

export default Main;
