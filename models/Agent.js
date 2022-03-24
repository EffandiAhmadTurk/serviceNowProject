const mongoose = require('mongoose');

const ServiceArea = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: null,
    },
    slug: {
      type: String,
      required: true,
      default: null,
    },
    type: {
      type: String,
      required: true,
      default: null,
    },
    averageDaysOnMarket: {
      type: Number,
      required: false,
      default: null,
    },
    averageListPrice: {
      type: Number,
      required: false,
      default: null,
    },
    averageClosePrice: {
      type: Number,
      required: false,
      default: null,
    },
    closeListPriceRatio: {
      type: Number,
      required: false,
      default: null,
    },
    totalClosedSales: {
      type: Number,
      required: false,
      default: null,
    },
  },
  { _id: false }
);

const AgentSchema = new mongoose.Schema({
  mlsId: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: false,
    default: null,
  },
  email: {
    type: String,
    required: false,
    default: null,
  },
  url: {
    type: String,
    required: false,
    default: null,
  },
  officeMlsId: {
    type: String,
    required: true,
  },
  officeName: {
    type: String,
    required: true,
  },
  officePhone: {
    type: String,
    required: false,
    default: null,
  },
  officeEmail: {
    type: String,
    required: false,
    default: null,
  },
  officeUrl: {
    type: String,
    required: false,
    default: null,
  },
  agentKey: {
    type: String,
    required: true,
  },
  agentKeyNumeric: {
    type: Number,
    required: true,
  },
  stateLicense: {
    type: String,
    required: false,
    default: null,
  },
  serviceAreas: [ServiceArea],

  averageDaysOnMarket: {
    type: Number,
    required: false,
    default: null,
  },
  averageListPrice: {
    type: Number,
    required: false,
    default: null,
  },
  averageClosePrice: {
    type: Number,
    required: false,
    default: null,
  },
  closeListPriceRatio: {
    type: Number,
    required: false,
    default: null,
  },
  totalClosedSales: {
    type: Number,
    required: false,
    default: null,
  },
});

module.exports = mongoose.models.Agent || mongoose.model('Agent', AgentSchema);
