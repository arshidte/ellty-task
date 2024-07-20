import { useState } from "react";
import "./App.css";
import ListItem from "./components/ListItem";

function App() {
  const [checkboxes, setCheckboxes] = useState({
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  });

  const handleAllPagesChange = () => {
    const newValue = !checkboxes.allPages;
    setCheckboxes({
      allPages: newValue,
      page1: newValue,
      page2: newValue,
      page3: newValue,
      page4: newValue,
    });
  };

  const handleCheckboxChange = (e: any) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => {
      const newCheckboxes = { ...prev, [name]: checked };
      const allChecked =
        newCheckboxes.page1 &&
        newCheckboxes.page2 &&
        newCheckboxes.page3 &&
        newCheckboxes.page4;
      return { ...newCheckboxes, allPages: allChecked };
    });
  };

  return (
    <main className="app-main">
      <div>
        <ListItem
          title={"All Pages"}
          name="allPages"
          checked={checkboxes.allPages}
          onChange={handleAllPagesChange}
        />
        <div className="hr-line"></div>
        <ListItem
          title={"Page 1"}
          name="page1"
          checked={checkboxes.page1}
          onChange={handleCheckboxChange}
        />
        <ListItem
          title={"Page 2"}
          name="page2"
          checked={checkboxes.page2}
          onChange={handleCheckboxChange}
        />
        <ListItem
          title={"Page 3"}
          name="page3"
          checked={checkboxes.page3}
          onChange={handleCheckboxChange}
        />
        <ListItem
          title={"Page 4"}
          name="page4"
          checked={checkboxes.page4}
          onChange={handleCheckboxChange}
        />
        <div className="hr-line"></div>
        <button className="custom-btn">Done</button>
      </div>
    </main>
  );
}

export default App;
