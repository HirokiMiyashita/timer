import React, { useState } from "react";
import Link from "next/link";
import Button from "@material-ui/core/Button";
import * as Styled from "../component/styled";

const Login = () => {
  return (
    <div>
      <Styled.button color="primary" variant="contained">
        <Link href="/waterBallguest">
          <a>ゲストで使用する</a>
        </Link>
      </Styled.button>
      <Styled.spacer />
      <Styled.button color="primary" variant="contained">
        <Link href="/waterBall">
          <a>会員登録をして使用する</a>
        </Link>
      </Styled.button>
    </div>
  );
};

export default Login;
