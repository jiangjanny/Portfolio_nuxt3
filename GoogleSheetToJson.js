const fs = require("fs-extra");
const unflatten = require("flat").unflatten;
const { extractSheets } = require("spreadsheet-to-json");
const path = require("path");
extractSheets(
  {
    spreadsheetKey: "1rBNi9XWeFTaCIfPrZ5xhJmAoABnyab588gQOPjaAwRc", // < 我們 google sheet 文件的 key >
    credentials: require("./google/nuxt3portfoliojanny-930a6d4cc275.json"), // 我們下載來的私密金鑰>
    sheetsToExtract: ["home", "about"], // <google sheet 的分頁名稱，不要用中文>
  },
  (err, data) => {
    if (err) throw err;
    const read = [...data["home"], ...data["about"]];
    const result = {};
    const files = [];

    for (const key in read[0]) {
      if (key !== "key") {
        files.push(key);
        result[key] = {};
      }
    }
    read.forEach((el) => {
      for (const file of files) {
        result[file][el["key"]] = el[file] ? el[file] : "";
      }
    });
    for (const fileName of files) {
      fs.ensureDirSync(path.dirname(path.resolve(__dirname, "./locales", `${fileName}.json`)));
      fs.writeJSONSync(path.resolve(__dirname, "./locales", `${fileName}.json`), unflatten(result[fileName], { object: true }), { spaces: 2 });
    }
  }
);
