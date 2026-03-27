import mongoose from 'mongoose'
import { Counter } from './idCounter'

const QueriesSchema = new mongoose.Schema({
  _id: {
    type: String
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

QueriesSchema.pre('save', async function () {
  if (this._id) return;

  const counter = await Counter.findByIdAndUpdate(
    'queries_id',
    { $inc: { seq: 1 } },
    { returnDocument: 'after', upsert: true }
  );

  this._id = `QRY${String(counter.seq).padStart(4, '0')}`;
})

// Remove redundant index call as MongoDB does this by default
// QueriesSchema.index({ _id: 1 }, { unique: true })

export default mongoose.models.Queries || mongoose.model('Queries', QueriesSchema)