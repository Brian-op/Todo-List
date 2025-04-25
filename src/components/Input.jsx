const Input = ({type, id, placeholder, className, required = false }) => {
  return (
   <input 
     placeholder={placeholder}
     type={type} 
     id={id} 
     className={className}
     required = {required}
   />
  );
}

export default Input