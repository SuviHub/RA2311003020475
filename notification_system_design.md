# Notification System Design (Stage 1)

## 1. Overview

The Campus Notification System is designed to fetch real-time notifications from a protected API and display the most important unread notifications using a Priority Inbox mechanism.

Notifications are categorized into:
- Placement
- Result
- Event

The system ensures that high-priority and recent notifications are shown first to improve user focus and reduce information overload.

---

## 2. Priority Strategy

Each notification is assigned a priority weight:

- Placement → 3 (Highest Priority)
- Result → 2
- Event → 1 (Lowest Priority)

Sorting is performed using:
1. Notification type weight (primary factor)
2. Timestamp (secondary factor, latest first)

This ensures that:
- Critical updates appear first
- Newer notifications are prioritized within the same category

---

## 3. Implementation Approach

The system follows these steps:

1. Fetch notifications from the API endpoint
2. Authenticate using JWT Bearer token
3. Store notifications in memory (no database required)
4. Sort notifications using a comparator function
5. Extract top 10 notifications using array slicing

Sorting logic:
- Higher weight → higher priority
- If equal weight → more recent timestamp first

---

## 4. Efficient Design Consideration

While sorting works for small datasets, a scalable system should support continuous incoming notifications.

To optimize performance:

### Min Heap / Priority Queue Approach
- Maintain only top 10 notifications in memory
- Insert new notifications in O(log n)
- Remove lowest priority when size exceeds limit

This avoids repeated full sorting and improves efficiency for real-time systems.

---

## 5. API Authentication Flow

The API is protected and requires authentication:

1. `/auth` endpoint is used to generate an access token
2. The token is passed in the Authorization header as:

   Authorization: Bearer <access_token>

3. This token is then used to access the notifications endpoint

---

## 6. Failure Handling

The system is designed to handle API failures gracefully:

- If authentication fails or API is unreachable:
  - The system does not crash
  - A fallback message is displayed
  - Execution continues safely

This ensures robustness in production-like environments.

---

## 7. Conclusion

The implemented system successfully:
- Fetches notifications from a protected API
- Applies priority-based sorting
- Displays top 10 relevant notifications
- Handles authentication and failure scenarios
- Considers scalability for real-world usage

The design can be extended into a real-time streaming notification system using efficient data structures such as heaps or priority queues.