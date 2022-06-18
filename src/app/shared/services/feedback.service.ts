import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  feeds: any = []

  constructor() { }

  storeFeedback(data: any) {

    if (localStorage.getItem('feedbacks') === null) {
      this.feeds.push(data);

      localStorage.setItem('feedbacks', JSON.stringify(this.feeds));
    } else {
      const res: any = localStorage.getItem('feedbacks');
      let feeds = JSON.parse(res);
      localStorage.removeItem('feedbacks');

      feeds.push(data);
      localStorage.setItem('feedbacks', JSON.stringify(feeds));
    }

    return {
      status: 201,
      msg: "Flight Added!"
    }
  }

  getFeedbacks() {
    if (localStorage.getItem('feedbacks') === null) {
      return false;
    }

    const res: any = localStorage.getItem('feedbacks');
    let feedbacks = JSON.parse(res);

    return feedbacks;
  }
}
