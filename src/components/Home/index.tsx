import CurrentWeather from "../CurrentWeather";
import Forecast from "../Forecast";
import Highlights from "../Highlights";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL, danni } from "../../helper";

const Home = (): JSX.Element => {
  const [data, setdata] = useState<any>(danni);
  const [loading, setLoading] = useState<boolean>(true);
  const [city, setCity] = useState<string | null>("Tashkent");
  let localStorage = window.localStorage;

  const reload = () => {
    if (localStorage.getItem("cityURL") !== null) {
      setCity(localStorage.getItem("cityURL"));
    }
  };

  useEffect(() => {
    setLoading(true);
    reload();
    axios.get(`${baseURL}&q=${city}`).then((response) => {
      setdata(response.data);
      setLoading(false);
    });
  }, [city]);

  let respData = data;

  return (
    <>
      {!loading ? (
        <div className="p-5 w-screen h-full overflow-y-auto grid gap-5">
          <CurrentWeather data={respData} reloadFunc={reload} />
          <div className="lg:col-start-3 lg:col-end-10 max-md:pb-20">
            <Forecast data={respData} />
            <Highlights data={respData} />
          </div>
        </div>
      ) : (
        <p>you have internet connection error</p>
      )}
    </>
  );
};

export default Home;
