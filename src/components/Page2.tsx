import {Grid} from "@mui/material";
import CurrentList from "./CurrentList";
import PageButtons from "./PageButtons";

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
  createStudentCard: (item: Student) => JSX.Element | null;
  deleteSelectedElements : () => void;
}

const Page2 = (props: Props) => {
  const {items, createStudentCard, deleteSelectedElements} = props;
  return <div>
      <h1>Organize your student, display only 6 students in a page</h1>
        <div className="header">
        <Grid className="student-container" container spacing={5} maxWidth="900px">
            {items && items.slice(6, 12).map(createStudentCard)}
        </Grid>
        <CurrentList items={items}/>
        </div>
        <PageButtons deleteSelectedElements={deleteSelectedElements} />
  </div>;
};

export default Page2;
