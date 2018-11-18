import { Injectable } from "@angular/core";

import { ConsumerComment } from "../../models";

@Injectable()
export class ConsumerCommentListProvider {
  consumerComments: ConsumerComment[] = [];

  constructor() {
    let consumerComment: ConsumerComment = {
      consumerIconLink:
        "https://lh3.googleusercontent.com/Vv1y1bF6jmLII0qq2MSnGtfHxr-4l9gpt5pSk5MrhZ2wPQvvAoAuRxzUMRQLh3t9BLQ3DGQVRkylbhr-itta_F9qaSz8MqpPrOrxWdNW=s500-c",
      consumerAccountNumber: "60******9",
      date: Date.now(),
      rate: 4,
      content: "好吃极了",
      merchantReply: "谢谢！",
      imageLink:
        "https://lh3.googleusercontent.com/_xZbBBbPARwt5QEjNAf5D6mV96yRgciUVHhfJY7uXTCtPalf_KErscfNqr9iE65krue47JUCIsN09J43AinFUxcjyqy8HO6QwSxpV6xY=s1024-c"
    };
    for (let i = 0; i < 10; i++) {
      this.consumerComments.push(consumerComment);
    }
  }

  query() {
    return this.consumerComments;
  }
}
