import { useQuery } from "@tanstack/react-query";
import { fetchNasaCard } from "../api/nasa";
import { getData } from "../api/ggg";

const useGetNasaCard = (date) =>
  useQuery({
    queryKey: ["photo", date],
    queryFn: () => getData(date),
  });

export default useGetNasaCard;
