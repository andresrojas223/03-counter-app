import reactDom from "react-dom"
// import PrimerApp from "./primeraApp"
import CounterApp from "./counterApp"
import './index.css'



const  divRoot= document.querySelector("#root")


console.log(divRoot)


reactDom.render( <CounterApp value={0} />, divRoot)