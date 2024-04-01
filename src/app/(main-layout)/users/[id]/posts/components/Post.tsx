import {FC, PropsWithChildren} from 'react';
import {IPost} from "@/interfaces/postInterface";

interface IProps extends PropsWithChildren {
post: IPost
}

const Post: FC<IProps> = ({post}) => {
    const {id,userId, title , body} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {Post};