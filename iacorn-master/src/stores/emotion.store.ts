import { observable, action } from "mobx-angular";
import { Injectable } from "@angular/core";

interface Emotions {
  angry: number;
  disgust: number;
  fear: number;
  happy: number;
  sad: number;
  surprise: number;
  neutral: number;
}

@Injectable()
export class EmotionStore {
  @observable emotions: Emotions = {
    angry: null,
    disgust: null,
    fear: null,
    happy: null,
    sad: null,
    surprise: null,
    neutral: null
  };
  @observable mainEmotion: string = "neutral";
  @action
  changeEmotion(emotions: Emotions) {
    this.emotions = emotions;
    let mainEmotion = "angry";
    let emotion;
    for (emotion in Object.keys(this.emotions)) {
      if (this.emotions[mainEmotion] < this.emotions[emotion]) {
        mainEmotion = emotion;
      }
    }
    this.mainEmotion = mainEmotion;
  }
}
