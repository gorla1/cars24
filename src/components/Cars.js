import React from 'react'
import Data from './data.json'
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import {CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    media:{
      height: '50%',
      padding: theme.spacing(2)
    },
    card:{
      height:theme.spacing(40)
  },
  properties:{
    justifyContent:"space-between"
  }
  }));

export default function Cars() {
    const classes = useStyles()
   
  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
            {Data.map((x,index)=>{ 
              return(
                     <Grid item key={index} xs={12} sm={6} md={4}>
                      <Paper className={classes.paper}>
                      <Card className={classes.card}>
                    <CardMedia className={classes.media}
                    image={x.img}
                    title={x.Model}
                    />
                    <CardContent>
                      <Typography variant="subtitle2">
                        {x.Model}
                      </Typography>
                      <Grid container spacing={3} >
                        <Grid item>
                      <Typography variant="h6">
                      {x.price} 
                      </Typography>
                      </Grid>
                      <Grid item>
                      <Typography variant="h6">
                       {x.owner} 
                      </Typography>
                      </Grid>
                      <Grid item>
                      <Typography variant="h6">
                       {x.year}
                      </Typography>
                      </Grid>

                      </Grid>
                      
                    </CardContent>
                    </Card>
                  </Paper>
                    </Grid>
              )
                    
                
            })}
            </Grid>
            </Container>
        </div>
    )
}
