export default function ItemCard ( {name, quantity, purpose} ) {

    return (
        <div>
            <p><strong>Name:</strong>{name}</p>
            <p><strong>Quantity:</strong>{quantity}</p>
            <p><strong>Purpose:</strong>{purpose}</p>
        </div>
    );
}

/*Notes:
1. This is for display only. No state or logic needed.
*/