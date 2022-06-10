import {Grid, ListItem} from "@mui/material"

interface Student {
  id: number,
  name: string,
  gender: string,
  school: string,
  city: string,
  delete: boolean
}

type Props = {
  items: Student[];
}

const CurrentList = (props: Props) => {
  const {items} = props;
  return (
    <>
      <h2>Current Students {items.length}</h2>
          <Grid className="student-list" container spacing={2}>
          {items === null ? null : items.map(item=>{
            return (
              <div key={item.id} className="current-students">
                <Grid className='student-id' item xs={8}>
                  <ListItem>student {item.id}</ListItem>
                </Grid>
                <Grid className='student-name' item xs={8}>
                  <ListItem>{item.name}</ListItem>
                </Grid>        
              </div> 
            )
          })}
          </Grid>
    </>
  )
}

export default CurrentList