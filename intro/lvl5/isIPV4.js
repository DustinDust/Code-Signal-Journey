const isIPv4Address = (inputString) => {
  const octs = inputString.split('.');
  if (octs.length !== 4) return false;
  for (const element of octs) {
    if (element.length === 0 || element.length > 3) return false;
    if (Number.parseInt(element).toString() !== element) return false;
    if (Number.parseInt(element) > 255 || Number.parseInt(element) < 0) {
      return false;
    }
  }
  return true;
};

isIPv4Address('0.254.255.0');
