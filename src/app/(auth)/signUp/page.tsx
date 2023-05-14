"use client";

// React
import { FC } from "react";

// Next
import Image from "next/image";
import Link from "next/link";

// MUI
import { Box, TextField } from "@mui/material";

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
          <div className={s.authHeaderNavWrapper}>
            <p className={s.authHeaderText}>
              Already have an account?
            </p>
            <Link
              className={s.authHeaderLink}
              href="/signIn"
            >
              Sign in
            </Link>
          </div>
        </header>
        <div className={s.formWrapper}>
          <form>
            <TextField
              id="filled-textarea"
              label="Multiline Placeholder"
              placeholder="Placeholder"
              multiline
              variant="filled"
            />
          </form>
        </div>
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
