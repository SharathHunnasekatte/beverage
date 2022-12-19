import React from "react";
import Data from "./Data";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Model from "./Model"
import { useState } from "react";
import Spinner from "./Components/Spinner";

function App() {
  const data = Data.filter((item) => (item.rating.average >= 4.5));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [src, setSrc] = useState();

  const source = (item) => {
    setSrc(item)
    handleOpen();
  }
  return (

    <div className="App">
      
      <div className='card'>
        <Grid container justifyContent="space-between" direction="row">
          {data.map((val) => {
            return (

              <Card sx={{ maxWidth: 300 }}
                onClick={() => {source(val.image)}}
              >
                <CardActionArea>
                  <CardMedia
                  width="100%"
                    component="img"
                    height="100%"
                    image={val.image}
                    
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {val.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {val.rating.average}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )
          })}
        </Grid>
      </div>

      <Model src={src} handleClose={handleClose} open={open} />
      
    </div>
  );
}
export default App;
