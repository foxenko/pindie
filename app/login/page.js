"use client";

import Styles from "./Login.module.css";
import { useState } from "react";
import { AuthForm } from "../components/AuthForm/AuthForm";

export default function LoginPage() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <div className={Styles["main"]}>
      <AuthForm setAuth={setIsAuthorized} />
    </div>
  );
}
