import { Schema, model } from 'mongoose';

type Progress = {
  student: Schema.Types.ObjectId;
  video: Schema.Types.ObjectId;
  num_clicks: number;
  watch_time: number;
  num_replay: number;
  num_tests: number;
  test_score: number;
};

const ProgressSchema = new Schema<Progress>({
  student: { type: Schema.Types.ObjectId, ref: 'Student' },
  video: { type: Schema.Types.ObjectId, ref: 'Video' },
  num_clicks: {
    type: Number,
    default: 0,
  },
  watch_time: {
    type: Number,
    default: 0,
  },
  num_replay: {
    type: Number,
    default: 0,
  },
  num_tests: {
    type: Number,
    default: 0,
  },
  test_score: {
    type: Number,
    default: 0,
  },
});

const Progress = model<Progress>('Progress', ProgressSchema);
export default Progress;
