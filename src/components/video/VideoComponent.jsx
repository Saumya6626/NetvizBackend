import { useEffect } from "react";
import useStyles from "./styles";

const VideoComponent = () => {
  //https://player.vimeo.com/external/530747374.hd.mp4?s=03294b6eaf330d76ce27ee9eb1d0a9441a30a307&profile_id=172&oauth2_token_id=57447761

  const classes = useStyles();

  /**
 * 
  let videos = new Array(
    "https://player.vimeo.com/external/530747374.hd.mp4?s=03294b6eaf330d76ce27ee9eb1d0a9441a30a307&profile_id=172&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/473861889.sd.mp4?s=3d04079edbfff30af1e4c04b9b0a3790b10ac349&profile_id=139&oauth2_token_id=57447761",
    "https://player.vimeo.com/external/504613102.sd.mp4?s=470fc70435c6fac3da6881918c59f3b92f02bdb4&profile_id=165&oauth2_token_id=57447761"
  );
 * 
 *   function selectVideo() {
    let randomNum = Math.floor(Math.random() * videos.length);

    let src = videos[randomNum];

    return src;
  };

  useEffect(() => {
    selectVideo()
  })
 */

  return (
    <div className={classes.videoComponent}>
      <video
        className={classes.videoPlayer}
        autoPlay
        loop
        src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/r6uQGb9/videoblocks-oyunuma-lake-near-noboribetsu-onsen-famous-city-in-hokkaido-japan-asia-japanese-city-famous-for-hot-springs-geothermal-activity-and-onsen_spcgbqw2s__6450230069c1ca93743f54c01050a327__P360.mp4"
      ></video>
    </div>
  );
};

export default VideoComponent;
