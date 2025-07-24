import { useState } from 'react';
import axios from '../api/axios';
import { useAuth } from '../context/AuthContext';

export default function LeaveForm() {
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/leave/apply', { type, startDate, endDate, reason }, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      alert('Leave applied successfully');
    } catch {
      alert('Error applying leave');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Apply for Leave</h2>
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option>Sick</option>
        <option>Vacation</option>
        <option>Emergency</option>
      </select>
      <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
      <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
      <textarea placeholder="Reason" value={reason} onChange={e => setReason(e.target.value)} />
      <button>Submit</button>
    </form>
  );
}
