import getVideoLengthList from "./lib/getVideoLengthList.js";

const calculateVideoLength = async (dir: string, ext: string) => {
  const videoLengthList = await getVideoLengthList(dir, ext)
  let totalSeconds = 0;

  for await (let v of videoLengthList) {
    totalSeconds += v;
  }

  const totalMinutes = totalSeconds / 60;
  const totalHours = totalMinutes / 60;
  const totalVideos = videoLengthList.length;

  const videoLength = {
    seconds: totalSeconds.toFixed(2),
    minutes: totalMinutes.toFixed(2),
    hours: totalHours.toFixed(2),
    videos: totalVideos.toFixed(0),
  };

  return videoLength;
};

export default calculateVideoLength;
