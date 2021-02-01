export class Quote {
    splice(index: any, arg1: number) {
      throw new Error('Method not implemented.');
    }
    public upvote: number;
    public downvote: number;

    showAuthor: boolean;
    showUsername: boolean;

    constructor (
        public id: number,
        public author: string,
        public quote: string,
        public username: string,
        public datePosted: Date,
    ) {

    this.upvote = 0;
    this.downvote = 0;

    this.showAuthor = false;
    this.showUsername = false;
    }
}
