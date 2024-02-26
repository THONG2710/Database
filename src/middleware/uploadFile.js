const path = require("path");
const multer = require("multer");

const firebase = require("firebase/app");
const {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} = require("firebase/storage");
const getAnalytics = require("firebase/analytics");

// config firebase
const firebaseConfig = {
  apiKey: "AIzaSyA_Shl-JGTVIjjQ8yH7XiNyIbyBCgEiwDY",
  authDomain: "gotour-72bca.firebaseapp.com",
  projectId: "gotour-72bca",
  storageBucket: "gotour-72bca.appspot.com",
  messagingSenderId: "151480444132",
  appId: "1:151480444132:web:cd179d70ef95935d77f8f1",
  measurementId: "G-CGRGMJ9FMR",
};

// khoi tao firebase
firebase.initializeApp(firebaseConfig);
// khoi tao storage
const storage = getStorage();

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getStorage } from "firebase/storage";

//===================luu anh vao local===================
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "src/public/img");
//   },
//   filename: function (req, file, cb) {
//     const ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext);
//   },
// });
// const upload = multer({
//   storage: storage,
//   fileFilter: function (req, file, cb) {
//     if (file.mimetype == "image/png" || file.mimetype == "image/jpg") {
//       cb(null, true);
//     } else {
//       console.log("file not support");
//         cb(null, false);
//     }
//   },
// //   limits: {
// //     fileSize: 1024 * 1024 * 2,
// //   },
// });

//===================luu anh vao firebase===================

// tao upload multer middleware de xu li file upload
const uploadFile = multer({
  storage: multer.memoryStorage(),
});

// upload file len firebase
const uploadFileToFirebase = async (folder, file) => {
  // console.log(file, 111);
  // console.log('>>>>>>>>>>>>>>>>>>>>',folder);
  // tao duong dan file tren firebase storage và ten file
  const storageRef = ref(storage, `${folder}/${Date.now()}`);
  // luu kieu file
  const metadata = {
    contentType: file.mimetype,
  };

  // upload file trong bucket storage
  const snapshot = await uploadBytesResumable(
    storageRef,
    file.buffer,
    metadata
  );

  const downloadURL = await getDownloadURL(snapshot.ref);
  // console.log("File successfull uploaded", downloadURL);
  return downloadURL;
};

// xoa file tren firebase
const deleteFileFromFirebase = async (folder, fileName) => {
  const storageRef = ref(storage, `${folder}/${fileName}`);
  // console.log('>>>>>>>>>>>>>>>>>>>>',storageRef);
  await deleteObject(storageRef);
  return true;
};

module.exports = { uploadFile, uploadFileToFirebase, deleteFileFromFirebase };
