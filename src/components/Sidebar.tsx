"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: "/icons/dashboard.svg", color: "#424242"},
  { name: "Transactions", path: "/transactions", icon: "/icons/transactions.svg", color: "#424242"},
  { name: "Accounts", path: "/accounts", icon: "/icons/accounts.svg", color: "#424242"},
  { name: "Investments", path: "/investments", icon: "/icons/investments.svg", color: "#424242"},
  { name: "Credit Cards", path: "/credit-cards", icon: "/icons/credit-cards.svg", color: "#424242"},
  { name: "Loans", path: "#", icon: "/icons/loans.svg", color: "rgba(177, 177, 177, 1)"},
  { name: "Services", path: "#", icon: "/icons/services.svg", color: "rgba(177, 177, 177, 1)"},
  { name: "My Privileges", path: "#", icon: "/icons/privileges.svg", color: "rgba(177, 177, 177, 1)"},
  { name: "Settings", path: "#", icon: "/icons/settings.svg", color: "rgba(177, 177, 177, 1)"},
];

interface SidebarProps {
  isVisible: boolean;
}

export default function Sidebar({ isVisible }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      style={{
        width: isVisible ? "250px" : "0",
        transition: "width 0.3s ease",
        height: "calc(100vh - 60px)",
        position: "fixed",
        top: "60px",
        left: "0",
        backgroundColor: "#fff",
        overflowX: "hidden",
        zIndex: 10,
        boxShadow: isVisible ? "2px 0 10px rgba(0, 0, 0, 0.1)" : "none",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: "10px 0",
        }}
      >
        {menuItems.map((item) => (
          <li key={item.name} style={{ marginBottom: "10px" }}>
            <Link
              href={item.path}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                fontFamily: "Inter",
                fontSize: "16px",
                // color: pathname === item.path ? "#2D60FF" : "rgba(177, 177, 177, 1)",
                color: pathname === item.path ? "#2D60FF" : item.color,
                textDecoration: "none",
                fontWeight: pathname === item.path ? "600" : "400",
                backgroundColor:
                  pathname === item.path ? "rgba(45, 96, 255, 0.1)" : "transparent",
                borderRadius: "10px",
                transition: "all 0.2s ease-in-out",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{
                  width: "20px",
                  height: "20px",
                  marginRight: "10px",
                  filter: pathname === item.path ? "none" : "grayscale(100%)",
                }}
              />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
