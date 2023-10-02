interface Props{
    children:string;
    onclik:()=> void;
    colour?:'primary'|'secondary'|'danger';
}
const Button = ({children,onclik,colour="primary"}:Props) => {
  return (
    <>
    <button type="button" className={"btn btn-"+colour} onClick={onclik}>{children}</button>
    </>
  )
}

export default Button