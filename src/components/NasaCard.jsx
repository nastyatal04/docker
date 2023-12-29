import React, { useEffect, useState } from "react";
import useGetNasaCard from "../hooks/useGetNasaCard";
import { BASE_URL_PHOTO } from "../api/options";
import moment from "moment";
import clsx from "clsx";

export const NasaCard = () => {
  const today = moment();
  const [selectedDate, setSelectedDate] = useState(moment());

  const { data: nasaCard, isLoading } = useGetNasaCard(
    selectedDate.format("YYYY-MM-DD")
  );

  const handleLeftArrow = () => {
    setSelectedDate(selectedDate.subtract(1, "days"));
  };

  const handleRightArrow = () => {
    if (!isDatesSame()) {
      setSelectedDate(selectedDate.add(1, "days"));
    }
  };

  const isDatesSame = () =>
    today.format("YYYY-MM-DD") === selectedDate.format("YYYY-MM-DD");

  if (!nasaCard) {
    return <div>Нет данных</div>;
  }

  return (
    <div className="flex flex-col bg-white font-mono h-screen w-screen max-h-screen max-w-screen">
      <img
        className="h-screen w-screen max-h-screen max-w-screen overflow-hidden object-cover"
        src={nasaCard.url}
        alt=""
      />
      <div className="flex flex-row justify-between items-center p-3 bg-white">
        <span
          className="material-symbols-rounded cursor-pointer text-violet-900 bg-violet-100 font-medium p-4 flex justify-center items-center rounded-xl shadow-lg select-none hover:outline-1 hover:outline hover:outline-violet-900"
          onClick={handleLeftArrow}
        >
          chevron_left
        </span>
        <div className="flex flex-col justify-center items-center gap-1">
          <span className="font-medium text-base text-center">
            {nasaCard.copyright?.trim()}
          </span>
          <span className="font-bold text-xl text-center">
            {nasaCard.title}
          </span>
          <span className="font-medium text-base text-center">
            {moment(nasaCard.date).format("DD.MM.YYYY")}
          </span>
        </div>
        <span
          className={clsx(
            "material-symbols-rounded bg-violet-100 font-medium p-4 flex justify-center items-center rounded-xl shadow-lg select-none",
            !isDatesSame()
              ? " text-violet-900 hover:outline-1 hover:outline hover:outline-violet-900 cursor-pointer"
              : "text-violet-300"
          )}
          onClick={!isDatesSame() ? handleRightArrow : () => {}}
        >
          chevron_right
        </span>
      </div>
    </div>
    // <div className="nasa-card">
    //   <img className="nasa-card-img" src={nasaCard.url} alt="" />
    //   <div className="nasa-card-footer">
    //     <span class="material-symbols-rounded">arrow_back_ios</span>
    //     <div className="nasa-card-header">
    //       <h4 className="nasa-card-copyright">{nasaCard.copyright}</h4>
    //       <h2 className="nasa-card-title">{nasaCard.title}</h2>
    //       <h4 className="nasa-card-date">{nasaCard.date}</h4>
    //     </div>
    //     <span class="material-symbols-rounded">arrow_forward_ios</span>
    //   </div>
    // </div>
    // <div className="bg-white font-mono">
    //   <img className="nasa-card-img" src={nasaCard.url} alt="" />
    //   <div className="flex flex-row justify-between items-center p-4">
    //     <span class="material-symbols-rounded bg-gray-100 text-violet-900 bg-violet-100 font-medium p-4 flex justify-center items-center rounded-xl shadow-lg">
    //       arrow_back_ios
    //     </span>
    //     <div className="flex flex-col justify-center items-center gap-1">
    //       <span className="font-medium text-base">{nasaCard.copyright}</span>
    //       <span className="font-bold text-xl">{nasaCard.title}</span>
    //       <span className="font-medium text-base">{nasaCard.date}</span>
    //     </div>
    //     <span
    //       class="material-symbols-rounded bg-gray-100 text-violet-900 bg-violet-100 font-medium p-4 flex justify-center items-center rounded-xl shadow-lg"
    //       onClick={() => {}}
    //     >
    //       arrow_forward_ios
    //     </span>
    //   </div>
    // </div>
  );
};
