import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";

export default function InventoryDisplay ({ inventory, onDeleteItem }) {
    if (inventory.length === 0) {
     return  <p>No items yet</p>;
    }

 
    return (
    <div>
        <h2>InventoryDisplay</h2>
        
        {inventory.map((item) => (
            <div key={item.id} className="inventory-item">
              <ItemCard 
                name={item.name}
                quantity={item.quantity}
                purpose={item.purpose}
                />
              <ItemAction id={item.id} onDeleteItem={onDeleteItem} />
            </div>
        ))}
             
    </div>
   );
}

/* Notes:
1. key is on the outer <div> inside map
2. ItemCard gets whole item bc display needs it.
3. ItemAction only gets id + callback bc it's the minimum needed to delete.
*/