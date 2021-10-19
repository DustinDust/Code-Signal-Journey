const knapsackLight = (v1, w1, v2, w2, cap) => {
  if (w1 + w2 <= cap) return v1 + v2;
  else if (cap >= w1 && cap >= w2) return Math.max(v1, v2);
  else if (cap < w1 && cap < w2) return 0;
  else {
    if (cap < w1) return v2;
    if (cap < w2) return v1;
  }
};

console.log(knapsackLight(10, 5, 6, 4, 8));
