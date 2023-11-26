import Maching from "./Matching";
import Notmatching from "./Notmatching";

const SlotM = (Props) =>{
    let {x,y,z} = Props;
    return(
    ((x === y) && (y === z)) ? Maching(Props) : Notmatching(Props)
    )}

export default SlotM;