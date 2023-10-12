var fs = require("fs");

fs.readFile("data.json", (err, data) => {
    if (err != null ) process.exit(0);
    let reservesData = JSON.parse(data);
    let minval = reservesData[0].value;
    let indexMin
    for (let datai of reservesData) {
        if (minval > datai["value"]) {
            minval = datai["value"];
            indexMin = reservesData.indexOf(datai);
        }
    }
    fs.writeFile('output.txt', reservesData[indexMin].txt + ' : ' + reservesData[indexMin].value, (err) => {
        if (err != null ) process.exit(0);
        console.log("Your data was successfully written to the file output.txt, check it.");
    });
});