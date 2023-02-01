import React from "react";
import { useParams } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import "./placeForm.css";

import { useForm } from "../../shared/hooks/form-hook";
import { useEffect } from "react";
import { useState } from "react";

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
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    setFormData(
      {
        title: {
          value: identifiedPlace.title,
          isValid: true,
        },
        description: {
          value: identifiedPlace.description,
          isValid: true,
        },
      },
      true
    );
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2>Could not find place!</h2>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="center">
        <h2>LOADING</h2>
      </div>
    );
  }

  return (
    formState.inputs.title.value && (
      <form className="place-form">
        <Input
          id="title"
          element="input"
          type="text"
          label="title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="유효한 장소명을 입력해 주세요."
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          element="textarea"
          label="description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="내용을 5자이상 입력해주세요."
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
        />
        <Button
          type="submit"
          onClick={placeSubmitHandler}
          disabled={!formState.isValid}
        >
          Update Place
        </Button>
      </form>
    )
  );
};

export default UpdatePlace;
