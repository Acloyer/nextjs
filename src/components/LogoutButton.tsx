import { useRouter } from "next/router";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    localStorage.removeItem("authToken");

    router.push("/");
  };

  return (
    <button onClick={handleLogout} style={{ padding: "10px", backgroundColor: "red", color: "white", border: "none", borderRadius: "5px" }}>
      Log Out
    </button>
  );
};

export default LogoutButton;
