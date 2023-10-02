import { ReactNode } from "react";
import { useState } from "react";
interface Props{
    children: ReactNode;
}
const Alert = ({children}:Props) => {
  useState(false)

  return (
    <div className="alert alert-primary alert-dismissible">{children}
    <button type="button" className="btn-close" data-bs-dissmiss=""></button></div>
  )
}

export default Alert