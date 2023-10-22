import React from "react";
import getDownloadUrls from "./storage/downloadimagesfolder";

const ImageFetcher = async () => {
  const images = [];
  const links = [];
  const downloadUrls = await getDownloadUrls();
  for (let i = 0; i < downloadUrls.length; i++) {
    images.push(
      <img
        src={downloadUrls[i]}
        alt="Random image"
        style={{ padding: "10px", width: "45%", display: "inline-block" }}
        key={i}
      />
    );
  }
  return <div>{...images}</div>;
};

export default ImageFetcher;
