import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FeedbackService } from 'src/app/shared/services/feedback.service';

@Component({
  selector: 'app-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.css']
})
export class FeedbacksComponent implements OnInit {
  createFlightModal: boolean = false;
  feedbackForm: FormGroup;
  feeds: any = []

  constructor(private feedbackService: FeedbackService) {
    this.feedbackForm = new FormGroup({
      name: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    });
   }

  ngOnInit(): void {
    this.getFeedbacks()
  }

  getFeedbacks() {
    this.feeds = this.feedbackService.getFeedbacks()
  }

  openCloseModal() {
    this.createFlightModal = !this.createFlightModal;
  }

  onSubmit() {
    if (this.feedbackForm.status == 'INVALID') {
      return;
    }

    this.feedbackService.storeFeedback(this.feedbackForm.value)
    this.openCloseModal()
    this.getFeedbacks()
  }

}
