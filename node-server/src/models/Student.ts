import { Schema, model } from 'mongoose';

type Student = {
  user: Schema.Types.ObjectId;
  board: string;
  grade: number;
  medium: string;
};

const UserSchema = new Schema<Student>({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  board: {
    type: String,
    required: true,
    enum: ['CBSE', 'ICSE'],
  },
  grade: {
    type: Number,
    required: true,
    min: 1,
    max: 12,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value',
    },
  },
  medium: {
    type: String,
    required: true,
    enum: ['English', 'Hindi'],
  },
});

const Student = model<Student>('Student', UserSchema);
export default Student;
