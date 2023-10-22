import firebase from "firebase/app";
import "firebase/storage";

function getDownloadUrls() {
  const storage = firebase.storage();
  const bucket = storage.refFromURL("gs://esp32-10ebe.appspot.com");

  const folderRef = bucket.child("data");

  return folderRef
    .listAll()
    .then((res) => {
      const downloadUrls = [];

      return Promise.all(
        res.items.map((itemRef) => {
          return itemRef.getDownloadURL();
        })
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

export default getDownloadUrls;
