import multer from "multer";
import crypto from "node:crypto";
import { resolve } from "path";

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          const fileExt = file.mimetype.split("/")[1];
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.fieldname}.${fileExt}`;

          return callback(null, fileName);
        },
      }),
    };
  },
};
