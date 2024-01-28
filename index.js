
import qr from 'qr-image';
import fs, { copyFileSync } from 'fs';
import express from "express";

const port = 3000;
const app = express();


app.use(express.static("public"));
app.use(express.urlencoded({extended:1}));

app.get("/generate", async (req, res) => {
  const url = req.query.generatee;
  console.log(url);
  var qr_svg = qr.image(url);
  qr_svg.pipe(fs.createWriteStream("public/myqr.png"));
  res.end();
})

app.listen(port, () => {
  console.log("app is listening on the port ", port);
})


