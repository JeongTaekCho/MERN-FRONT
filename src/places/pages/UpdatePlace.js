import React from "react";
import { useParams } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";

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

const UpdatePlace = () => {
  const placeId = useParams().placeId;

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }

  return (
    <form>
      <Input
        id="title"
        element="input"
        type="text"
        label="title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="유효한 장소명을 입력해 주세요."
        onInput={() => {}}
        value={identifiedPlace.title}
        valid={true}
      />
      <Input
        id="description"
        element="textarea"
        label="description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="내용을 5자이상 입력해주세요."
        onInput={() => {}}
        value={identifiedPlace.description}
        valid={true}
      />
      <Button type="submit" disabled={true}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
