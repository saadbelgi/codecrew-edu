import { Schema, model } from 'mongoose';

type Video = {
  grade: number;
  subject: string;
  chapterNo: number;
  title: string;
  language: string;
  subtopicNo: number;
  subtopic: string;
  url: string;
};

const VideoSchema = new Schema<Video>({
  grade: {
    type: Number,
    required: true,
    min: 1,
    max: 12,
  },
  subject: {
    type: String,
    required: true,
  },
  chapterNo: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
  subtopicNo: {
    type: Number,
    required: true,
  },
  subtopic: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Video = model<Video>('Video', VideoSchema, 'videos');
export default Video;
