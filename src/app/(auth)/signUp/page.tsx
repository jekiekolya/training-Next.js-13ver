// "use client";

// React
import { FC } from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// MUI
// import { Box } from "@mui/material";

// Icons
import authPoster from "../../../assets/auth/authPoster.png";
import logo from "../../../assets/logo.png";

// Styles
import s from "./styles.module.scss";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className={s.authContainer}>
      <div className={s.authFormWrapper}>
        <header className={s.authHeader}>
          <Image
            src={logo}
            alt="Auth Poster"
            width={106}
            height={36}
          />
          <div>
            <p>Already have an account?</p>
            <Link href="/signIn">Sign in</Link>
          </div>
        </header>
      </div>
      <div className={s.authIconWrapper}>
        <Image
          src={authPoster}
          alt="Auth Poster"
          width={494}
          height={625}
        />
      </div>
    </div>
  );
};

export default page;
