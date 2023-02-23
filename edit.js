const path = "./db.json";

const fs = require("fs");
let data;

// const format = (str) => {
//     return str.length?+str.split(",").join(''):0
// }
// const stars = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5]
fs.readFile(path, "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  data = JSON.parse(jsonString);
  data.forEach((prod, i) => {
    prod.brand = prod.product_name.split(" ")[0];
  });
  data = JSON.stringify(data);
  fs.writeFile(path, data, (err) => {
    if (err) {
      console.log("Error writing file", err);
    } else {
      console.log("Successfully wrote file");
    }
  });
});
