import React from "react";
import { useParams } from "react-router-dom";

const SingleDetail = () => {
  const { id } = useParams();
  console.log(id);

  return <>sdad</>;
};

export default SingleDetail;
