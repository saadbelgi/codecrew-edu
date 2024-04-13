import { Schema, model } from 'mongoose';

type User = {
  email: string;
  name: string;
  password: string;
  role: string;
};

const UserSchema = new Schema<User>({
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Teacher', 'Student'],
    required: true,
  },
});

const User = model<User>('User', UserSchema);
export default User;
