import { Pipeline, pipeline } from "@xenova/transformers";

export class M2MModel {
  static task = "translation";
  static model = "Xenova/m2m100_418M";
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
