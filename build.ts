import * as fs from "fs";
import * as path from "path";
import * as pug from "pug";

console.log(__dirname);

const outFolder = "out/";
const indexPath = path.join(outFolder, "index.html");

const srcFolder = "src/";
const srcIndexPath = path.join(srcFolder, "index.pug");

// TODO: automatize page compilation

fs.promises
  .mkdir(path.dirname(indexPath), { recursive: true })
  .then(() =>
    fs.promises.writeFile(indexPath, pug.compileFile(srcIndexPath)())
  );
