const express = require('express');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const JWT_SECRET = process.env.JWT_SECRET || 'yourfallbacksecret';

app.use(cookieParser());

app.get('/users', (req, res) => {
 
  console.log('User route accessed');
  res.send('User route accessed');
});

app.get('/products', authenticateToken, (req, res) => {
  
  console.log('Product route accessed');
  res.send('Product route accessed');
});


function authenticateToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
