import React from "react";

interface Iuser {
    name: string;
    email?: string;
}
interface Props {
    user: Iuser;
}
const User: React.FC<Props> = ( { user } ) => {
    return(
        <div>
            <strong> Nome:</strong> {user.name}<br />
            <strong> Email:</strong> {user.email || 'Não Possui e-mail'}  <br />
        </div>
    )
}

export default User;