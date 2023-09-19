import { Pipeline, pipeline } from "@xenova/transformers";

export class Whisper {
  static task = "automatic-speech-recognition";
  static model = "Xenova/whisper-large-v2";
  static instance: Promise<Pipeline> | null = null;

  static async getInstance(progressCallback?: Function | undefined) {
    if (this.instance === null) {
      this.instance = pipeline(this.task, this.model, {
        progress_callback: progressCallback,
      });
    }
    return this.instance;
  }
}
