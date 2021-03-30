import React, { useState } from "react";
import Menu from "./Menu";
// import myPhoto from './item-1.jpeg';
import Categories from "./Categories";
import items from "./data";

const categoryList = ['all',...new Set(items.map((item)=> item.category))]
// const mycategoryList= [...categoryList]
function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(categoryList);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

    // setCategories(categoryList)
    // console.log(categoryList)

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        {/* <img src={myPhoto} /> */}
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
