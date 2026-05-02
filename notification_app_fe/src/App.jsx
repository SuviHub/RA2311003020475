import { useState } from "react";
import Navbar from "./components/Navbar";
import PriorityInbox from "./pages/PriorityInbox";
import AllNotifications from "./pages/AllNotifications";

export default function App() {
  const [view, setView] = useState("priority");

  return (
    <div style={{ maxWidth: "680px", margin: "auto", padding: "2rem 1rem" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "22px", fontWeight: 500, margin: 0 }}>Campus Notifications</h1>
      </div>
      <Navbar view={view} setView={setView} />
      {view === "priority" ? <PriorityInbox /> : <AllNotifications />}
    </div>
  );
}