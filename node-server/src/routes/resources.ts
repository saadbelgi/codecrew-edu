import { Request, Response, Router } from 'express';
import Video from '../models/Video';
import Textbook from '../models/Textbook';

const router = Router();

router.get('/videos', async (req, res, next) => {
  const videos = await Video.find({ grade: 10 })
    .sort({ chapterNo: 'asc', subtopicNo: 'asc' })
    .exec();
  res.json(videos);
});

router.get('/textbooks', async (req, res, next) => {
  const books = await Textbook.find({ grade: 10 })
    .sort({ chapterNo: 'asc' })
    .exec();
  res.json(books);
});

export default router;
