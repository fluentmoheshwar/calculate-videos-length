import fs from "fs";
import path from "path";

const getListOfFile = (dir, ext, fileList) => {
  const files = fs.readdirSync(dir);
  fileList = fileList || [];
  files.forEach((f) => {
    // ignore hidden files
    if (!f.startsWith(".")) {
      const filePath = path.join(dir, f);
      if (fs.statSync(filePath).isDirectory()) {
        fileList = getListOfFile(filePath, ext, fileList);
      } else {
        if (f.endsWith(ext)) {
          fileList.push(filePath);
        }
      }
    }
  });

  return fileList;
};

export default getListOfFile;
