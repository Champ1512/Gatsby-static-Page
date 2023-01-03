import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';


const socialItems=[
    {icon: GitHubIcon, url:""},
    {icon: TwitterIcon, url:""},
    {icon: LinkedInIcon, url:""},

]

export default function Social() {
    return (
       
            <Grid container direction="column" spacing={1}>
                {socialItems.map((item) =><Grid item><IconButton><item.icon /></IconButton> </Grid>
                )}  
           </Grid>
        
    )
}
