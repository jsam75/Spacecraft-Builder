export default function ItemAction ( {id, onDeleteItem }) {
    const handleDelete = () => {
        onDeleteItem(id);
    }

    return (
        <button onClick={handleDelete}>
           Delete
        </button>
    );
}

/*Notes:
1. Event handler could've been written as inline JSX. I decided for my own personal rule
   of thumb, if anything in JSX goes beyond {callback}, then separate it out.
     JSX inline would've been: onClick={() => onDeleteItem(id)}
*/