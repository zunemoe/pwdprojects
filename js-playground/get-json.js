const fs = require("fs")
const https = require("https")

https.get("https://jsonplaceholder.typicode.com/users", (res) => {
    let data = ''

    res.on('data', chunk => {
        data += chunk
    })

    res.on('end', () => {
        fs.writeFile("get-json.json", data, () => {
            console.log("Data written to file")
        })
    })
})