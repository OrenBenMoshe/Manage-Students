import { useNavigate } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";

type Props = {
    deleteSelectedElements : () => void;
}

const PageButtons = (props: Props) => {
    const {deleteSelectedElements} = props;
    const navigate = useNavigate();
  return (
    <div className="controller">
          <Button className='delete' variant="contained" color="error"
              onClick={()=>deleteSelectedElements()}
              >Delete</Button>        
          <ButtonGroup className='btn-pages' variant="contained" aria-label="outlined primary button group">
              <Button onClick={()=> navigate("/")}>1</Button>
              <Button onClick={()=> navigate("/page2")}>2</Button>
              <Button onClick={()=> navigate("/page3")}>3</Button>
              <Button onClick={()=> navigate("/page4")}>4</Button>
          </ButtonGroup>
        </div>   
  )
}

export default PageButtons