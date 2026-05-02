const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJpczgyMjNAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwMjI5OCwiaWF0IjoxNzc3NzAxMzk4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNDJjMzJlNDUtNmZlYS00N2Q1LTgzOGEtYjRkMTA0ZGJlMjdiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiaWxpbmRyYSBzdXZpZGhhIiwic3ViIjoiMWZiZWE2YzYtYjkyYy00YmE4LWJmMzgtNTIxOTQ0ZTg1NGEyIn0sImVtYWlsIjoiaXM4MjIzQHNybWlzdC5lZHUuaW4iLCJuYW1lIjoiaWxpbmRyYSBzdXZpZGhhIiwicm9sbE5vIjoicmEyMzExMDAzMDIwNDc1IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiMWZiZWE2YzYtYjkyYy00YmE4LWJmMzgtNTIxOTQ0ZTg1NGEyIiwiY2xpZW50U2VjcmV0Ijoic0NWVE1tbUNKYXdIWERncSJ9.ORAeh2m8eRxNJ3ska3Hw3R2htWn-YIGHXxRmgTmtMzM";

async function fetchNotifications() {
  try {
    const response = await fetch(
      "http://20.207.122.201/evaluation-service/notifications",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          Accept: "application/json",
        },
      }
    );

    console.log("Status Code:", response.status);

    const data = await response.json();
    return data.notifications || [];
  } catch (err) {
    console.error("Fetch error:", err.message);
    return [];
  }
}

function getTopNotifications(notifications, limit = 10) {
  const priority = notifications.sort((a, b) => {
    const w1 = weights[a.Type] || 0;
    const w2 = weights[b.Type] || 0;

    if (w1 !== w2) return w2 - w1;
    return new Date(b.Timestamp) - new Date(a.Timestamp);
  });

  return priority.slice(0, limit);
}

async function main() {
  const notifications = await fetchNotifications();

  if (!notifications.length) {
    console.log("No notifications received");
    return;
  }

  const top10 = getTopNotifications(notifications);

  console.log("\nTOP 10 NOTIFICATIONS:\n");

  top10.forEach((n, i) => {
    console.log(`${i + 1}. [${n.Type}] ${n.Message} - ${n.Timestamp}`);
  });
}

main();