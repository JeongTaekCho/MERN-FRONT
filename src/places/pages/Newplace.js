import React from "react";
import Input from "../../shared/components/FormElements/Input";

import "./Newplace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="title"
        validators={[]}
        errorText="유효한 제목을 입력해주세요."
      />
    </form>
  );
};

export default NewPlace;
