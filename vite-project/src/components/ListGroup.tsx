import { Fragment } from "react";
import { useState } from "react";


interface Props{
    items:string[];
    heading:string;
}

function ListGroup({items,heading}:Props) {
   
    //const click=(i:any )=>{
    //    s=i;
    //};
    
    const [s,ss] =useState(-1)
    
    return (
        <Fragment>
            <h1>{heading}</h1>
            <ul className="list-group">
                {items.map((item,index) => (<li key={item} className={s===index? 'list-group-item active':'list-group-item'} onClick={()=> {ss(index);}}>{item}</li>))}
            </ul>
        </Fragment>
    );
}

export default ListGroup;