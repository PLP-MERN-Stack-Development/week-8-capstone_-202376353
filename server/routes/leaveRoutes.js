import express from 'express';
import {
  applyLeave,
  getMyLeaves,
  getAllLeaves,
  updateLeaveStatus
} from '../controllers/leaveController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/apply', protect, applyLeave);
router.get('/my', protect, getMyLeaves);
router.get('/all', protect, getAllLeaves);       // admin only (can restrict later)
router.patch('/:id', protect, updateLeaveStatus); // admin only

export default router;
