import {Btn}  from "../Button";
import { Input } from "../Input";

export function TableBody({userData, removeUser}) {
    return (
        <tbody>
            {userData.map((user, index) => {
                return (
                    <tr key={index}>
                        <td><Input type="checkbox"/></td>
                        <td>{user.company}</td>
                        <td>{user.name}</td>
                        <td>{user.address}</td>
                        <td><Btn index={index} removeUser={removeUser} children={"Delete"}/></td>
                    </tr>
                );
            })
            }
        </tbody>
    );
}