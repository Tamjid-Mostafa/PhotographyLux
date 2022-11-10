export const JWTAuth = (user) => {
  const currentUser = {
    email: user?.email,
  };
  // get jwt token
  fetch("https://photographylux-server.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      localStorage.setItem("photography-token", data.token);
    });
};
