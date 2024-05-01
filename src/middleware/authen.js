const jwt = require("jsonwebtoken");

// kiem tra token cua web cpanel
const checkTokenWeb = (req, res, next) => {
  // return next(); // bo qua check token dung de test
  const { session } = req; // lay session
  const url = req.originalUrl.toLowerCase(); // lay url

  // neu khong co session thi chuyen qua login
  if (!session.token) {
    // muon login  ----> ok

    if (url.includes("/signin")) {
      return next();
    } else {
      // muon # ---> cho di login
      return res.redirect("/signin");
    }
  } else {
    const { token } = session;
    if (!token) {
      if (url.includes("/signin")) {
        return next();
      } else {
        return res.redirect("/signin");
      }
    } else {
      jwt.verify(token, "secret", (err, decoded) => {
        if (err) {
          if (url.includes("/signin")) {
            return next();
          } else {
            return res.redirect("/signin");
          }
        } else {
          if (url.includes("/signin")) {
            return res.redirect("/"); // chuyen qua trang chu
          } else {
            return next();
          }
        }
      });
    }
  }
};
const checkTokenApp = (req, res, next) => {
  let token = null;
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] == "Bearer"
  )
    token = req.headers.authorization.split(" ")[1];

  if (token) {
    jwt.verify(token, "secret", function (error, decoded) {
      if (error) {
        return res.status(401).json({ status: false });
      } else {
        return next();
      }
    });
  } else {
    return res.status(401).json({ status: false });
  }
};
module.exports = { checkTokenWeb, checkTokenApp };
