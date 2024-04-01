import {FC, PropsWithChildren} from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Posts "
};
interface IProps extends PropsWithChildren {

}

const PostsPage: FC<IProps> = () => {
    return (
        <div>
            PostsPage
        </div>
    );
};

export default PostsPage;