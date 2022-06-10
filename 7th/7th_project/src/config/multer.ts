import multer from "multer";
import multerS3 from "multer-s3";
import config from ".";
import s3 from "./s3Config";
import { request } from "express";

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: config.bucketName,
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: "public-read",
        // metadata: function (req: Express.Request, file: Express.MulterS3.File, cb) {
        //     cb(null, Object.assign({}, request.body));
        // },
        key: function (req: Express.Request, file: Express.MulterS3.File, cb) {
            // key : 파일 이름 정의
            cb(null, `${Date.now()}_${file.originalname}`);
        },
    }),
});

export default upload;