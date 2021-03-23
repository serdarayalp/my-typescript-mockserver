interface Post {
    id: number;
    title: string;
    author: string;
}

interface Comment {
    id: number;
    body: string;
    postId: number;
}

interface DB {
    posts: Post[];
    comments: Comment[];
}

export const db: DB = {
    posts: [
        {
            id: 1,
            title: 'Wie setzte ich einen Mock-Server mit json-server auf',
            author: 'Felix M.'
        }
    ],
    comments: [
        {
            id: 1,
            body: 'wow! toll!',
            postId: 1
        }
    ]
};