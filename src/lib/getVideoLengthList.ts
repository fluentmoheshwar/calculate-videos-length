import { getVideoDurationInSeconds } from "get-video-duration";
import getListOfFile from "./getListOfFile.js";

const getVideoLengthList = async (dir: string, ext: string) => {
  let fileList = getListOfFile(dir, ext, []);
  const videoLengthList = [];

  for await (let video of fileList) {
    const length = await getVideoDurationInSeconds(video);
    videoLengthList.push(length);
  }

  return videoLengthList;
};

export default getVideoLengthList;
