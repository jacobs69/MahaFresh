import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Please provide a phone number'],
      match: [/^[0-9]{10}$/, 'Please provide a valid 10-digit phone number'],
    },
    address: {
      type: String,
      required: [true, 'Please provide a delivery address'],
    },
    pincode: {
      type: String,
      required: [true, 'Please provide a pincode'],
      match: [/^[0-9]{6}$/, 'Please provide a valid 6-digit pincode'],
    },
    product: {
      type: String,
      required: [true, 'Please select a product'],
      enum: ['250g', '500g', '1kg', 'gift'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please provide quantity'],
      min: [1, 'Quantity must be at least 1'],
      max: [50, 'Quantity cannot exceed 50'],
    },
    date: {
      type: Date,
      required: [true, 'Please provide a delivery date'],
    },
    slot: {
      type: String,
      required: [true, 'Please select a delivery slot'],
      enum: ['Morning (8-11 AM)', 'Evening (5-9 PM)'],
    },
    payment: {
      type: String,
      required: [true, 'Please select a payment method'],
      enum: ['UPI', 'Cash on Delivery'],
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ['pending', 'confirmed', 'shipped', 'delivered', 'cancelled'],
      default: 'pending',
    },
    notes: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Order', orderSchema);
