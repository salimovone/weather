import { BsSunrise, BsSunset } from "react-icons/bs"; 
import { BiWind } from "react-icons/bi"; 
import { resData } from "../../interfaces";

type Props = {
  data: resData
};

const TodayInfo = ({data}: Props) => {
  return (
    <div>
      <hr className="md:hidden lg:block my-3" />

      <div className="md:mt-10 lg:mt-0">
        <span className="flex items-center gap-5">
          <span className="glass text-2xl rounded--sm w-10 h-10 flex justify-center items-center">
            <BiWind />
          </span>
          <b>{`${data.current.wind_kph} km/soat`}</b>
        </span>
        <span className="flex items-center gap-5">
          <span className="glass text-2xl rounded--sm w-10 h-10 flex justify-center items-center mt-3">
            <BsSunrise />
          </span>
          <b>{data.forecast.forecastday[0].astro.sunrise}</b>
        </span>
        <span className="flex items-center gap-5">
          <span className="glass text-2xl rounded--sm w-10 h-10 flex justify-center items-center mt-3">
          <BsSunset />
          </span>
          <b>{data.forecast.forecastday[0].astro.sunset}</b>
        </span>
      </div>
    </div>
  );
};

export default TodayInfo;
