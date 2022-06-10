import React,{useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import {Button, Grid, ListItem} from "@mui/material"

interface Student {
  id: number,
  name: string,
  gender: string,
  school: string,
  city: string,
  delete: boolean
}


const StudentPage = () => {

  const [id, setId] = useState(null);
  const [chosenStudent, setChosenStudent] = useState<Student>();

  const navigate = useNavigate();

  useEffect(()=>{
    const chosenId = JSON.parse(localStorage.getItem("studentID") as string).toString();
    setId(chosenId);
  },[])

  useEffect(()=>{
    const tempList: Student[] = JSON.parse(localStorage.getItem("updatedList") as string);
    const currStudent = tempList.find((x) => x.id === id);
    if(currStudent) setChosenStudent(currStudent);
  },[id])

  console.log(id);
  console.log(chosenStudent);
  
  return (
      <div className="container">
          {chosenStudent !== undefined ? (
          <>
            <Grid className="student-data" container spacing={2}>
              <Grid className="current-student-title" item xl={12} justifyContent="center">
                <p>Selected Student</p>
              </Grid>
              <Grid item xs={6} style={{border: "1px solid black"}}>
                <ListItem>ID:</ListItem>
              </Grid>
              <Grid item xs={6} style={{border: "1px solid black"}}>
                <ListItem>{chosenStudent.id}</ListItem>
              </Grid>
              <Grid item xs={6} style={{border: "1px solid black"}}>
                <ListItem>Name:</ListItem>
              </Grid>
              <Grid item xs={6} style={{border: "1px solid black"}}>
                <ListItem>{chosenStudent.name}</ListItem>
              </Grid>
              <Grid item xs={6} style={{border: "1px solid black"}}>
                <ListItem>Gender:</ListItem>
              </Grid>
              <Grid item xs={6} style={{border: "1px solid black"}}>
                <ListItem>{chosenStudent.gender}</ListItem>
              </Grid>
              <Grid item xs={6} style={{border: "1px solid black"}}>
                <ListItem>School:</ListItem>
              </Grid>
              <Grid item xs={6} style={{border: "1px solid black"}}>
                <ListItem>{chosenStudent.school}</ListItem>
              </Grid>
              <Grid item xs={6} style={{border: "1px solid black"}}>
                <ListItem>City:</ListItem>
              </Grid>
              <Grid item xs={6} style={{border: "1px solid black"}}>
                <ListItem>{chosenStudent.city}</ListItem>
              </Grid>
            </Grid>
            <Button variant="contained" color="error" onClick={()=> {navigate(-1)}}>Go Back</Button>
          </>
          ) : (
            <div>
              <p>Sorry, We can't find this student</p>
            </div>
          )}
      </div>
  )
};

export default StudentPage;
