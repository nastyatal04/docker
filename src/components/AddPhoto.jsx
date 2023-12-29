import React, { useState } from "react";
import { useAddPhoto } from "../hooks/useAddPhoto";

export const AddPhoto = () => {
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [explanation, setExplanation] = useState();
  const [image, setImage] = useState();
  const { mutate } = useAddPhoto();
  const handlePhotoMutate = () => {
    mutate({
      date,
      title,
      author,
      explanation,
      image,
    });
  };

  return (
    <div className="flex flex-col gap-2 p-16">
      <input
        type="date"
        name="date"
        id="date"
        className="border-2"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        placeholder="Дата"
      />
      <input
        type="text"
        name="title"
        id="title"
        className="border-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Название"
      />
      <input
        type="text"
        name="author"
        id="author"
        className="border-2"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Автор"
      />
      <textarea
        type="text"
        name="explanation"
        id="explanation"
        className="border-2"
        value={explanation}
        onChange={(e) => setExplanation(e.target.value)}
        placeholder="Описание"
      />
      <input
        type="file"
        name="image"
        id="image"
        className="border-2"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Выберите фото"
      />
      <div
        className="flex justify-center items-center p-4 bg-emerald-200 cursor-pointer"
        onClick={() => handlePhotoMutate()}
      >
        Создать
      </div>
    </div>
  );
};
