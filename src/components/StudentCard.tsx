import { useNavigate } from "react-router-dom";
import {
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Typography,
  } from "@mui/material";

  type CardProps= {
      id: number,
      name: string,
      gender: string,
      school: string,
      city: string,
      deleteStatus: boolean,
      updateDeleteStatus: (id:string) => void;
  }

const StudentCard = (props: CardProps) => {
    const {id, name, gender, school, city, updateDeleteStatus} = props;

    const navigate = useNavigate();

    function setStudentId(){
        localStorage.setItem("studentID", String(id));
        navigate("/studentPage")
    }

  return (
    <Grid item maxWidth="300px">
        <Card>
        <CardActionArea onClick={setStudentId}>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name} 
            </Typography>  
            <Typography gutterBottom> {gender}</Typography>
            <Typography gutterBottom> {school}</Typography>
            <Typography gutterBottom> {city}</Typography>
            <hr/>
          </CardContent>
          </CardActionArea>
          <div className="delete-section">
              <input type="checkbox" id="delete-checkbox" name="delete" onChange={()=>updateDeleteStatus(name)}/>
              <label htmlFor='delete-checkbox'>delete</label>
            </div>
        </Card>
    </Grid>
  )
};

export default StudentCard;
