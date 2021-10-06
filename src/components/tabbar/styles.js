import { makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme) => ({
    demo2: {
        display: "flex",
        flexDirection: "column",
      },
      
      
      tabpanels: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center"        
      },

      tabPanel: {
        width: "80%",
        margin: "0 auto",
        [theme.breakpoints.down('xs')]: {
          width: "100%",
        },        
      },
}))

export default useStyles




