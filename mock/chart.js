function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [50, 30, 40, 80, 10, 100];
      break;
    default:
      res = null;
  }

  return res;
}

module.exports = chart;
