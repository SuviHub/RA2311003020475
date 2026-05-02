import { useEffect, useState } from "react";
import { fetchNotifications } from "../api/notifications";
import NotificationCard from "../components/NotificationCard";
import { sortPriority } from "../utils/sort";

export default function PriorityInbox() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchNotifications().then((res) => {
      setData(sortPriority(res).slice(0, 10));
    });
  }, []);

  const markViewed = (id) => {
    setData((prev) => prev.map((n) => (n.ID === id ? { ...n, viewed: true } : n)));
  };

  const unread = data.filter((n) => !n.viewed).length;

  return (
    <div>
      <p style={{ fontSize: "12px", fontWeight: 500, color: "#9ca3af", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "12px" }}>
        {unread} unread · top picks for you
      </p>
      {data.map((n) => (
        <NotificationCard key={n.ID} n={n} onClick={() => markViewed(n.ID)} />
      ))}
    </div>
  );
}