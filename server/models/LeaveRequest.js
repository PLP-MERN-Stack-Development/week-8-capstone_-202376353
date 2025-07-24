// LeaveRequest model schema will go here import mongoose from 'mongoose';

const leaveRequestSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: String, // e.g. Sick, Vacation
    startDate: Date,
    endDate: Date,
    reason: String,
    status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  }, { timestamps: true });
  
  export default mongoose.model('LeaveRequest', leaveRequestSchema);
  