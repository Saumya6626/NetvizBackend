import { makeStyles } from '@material-ui/core';
import img from '../../assets/wallpaper.jpg';

const useStyles = makeStyles((theme) => ({
    home: {
        height: "100%",
        backgroundImage: `url(https://i.pinimg.com/originals/4f/8d/78/4f8d78f0571f3a581f09837b007ac468.jpg) `,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
          display: "flex",
          flexDirection: "column"
      },
}));

export default useStyles