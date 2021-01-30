export class Quote {
    // upvote: number;
    // downvote: number;

    showAuthor: boolean;
    showUsername: boolean;

    constructor (
        public author: string,
        public quote: string,
        public username: string,
    ) {
        // this.upvote = 0;
        // this.downvote = 0;

    this.showAuthor = false;
    this.showUsername = false;
    }
}
