const initialState = {
  cityWeather: null,
  isLoading: false,
  error: "",
};
export default function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case "city/loading":
      return { ...state, isLoading: true, error: "", cityWeather: null };
    case "city/loaded":
      // console.log(action.payload);
      return {
        ...state,
        cityWeather: action.payload,
        isLoading: false,
      };
    case "failed":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}
export function loadingCityWeather(cityName) {
  return async function (dispatch, getState) {
    dispatch({ type: "city/loading" });
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=729d08127cea82b5fe17da2e5b28d23c&units=metric`
      );

      const data = await res.json();
      // console.log(data);
      // console.log(data.cod);
      if (data.cod === "404") throw new Error("");

      dispatch({
        type: "city/loaded",
        payload: data,
      });
    } catch (err) {
      // console.log(err);
      dispatch({
        type: "failed",
        payload: "⛔️ error please try again...",
      });
    }
  };
}
