export class Review {
  // region Attributes
  author: number;
  rating: number;
  title: string;
  body: string;
  date: Date;
  review: string;
  // endregion

  // region Default Methods
  constructor(args?) {
    if (args) {
      this.author = args.author;
      this.rating = args.rating;
      this.title = args.title;
      this.body = args.body;
      this.date = args.date;
      this.review = args.review;
    }
  }
  // endregion



}
