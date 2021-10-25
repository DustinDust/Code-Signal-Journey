const knapsackLight = (v1, w1, v2, w2, max) => {
  if (w1 + w2 <= max) return v1 + v2;
  else {
    if (max >= w1 && max >= w2) return Math.max(v1, v2);
    else if (max < w1 && max < w2) return 0;
    else {
      if (max < w1) return v2;
      if (max < w2) return v1;
    }
  }
};
