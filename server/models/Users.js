const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const accountSchema = new Schema({
  account_id: {
    type: String,
    required: true,
  },
  balances: {
    type: Object,
    required: true,
  },
  mask: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  official_name: {
    type: String,
    required: true,
  },
  subtype: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  access_token: {
    type: String,
  },
  transactions: 
    {
      account_id: String,
      account_owner: String,
      amount: Number,
      authorized_date: String,
      authorized_datetime: String,
      category: [String],
      category_id: String,
      check_number: String,
      date: String,
      datetime: String,
      iso_currency_code: String,
      location: {
        address: String,
        city: String,
        country: String,
        lat: Number,
        lon: Number,
        state: String,
        store_number: String,
        zip: String,
      },
      merchant_name: String,
      name: String,
      payment_channel: String,
      payment_meta: {
        by_order_of: String,
        payee: String,
        payer: String,
        payment_method: String,
        payment_processor: String,
        ppd_id: String,
        reason: String,
        reference_number: String,
      },
      pending: Boolean,
      pending_transaction_id: String,
      personal_finance_category: String,
      transaction_code: String,
      transaction_id: String,
      transaction_type: String,
      unofficial_currency_code: String,
    },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;