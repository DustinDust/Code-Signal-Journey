const isMAC48Address = (inputString) => {
  return /^[0-9a-f]{2}-[0-9a-f]{2}-[0-9a-f]{2}-[0-9a-f]{2}-[0-9a-f]{2}-[0-9a-f]{2}$/i
      .test(
          inputString
      );
};
