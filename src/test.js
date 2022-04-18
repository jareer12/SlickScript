fs = require("fs"); // npm install fs
Yaml = require("js-yaml"); // npm install js-yaml
Data = Yaml.load(fs.readFileSync(`./path/to/file`, { encoding: "utf-8" }));
console.log(Data);
// {}
