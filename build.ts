import * as fs from "fs";
import * as path from "path";
import * as pug from "pug";

console.log(__dirname);

const outFolder = "out/";

const templatesFolder = "src/templates";

const templateNames = ["index", "frappes"];

templateNames.forEach((templateName) => {
  const templatePath = path.join(templatesFolder, templateName) + ".pug";
  const filePath = path.join(outFolder, templateName) + ".html";

  fs.promises
    .mkdir(path.dirname(filePath), { recursive: true })
    .then(() =>
      fs.promises.writeFile(filePath, pug.compileFile(templatePath)())
    );
});
