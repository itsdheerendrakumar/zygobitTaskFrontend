
"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const router = useRouter()
    useEffect(() => {
      if(!!!localStorage.getItem("authToken"))
        router.push("/login")
    }, [])
  return (
    <html lang="en">
      <div
      >
        {children}
      </div>
    </html>
  );
}
