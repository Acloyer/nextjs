"use client";

import { useSession, signOut } from "next-auth/react";
import LogoutButton from "./LogoutButton";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  const { data: session } = useSession();

  return (
    <div
      style={{
        width: "100%",
        height: "60px",
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        position: "fixed", 
        top: "0",
        zIndex: "1000",
        left: "0",
        right: "0",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img
          src="/icons/logo.svg"
          alt="BankDash"
          style={{ width: "40px", height: "40px", cursor: "pointer" }}
          onClick={toggleSidebar}
        />
        <h1
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#2D60FF",
            fontFamily: "Inter",
          }}
        >
          BankDash.
        </h1>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          style={{
            padding: "10px 20px",
            backgroundColor: "#ff4d4d",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontFamily: "Inter",
          }}
        >
          Sign Out
        </button>
        <input
          type="text"
          placeholder="Search for something"
          style={{
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
            width: "250px",
            fontFamily: "Inter",
          }}
        />
        <div
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid #ccc",
          }}
        >
          <img
            src={session?.user?.image || "/icons/user-avatar.svg"}
            alt="User Avatar"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
}
