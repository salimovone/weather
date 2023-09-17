import React from "react";
import DailyCard from "../DailyCard";
import { resData } from "../../interfaces";

type Props = {
  data: resData;
};

const Forecast = ({ data }: Props) => {
  const localTime: number = Number(
    data.location.localtime.split(" ")[1].split(":")[0]
  );

  return (
    <div>
      <h2 className="text-4xl font-bold">
        it's {data.forecast.forecastday[0].day.condition.text}
      </h2>
      <div className="w-fit mt-5 none-scroll md:flex md:justify-between md:w-full">
        {data.forecast.forecastday[0].hour.map((item, index) => {
          let cardTime: number = Number(item.time.split(" ")[1].split(":")[0]);

          return (
            <React.Fragment key={index}>
              {cardTime > localTime && cardTime < localTime + 7 ? (
                <DailyCard data={item} />
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;
