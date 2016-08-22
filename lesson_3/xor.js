function isXor(a, b) {
  if ((a && b) || (!a && !b)) {
    return false;
  }

  return true;
}
