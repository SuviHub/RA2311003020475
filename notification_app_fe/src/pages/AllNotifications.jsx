import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import NotificationCard from "../components/NotificationCard";

const TYPES = ["All", "Placement", "Result", "Event"];

export default function AllNotifications() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetchNotifications().then(setData);
  }, []);

  const filtered = filter === "All" ? data : data.filter((n) => n.Type === filter);

  return (
    <div>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "1rem" }}>
        {TYPES.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            style={{
              padding: "5px 12px",
              borderRadius: "99px",
              border: "0.5px solid",
              borderColor: filter === t ? "#111827" : "#e5e7eb",
              background: filter === t ? "#111827" : "#ffffff",
              color: filter === t ? "#ffffff" : "#6b7280",
              fontSize: "13px",
              cursor: "pointer",
              transition: "all 0.15s",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p style={{ textAlign: "center", color: "#9ca3af", fontSize: "14px", padding: "3rem 0" }}>
          No notifications in this category.
        </p>
      ) : (
        filtered.map((n) => <NotificationCard key={n.ID} n={n} />)
      )}
    </div>
  );
}