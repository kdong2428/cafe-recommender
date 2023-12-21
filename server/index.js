const express = require("express");
const fs = require('fs');

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware to parse JSON from the request body
app.use(express.json());

app.post("/api", (req, res) => {

  console.log(req);
  console.log("data: " + req.body.data);

  const jsonData = JSON.parse(req.body.data);
  const name = jsonData.displayName.text;

  console.log("name: " + name);

  fs.writeFileSync("data/"+name+".json", req.body.data);

  res.json({ success: true, message: 'Place details saved successfully.' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
