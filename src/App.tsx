import React,{useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import StudentCard from './components/StudentCard';
import StudentPage from './components/StudentPage';

const ITEMS_KEY = "studentsList";
const NEW_LIST_KEY = "updatedList";

const App: React.FC = () => {

  const [items, setItems] = useState<Student[]>([]);
  const [selectedList, setSelectedList] = useState<string[]>([]);
  
  useEffect(() => {
    const temp = JSON.parse(localStorage.getItem(ITEMS_KEY) as string);
    if(temp === null){
    fetchItems();
    }
    if(temp !== null){
      localStorageSet();
    }
  }, []);

  interface Student {
    id: number,
    name: string,
    gender: string,
    school: string,
    city: string,
    delete: boolean
  }

  const fetchItems = async () => {
    const data = await fetch("https://run.mocky.io/v3/72203900-263c-4321-a0c7-92b279233250");
    const information = await data.json();
    localStorage.setItem(ITEMS_KEY, JSON.stringify(information));
    localStorage.setItem(NEW_LIST_KEY, JSON.stringify(information));
    setItems(information);
  };

  function localStorageSet(){
    const storeItems = JSON.parse(localStorage.getItem(NEW_LIST_KEY) as string);
    setItems(storeItems);
  }

  function createStudentCard(item: Student){
    return(
    <StudentCard 
      key={item.id}
      id={item.id}
      name={item.name}
      gender={item.gender}
      school={item.school}
      city={item.city}
      deleteStatus={item.delete}
      updateDeleteStatus={updateDeleteStatus}
    />
    )
  }


   function updateDeleteStatus(name:string){
    console.log(name);
    if(selectedList.find(x => x === name)){
      console.log("you unchecked this item so we delete it from the list");
      const index = selectedList.findIndex(x => x === name);
      selectedList.splice(index, 1);
      setSelectedList(prevItems => [...prevItems])
    }else{
      setSelectedList(prevItems => [...prevItems, name])
    }
    console.log("selectedList: ", selectedList);  
  }
  
  function deleteSelectedElements(){
    selectedList.map(name => {
      const index = items.findIndex(x => x.name === name);
      items.splice(index,1);  
      return null;
    })
    console.log(items);
    localStorage.setItem(NEW_LIST_KEY, JSON.stringify(items));
    window.location.reload();
  }

  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage items={items} createStudentCard={createStudentCard} deleteSelectedElements={deleteSelectedElements} />}/>
          <Route path="/page2" element={<Page2 items={items} createStudentCard={createStudentCard} deleteSelectedElements={deleteSelectedElements}/>} />
          <Route path="/page3" element={<Page3 items={items} createStudentCard={createStudentCard} deleteSelectedElements={deleteSelectedElements}/>} />
          <Route path="/page4" element={<Page4 items={items} createStudentCard={createStudentCard} deleteSelectedElements={deleteSelectedElements}/>} />
          <Route path="/studentPage" element={<StudentPage />} />
        </Routes>
        
    </Router>
  );
}

export default App;
