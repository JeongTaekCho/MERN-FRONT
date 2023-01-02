import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const UserPlaces = () => {
  const DUMMY_PLACES = [
    {
      id: "p1",
      title: "empire state building",
      description: "세계에서 가장 유명한 고층 빌딩 중 하나",
      imageUrl:
        "https://lh5.googleusercontent.com/p/AF1QipO1LQRpgc0tNHhxmbcWWUpv88yjuTZvcwh6VjcJ=w408-h272-k-no",
      address: "미국 10001 뉴욕",
      location: {
        lat: 40.7485492,
        lng: -73.9883384,
      },
      creator: "u1",
    },
    {
      id: "p2",
      title: "empire state building",
      description: "세계에서 가장 유명한 고층 빌딩 중 하나",
      imageUrl:
        "https://lh5.googleusercontent.com/p/AF1QipO1LQRpgc0tNHhxmbcWWUpv88yjuTZvcwh6VjcJ=w408-h272-k-no",
      address: "미국 10001 뉴욕",
      location: {
        lat: 40.7485492,
        lng: -73.9883384,
      },
      creator: "u2",
    },
  ];

  const userId = useParams().userId;
  const loadedPlace = DUMMY_PLACES.filter((place) => place.creator === userId);

  return <PlaceList items={loadedPlace} />;
};

export default UserPlaces;
