const express = require('express')
const bodyParser = require('body-parser')
const sparkMD5 = require('spark-md5')
const multiparty = require('multiparty')
const fs = require('fs')

const app = express()
const uploadDir = `${__dirname}/upload`
const PORT = 8888

function handleMultiparty(req, res, temp) {
  return new Promise((resolve, reject) => {
    // options
    let options = {
      maxFieldsSize: 1 * 1024 * 1024,
      maxFields: 1,
    }
    !temp ? (options.uploadDir = uploadDir) : null
    let form = new multiparty.Form(options)
    // multiparty
    form.parse(req, function (err, fields, files) {
      if (err) {
        res.send({
          code: 1,
          reason: err,
        })
        return reject(err)
      }
      resolve({
        fields,
        files,
      })
    })
  })
}

app.get('/', (req, res) => {
  res.send('Hello World.')
})

// * form-data
app.post('/upload', async (req, res) => {
  let { files } = await handleMultiparty(req, res)
  let file = files.file[0]

  res.send({
    code: 0,
    originalFilename: file.originalFilename,
    path: file.path,
  })
})

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
})
