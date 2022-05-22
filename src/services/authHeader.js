export default function authHeader() {
  const token = sessionStorage.getItem("token");

  if (token !== null) {
    return { Authorization: token };
  } else {
    return {};
  }
}
