import firebase from "firebase/app";
import "firebase/storage";

function getDownloadUrls() {
  const storage = firebase.storage();
  const bucket = storage.refFromURL("gs://esp32-10ebe.appspot.com");

  const folderRef = bucket.child("data");

  return folderRef
    .listAll()
    .then((res) => {
      return Promise.all(
        res.items.map((itemRef) => {
          return itemRef.getDownloadURL().then((url) => {
            return url + "?t=" + new Date().getTime();
          });
        })
      );
    })
    .catch((error) => {
      console.error(error);
    });
}

export default getDownloadUrls;
