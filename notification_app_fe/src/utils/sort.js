const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export const sortPriority = (data) => {
  return [...data].sort((a, b) => {
    const w1 = weights[a.Type] || 0;
    const w2 = weights[b.Type] || 0;

    if (w1 !== w2) return w2 - w1;

    return new Date(b.Timestamp) - new Date(a.Timestamp);
  });
};