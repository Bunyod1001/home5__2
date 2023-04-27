import { Input } from "../Input";
import {Btn} from "../Button";
import "./style.css"

export function Form({userData, setData}){
    const handleSubmit = (evt) => {
        evt.preventDefault();
        let {userComp, userName, userAddress} = evt.target.elements;

        let newObj = {
            id: userData.length + 1,
            company:userComp.value,
            name: userName.value,
            address: userAddress.value,
        };
        setData([newObj, ...userData]);
        userComp.value = null;
        userName.value = null;
        userAddress.value = null;

        // console.log( userName.value, userAddress.value);
    };
    return( 
    <form className="formStyle" onSubmit={handleSubmit}>
        <Input placeholder={"Compane Name..."} name={"userComp"} required={true}/> 
        <Input placeholder={"User Name..."} name={"userName"} required={true} /> 
        <Input placeholder={"User Address..."} name={"userAddress"} />
        <Btn type="submit">Submit</Btn> 
    </form>
    );
}