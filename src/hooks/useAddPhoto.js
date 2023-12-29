import { useMutation } from "@tanstack/react-query";
import { addPhoto } from "../api/ggg";

export const useAddPhoto = () => {
  useMutation({
    mutationKey: ["photo", "add"],
    mutationFn: (photo) => addPhoto(photo),
  });
};
