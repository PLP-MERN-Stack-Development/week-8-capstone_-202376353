import LeaveRequest from '../models/LeaveRequest.js';

export const applyLeave = async (req, res) => {
  const { type, startDate, endDate, reason } = req.body;

  const leave = await LeaveRequest.create({
    user: req.user._id,
    type,
    startDate,
    endDate,
    reason,
  });

  res.status(201).json(leave);
};

export const getMyLeaves = async (req, res) => {
  const leaves = await LeaveRequest.find({ user: req.user._id });
  res.json(leaves);
};

export const getAllLeaves = async (req, res) => {
  const leaves = await LeaveRequest.find().populate('user', 'name email');
  res.json(leaves);
};

export const updateLeaveStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const leave = await LeaveRequest.findById(id);
  if (!leave) return res.status(404).json({ message: 'Leave not found' });

  leave.status = status;
  await leave.save();
  res.json(leave);
};
