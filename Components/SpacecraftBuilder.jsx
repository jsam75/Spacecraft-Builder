import { useState } from 'react'
import { v4 as uuidv4 } from "uuid"

import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";

export default function SpacecraftBuilder () {

    //Section I. State
    const [inventory, setInventory] = useState ([]);

    //Section II. Handlers - all the legal ways inventory is allowed to change
    //the 2 setInventory statements are inside a handler function, so it's not an 
    //"already been declared" issue.  Looks similar to variable declaration, but it's not.
    const handleAddItem = (rawData) => {
  
    const newItem = {
        ...rawData,
        id: uuidv4 (),
        quantity: Number(rawData.quantity)
    };

    //This particular setInventory is set to add items to the top of the list and older ones
    //shift down as it's being added to. (Traveling bottom to top)  Thought it could be UI 
    //friendly to allow user to double check added item without having to scroll down when 
    //list gets long. (this is prepend in word problem language) 

    //Items added traveling top to bottom: [...prev, newItem] (append in word problem language) 
    setInventory (prev => [newItem, ...prev]);
        
    };

    const handleDeleteItem = (id) => {
        setInventory((prev) => prev.filter((item) => item.id !== id));
    }

    //Section III. Props Wiring - (Optional code, but mandatory thinking)
    //This section exists in real world apps, but was not needed for this specific exercise.
    //Wiring can happen as inline JSX (like down below) or when props are 
    //more complicated, abstraction can occur in this section.
    //Use cases: props need shaping/bundling, callbacks need binding or composition,
    //if JSX starts to feel busy with logic, move it up to this section


    //Section IV. Render
    return (
    <div className="app-container">
        <h1>SpacecraftBuilder</h1>
        <ItemForm onAddItem={handleAddItem}/>
        <InventoryDisplay inventory = {inventory} onDeleteItem={handleDeleteItem} />
    </div>
   );
}



/* Notes:
1. The pattern for the flow of the parent component: 
    I. State, 
    II. Handlers (functions that update state),
    III. Props wiring (what you pass down), 
    IV. Render (JSX)
2. Future update could include not disturbing order of items added when you just want to change
   qty. You would need mapping for this:
   setInventory(prev => prev.map(item=> item.id === id ? {...item, quantity: newQty} : item));
*/