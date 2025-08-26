"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CreativeDigitalRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/services");
  });

  return null;
}
