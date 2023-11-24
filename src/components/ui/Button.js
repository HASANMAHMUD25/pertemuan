import styled from "styled-components";


const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  margin: 0.4rem;
  border-radius: 9px;
  color: white;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;


 background: ${function(props){
 if(props.variant === "primary"){
    return "linear-gradient(90deg, rgba(0,212,255,1) 0%, rgba(2,0,36,1) 64%, rgba(9,9,121,1) 87%)"
 }

 else if(props.variant === "secondary"){
    return "linear-gradient(90deg, rgba(2,0,36,1) 62%, rgba(0,212,255,1) 79%, rgba(9,9,121,1) 87%)"
 }

 else {
    return "linear-gradient(90deg, rgba(0,212,255,1) 2%, rgba(10,10,128,1) 10%, rgba(2,0,36,1) 49%, rgba(82,77,158,1) 96%)"
 }

 }};
`

export default Button;