import fs from "fs";

export async function deleteFile(filename: string) {
  try {
    await fs.promises.stat(filename);
  } catch (err) {
    return null;
  }

  await fs.promises.unlink(filename);

  return null;
}
