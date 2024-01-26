import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styles from "./AppLayout.module.css";
import { loadingCityWeather } from "../features/weather/weatherSlice";
import Spinner from "../components/Spinner";
import Message from "../components/Message";
import Main from "../components/Main";

function AppLayout() {
  const [searchquery, setsearchquery] = useState("");
  const dispatch = useDispatch();
  const { cityWeather, isLoading, error } = useSelector(
    (store) => store.weather
  );
  function handleclick() {
    if (!searchquery) return;
    dispatch(loadingCityWeather(searchquery));
    setsearchquery("");
  }
  return (
    <main className={styles.app}>
      <section>
        <div className={styles["app--1"]}>
          <input
            value={searchquery}
            placeholder="search for city weather"
            type="text"
            onChange={(e) => setsearchquery(e.target.value)}
          />
          <button onClick={handleclick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#000000"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
            </svg>
            <span className={styles.hover}>clcik</span>
          </button>
        </div>
        <div>
          {isLoading && <Spinner />}
          {error && <Message message={error} />}
          {cityWeather && <Main cityWeather={cityWeather} />}
        </div>
      </section>
    </main>
  );
}

export default AppLayout;
