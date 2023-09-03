// const aws = require("aws-sdk");
// import aws from
// const fs = require("fs");

// const spacesEndpoint = new aws.Endpoint("sfo3.digitaloceanspaces.com");

// const s3 = new aws.S3({
//   endpoint: spacesEndpoint,
//   accessKeyId: process.env.SPACES_KEY,
//   secretAccessKey: process.env.SPACES_SECRET,
// });

// const enviarArquivo = async (file: any) => {
//   return await s3
//     .upload({
//       Bucket: process.env.SPACES_BUCKET,
//       Key: file,
//       Body: file,
//       ACL: "public-read", // Pode ajustar as permissões conforme necessário
//     })
//     .promise();
// };

// module.exports = {
//   enviarArquivo,
// };
