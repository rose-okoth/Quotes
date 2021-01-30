export class Quote {
    // upvote: number;
    // downvote: number;

    showAuthor: boolean;
    showUsername: boolean;

    constructor (
        public id: number,
        public author: string,
        public quote: string,
        public username: string,
        public datePosted: Date,
    ) {
        // this.upvote = 0;
        // this.downvote = 0;

    this.showAuthor = false;
    this.showUsername = false;
    }
}
