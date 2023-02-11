import React from 'react'
import './Todo.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Todo = () => {
  return (
    <div className='Todo'>
        <Box sx={{ width: 300,height: '100%'}}>
       <Card  style={{ textAlign: 'center' }} >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Todo
        </Typography>
        <Typography variant="h5" component="div">
         
        </Typography>
       
      </CardContent>
      <CardActions>
        <Button size="small"  >Submit</Button>
      </CardActions>
    </Card>
</Box>
    </div>
  )
}

export default Todo
