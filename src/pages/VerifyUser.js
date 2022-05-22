import React from "react";
import { useParams } from "react-router-dom";
import { UserService } from "../services/user.service";

const VerifyUser = () => {
  const { token } = useParams();

  return (
    <>
      {token}

      <button
        onClick={() => {
          UserService.verifyUser(token);
        }}
      >
        fasdfasd
      </button>
    </>
  );
};

export default VerifyUser;
