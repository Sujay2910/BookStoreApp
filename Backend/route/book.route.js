import express from 'express';
import { getBook } from '../controller/book.controller.js';

const router = express.Router();

// Get book by ID
router.get('/', getBook);

export default router;