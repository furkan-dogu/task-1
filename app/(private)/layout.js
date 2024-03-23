"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function PrivateLayout({ children }) {
  const { fullName } = useSelector((state) => state.auth);

  let router = useRouter();
  useEffect(() => {
    if (!fullName) {
      router.push("/login");
    }
  }, []);

  return <section>{children}</section>;
}
