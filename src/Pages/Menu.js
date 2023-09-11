import React from "react";

import Navbar from '../Components/Navbar';
import { MenuList } from "../Helper/MenuList";
import MenuItem from "../Components/MenuItem";
import '../Styles/Menu.css'


function Menu(){
    return (
        <>
         
             <Navbar />
             <div className="menu">
             <div>
             <h1 className="menutitle">Our Menu</h1>
             </div>
             <div className="menulist">
                 {MenuList.map((menuitem,key) => {
                  return <MenuItem 
                  key={key}
                  image={menuitem.image} 
                  name={menuitem.name} 
                  price={menuitem.price}/>
                 }
                 )}
             </div>
             </div>
        
        </>
    )
}

export default Menu;