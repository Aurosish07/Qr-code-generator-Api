
import qr from 'qr-image';
import fs, { copyFileSync } from 'fs';
import express from "express";

const port = 3000;
const app = express();


app.use(express.static("public"));
app.use(express.urlencoded({ extended: 1 }));

app.get("/generate", async (req, res) => {
  const url = req.query.generatee;
  console.log(url);
  var qr_svg = qr.imageSync(url, { 'type': 'png' });


  res.setHeader('Content-Type', 'image/png');
  res.setHeader('Content-Disposition', 'inline; filename=myqr.png');

  // Send QR code buffer in the response
  res.send(qr_svg);



})

app.listen(port, () => {
  console.log("app is listening on the port ", port);
})


