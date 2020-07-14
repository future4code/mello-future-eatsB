export default function PrivateRoute({ ...props }) {
  const runClientAuthCheck = () => {
    const getToken = localStorage.get("token");
    return getToken.match(/^[A-Za-z0-9-]+.[A-Za-z0-9-]+.?[A-Za-z0-9-.-]*$/)
      ? true
      : false;
  };

  return runClientAuthCheck() ? <Route {...props} /> : <Redirect to="/login" />;
}
