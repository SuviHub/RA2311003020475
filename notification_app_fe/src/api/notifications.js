import axios from "axios";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJpczgyMjNAc3JtaXN0LmVkdS5pbiIsImV4cCI6MTc3NzcwNjQ2MywiaWF0IjoxNzc3NzA1NTYzLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNWQxY2YwMTctNTJmOS00MGJkLTlhMDctOGYxYzYyYzIyMTgzIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoiaWxpbmRyYSBzdXZpZGhhIiwic3ViIjoiMWZiZWE2YzYtYjkyYy00YmE4LWJmMzgtNTIxOTQ0ZTg1NGEyIn0sImVtYWlsIjoiaXM4MjIzQHNybWlzdC5lZHUuaW4iLCJuYW1lIjoiaWxpbmRyYSBzdXZpZGhhIiwicm9sbE5vIjoicmEyMzExMDAzMDIwNDc1IiwiYWNjZXNzQ29kZSI6IlFrYnB4SCIsImNsaWVudElEIjoiMWZiZWE2YzYtYjkyYy00YmE4LWJmMzgtNTIxOTQ0ZTg1NGEyIiwiY2xpZW50U2VjcmV0Ijoic0NWVE1tbUNKYXdIWERncSJ9.HiSvMK1Cr0_AHOJauPWjNeZQAp7X523G-JDpmTSj5-M";

export const fetchNotifications = async () => {
  try {
    const res = await axios.get(
      "http://20.207.122.201/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN.trim()}`,
        },
      }
    );

    console.log("API RESPONSE:", res.data);

    return res.data.notifications || [];
  } catch (err) {
    console.log("API ERROR:", err.response?.data || err.message);
    return [];
  }
};