import { Schema, model } from 'mongoose';

type Textbook = {
  grade: number;
  subject: string;
  chapterNo: number;
  title: string;
  language: string;
  url: string;
};

const TextbookSchema = new Schema<Textbook>({
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
  url: {
    type: String,
    required: true,
  },
});

const Textbook = model<Textbook>('Textbook', TextbookSchema, 'textbooks');
export default Textbook;
