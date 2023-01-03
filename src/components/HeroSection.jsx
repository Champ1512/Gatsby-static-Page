import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography  from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Social from './Social';


const useStyles = makeStyles ((theme) => ({
    section:{
        height:"90vh",
        backgroundImage: "url(https://wallpapersmug.com/download/1366x768/2fa40a/starry-sky-night-mountians-5k.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",

    },
    content:{
        height:"50%",

    },
    container:{
        height:"100%"
   
    },
}));

 


export default function HeroSection() {
    const styles = useStyles()
    return (
    
        <Paper className={styles.section}>
            <Container  className={styles.container}   maxWidth="md">
                <Grid     className={styles.content} container alignItems="center"  justifyContent="space-between" > 
                    <Grid item sm={8}>
                        <Typography component="h1" variant="h3" >Hi, my name is Ahmad and im a react developer </Typography></Grid>
                    <Typography variant="h5"> I build multiple websites and add some material design code to them and i become more creative using it overtime </Typography>
                    <Box my={2}>
                    <Button href="mailto:address@email.com" variant="outlined" color="secondary">Get In Touch</Button>
                    </Box>
                    <Grid item ><Social /></Grid>

               </Grid>
                 </Container>
           
        </Paper>
    )
}
