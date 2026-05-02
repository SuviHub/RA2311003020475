const BADGE_STYLES = {
  Placement: { background: "#EAF3DE", color: "#3B6D11" },
  Result:    { background: "#E6F1FB", color: "#185FA5" },
  Event:     { background: "#FAEEDA", color: "#854F0B" },
};

export default function NotificationCard({ n, onClick }) {
  const badge = BADGE_STYLES[n.Type] || { background: "#f3f4f6", color: "#6b7280" };

  return (
    <div onClick={onClick} style={{ ...styles.card, background: n.viewed ? "#f9fafb" : "#ffffff" }}>
      <div style={styles.top}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {!n.viewed && <div style={styles.unreadDot} />}
          <span style={{ ...styles.badge, ...badge }}>{n.Type}</span>
        </div>
        <span style={styles.time}>{n.Timestamp}</span>
      </div>

      <p style={{ ...styles.msg, color: n.viewed ? "#9ca3af" : "#4b5563" }}>{n.Message}</p>

      {n.Type === "Placement" && (
        <div style={styles.priorityFlag}>
          <div style={styles.dot} />
          High priority
        </div>
      )}
    </div>
  );
}

const styles = {
  card: {
    border: "0.5px solid #e5e7eb",
    borderRadius: "12px",
    padding: "1rem 1.25rem",
    marginBottom: "10px",
    cursor: "pointer",
    transition: "border-color 0.15s",
  },
  top: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "12px",
    marginBottom: "8px",
  },
  badge: {
    fontSize: "11px",
    fontWeight: 500,
    padding: "3px 9px",
    borderRadius: "99px",
  },
  time: {
    fontSize: "12px",
    color: "#9ca3af",
    whiteSpace: "nowrap",
  },
  msg: {
    fontSize: "14px",
    lineHeight: 1.6,
    margin: 0,
  },
  unreadDot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    background: "#378ADD",
    flexShrink: 0,
  },
  priorityFlag: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    marginTop: "10px",
    fontSize: "12px",
    fontWeight: 500,
    color: "#3B6D11",
  },
  dot: {
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "#639922",
  },
};