export default function Navbar({ view, setView }) {
  return (
    <div style={styles.wrapper}>
      {["priority", "all"].map((v) => (
        <button
          key={v}
          onClick={() => setView(v)}
          style={view === v ? { ...styles.tab, ...styles.activeTab } : styles.tab}
        >
          {v === "priority" ? "Priority Inbox" : "All Notifications"}
        </button>
      ))}
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    gap: "4px",
    background: "#f3f4f6",
    padding: "4px",
    borderRadius: "12px",
    marginBottom: "1.5rem",
    border: "0.5px solid #e5e7eb",
  },
  tab: {
    flex: 1,
    padding: "8px 12px",
    border: "none",
    background: "transparent",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: 400,
    color: "#6b7280",
    cursor: "pointer",
    transition: "all 0.15s",
  },
  activeTab: {
    background: "#ffffff",
    color: "#111827",
    fontWeight: 500,
    border: "0.5px solid #e5e7eb",
  },
};