import React from "react";
import { LinkedInProps } from "../../declarations";
import { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";

function LinkedIn(props: LinkedInProps): JSX.Element {
  let navigate = useNavigate();

  useLayoutEffect(() => {
    return navigate("/?uuid=" + process.env.REACT_APP_LINKEDIN_UUID, {
      replace: true,
    });
  });

  return <div className="linkedIn"></div>;
}

export default LinkedIn;
