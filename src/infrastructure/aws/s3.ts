import fs from "fs";
import * as AWS from "aws-sdk";
import shortid from "shortid";

export const storageClient = new AWS.S3({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESSKEYID as string,
    secretAccessKey: process.env.AWS_SECRETACCESSKEY as string,
  },
});

export const uploadFile = async (file: any) => {
  const stream = fs.createReadStream(file.tempFilePath);
  const uniqueFileName = generateUniqueFileName(file.name);

  const uploadParams = {
    Bucket: process.env.AWS_BUCKET_NAME!,
    Key: uniqueFileName,
    Body: stream,
    ContentType: file.mimetype,
    ContentDisposition: "inline",
  };

  const command = await storageClient.upload(uploadParams).promise();
  return command.Location;
};

export function generateUniqueFileName(originalFileName: string): string {
  const uniqueFileName = `${shortid.generate()}.${originalFileName
    .split(".")
    .pop()}`;
  return uniqueFileName;
}
