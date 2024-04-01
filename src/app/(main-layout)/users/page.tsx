import {FC, PropsWithChildren} from 'react';
import {userService} from "@/services/userService";
import {Users} from "@/app/(main-layout)/users/components/Users";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Users"
};
interface IProps extends PropsWithChildren {

}

const UsersPage: FC<IProps> = async () => {
    const {data} = await userService.getAll();
    return (
        <div>
            <Users users={data}/>
        </div>
    );
};

export default UsersPage;