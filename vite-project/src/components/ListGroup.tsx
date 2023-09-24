import { Fragment } from "react";
function ListGroup() {
    const items = [
        'paku',
        'salak',
        'nagor',
        'noman',
        'manis'
    ];

    return (
        <Fragment>
            <h1>dhanush</h1>
            <ul className="list-group">
                {items.map(item => (<li key={item} className="list-group-item">{item}</li>))}
            </ul>
        </Fragment>
    );
}

export default ListGroup;