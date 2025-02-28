const fs = require("fs")

fs.readFile("get-json.json", (err, data) => {
    if (err) {
        console.log(err)
    } else {
        const result = JSON.parse(data)
        console.log(result[1])
    }
})