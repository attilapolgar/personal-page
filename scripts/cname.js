const fs = require('fs')

fs.writeFile(`dist/CNAME`, 'attilapolgar.com', function(err) {
  if (err) {
    console.err(err)
  } else {
    console.info('CNAME copied to dist')
  }
})
