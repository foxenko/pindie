"use client";

import Styles from "./Me.module.css";
import { useStore } from "@/app/store/app-store";
import { useRouter } from "next/navigation";

export default function MePage() {
  const router = useRouter();
  const store = useStore();

  const handleLogout = () => {
    store.logout();
  };

  return (
    <div className={Styles["main"]}>
      <p>id: </p>
      <p>username: </p>
      <p>email: </p>
      <p>provider: </p>
      <p>role: </p>
      <p>id: </p>
      <p>name: </p>
      <p>description: </p>
      <p>type: </p>
      <p>created_at: </p>
      <p>updated_at: </p>

      <button className={Styles["auth__button"]} onClick={() => {handleLogout(); router.push("/");}}>
        Выйти
      </button>
    </div>
  );
}
