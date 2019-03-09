const fs = require("fs");

fs.writeFile(`dist/CNAME`, "polgar.dev", function(err) {
  if (err) {
    console.err(err);
  } else {
    console.info("CNAME copied to dist");
  }
});
