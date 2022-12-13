import React from "react";
import { UserContext } from "../UserInfoProvider";


export default function useUserInfo()
{
    return React.useContext(UserContext)
}