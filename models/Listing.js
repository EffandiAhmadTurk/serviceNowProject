const mongoose = require('mongoose');
const GeoJSON = require('mongoose-geojson-schema');
const mongoosePaginate = require('mongoose-paginate-v2');

require('./Image');

const AddressSchema = new mongoose.Schema(
  {
    full: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    unit: {
      type: String,
      required: false,
      default: null,
    },
    city: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    county: {
      type: String,
      required: false,
      default: null,
    },
    subdivision: {
      type: String,
      required: false,
      default: null,
    },
    state: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const SchoolsSchema = new mongoose.Schema(
  {
    elementary: {
      type: String,
      required: false,
      default: null,
    },
    middle: {
      type: String,
      required: false,
      default: null,
    },
    high: {
      type: String,
      required: false,
      default: null,
    },
  },
  { _id: false }
);

const ListingAgentSchema = new mongoose.Schema(
  {
    mlsId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
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
  },
  { _id: false }
);

const BuyersAgentSchema = new mongoose.Schema(
  {
    mlsId: {
      type: String,
      required: false,
      default: null,
    },
    firstName: {
      type: String,
      required: false,
      default: null,
    },
    lastName: {
      type: String,
      required: false,
      default: null,
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
      required: false,
      default: null,
    },
    officeName: {
      type: String,
      required: false,
      default: null,
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
      required: false,
      default: null,
    },
    agentKeyNumeric: {
      type: Number,
      required: false,
      default: null,
    },
    stateLicense: {
      type: String,
      required: false,
      default: null,
    },
  },
  { _id: false }
);

const PointsOfInterestSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: false,
      default: null,
    },
  },
  { _id: false }
);

const ListingSchema = new mongoose.Schema({
  mlsId: {
    type: String,
    required: true,
    unique: true,
  },
  path: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
  },
  lastUpdateDateTime: {
    type: String,
    required: true,
  },
  daysOnMarket: {
    type: Number,
    required: false,
    default: null,
  },
  onMarketDateTime: {
    type: Date,
    required: false,
    default: null,
  },
  pendingDateTime: {
    type: Date,
    required: false,
    default: null,
  },
  offMarketDateTime: {
    type: Date,
    required: false,
    default: null,
  },
  closeDate: {
    type: Date,
    required: false,
    default: null,
  },
  address: AddressSchema,
  listPrice: {
    type: Number,
    required: false,
    default: null,
  },
  originalListPrice: {
    type: Number,
    required: false,
    default: null,
  },
  previousListPrice: {
    type: Number,
    required: false,
    default: null,
  },
  closePrice: {
    type: Number,
    required: false,
    default: null,
  },
  beds: {
    type: Number,
    required: false,
    default: null,
  },
  mainLevelBeds: {
    type: Number,
    required: false,
    default: null,
  },
  interiorFeatures: {
    type: String,
    required: false,
    default: null,
  },
  exteriorFeatures: {
    type: String,
    required: false,
    default: null,
  },
  diningRoomDimensions: {
    type: String,
    required: false,
    default: null,
  },
  diningRoomFeatures: {
    type: String,
    required: false,
    default: null,
  },
  livingRoomFeatures: {
    type: String,
    required: false,
    default: null,
  },
  livingRoomDimensions: {
    type: String,
    required: false,
    default: null,
  },
  bonusRoomDimensions: {
    type: String,
    required: false,
    default: null,
  },
  bonusRoomFeatures: {
    type: String,
    required: false,
    default: null,
  },
  denFeatures: {
    type: String,
    required: false,
    default: null,
  },
  denDimensions: {
    type: String,
    required: false,
    default: null,
  },
  kitchenDimensions: {
    type: String,
    required: false,
    default: null,
  },
  bed1Dimensions: {
    type: String,
    required: false,
    default: null,
  },
  bed1Features: {
    type: String,
    required: false,
    default: null,
  },
  bed2Dimensions: {
    type: String,
    required: false,
    default: null,
  },
  bed2Features: {
    type: String,
    required: false,
    default: null,
  },
  bed3Dimensions: {
    type: String,
    required: false,
    default: null,
  },
  bed3Features: {
    type: String,
    required: false,
    default: null,
  },
  bed4Dimensions: {
    type: String,
    required: false,
    default: null,
  },
  bed4Features: {
    type: String,
    required: false,
    default: null,
  },
  bed5Dimensions: {
    type: String,
    required: false,
    default: null,
  },
  bed5Features: {
    type: String,
    required: false,
    default: null,
  },
  bathsFull: {
    type: Number,
    required: false,
    default: null,
  },
  bathsHalf: {
    type: Number,
    required: false,
    default: null,
  },
  bathsTotal: {
    type: Number,
    required: false,
    default: null,
  },
  heating: {
    type: String,
    required: false,
    default: null,
  },
  hasHeating: {
    type: Boolean,
    required: false,
    default: null,
  },
  cooling: {
    type: String,
    required: false,
    default: null,
  },
  hasCooling: {
    type: Boolean,
    required: false,
    default: null,
  },
  hasFirePlace: {
    type: Boolean,
    required: false,
    default: null,
  },
  firePlacesTotal: {
    type: Number,
    required: false,
    default: null,
  },
  garageSpaces: {
    type: Number,
    required: false,
    default: null,
  },
  hasGarage: {
    type: Boolean,
    required: false,
    default: null,
  },
  coveredSpaces: {
    type: Number,
    required: false,
    default: null,
  },
  parkingFeatures: {
    type: String,
    required: false,
    default: null,
  },
  openParkingSpaces: {
    type: Number,
    required: false,
    default: null,
  },
  totalParking: {
    type: Number,
    required: false,
    default: null,
  },
  sewer: {
    type: String,
    required: false,
    default: null,
  },
  waterSource: {
    type: String,
    required: false,
    default: null,
  },
  yearBuilt: {
    type: Number,
    required: false,
    default: null,
  },
  stories: {
    type: Number,
    required: false,
    default: null,
  },
  propertyType: {
    type: String,
    required: true,
  },
  propertySubType: {
    type: String,
    required: false,
    default: null,
  },
  description: {
    type: String,
    required: false,
    default: null,
  },
  livingAreaSF: {
    type: Number,
    required: false,
    default: null,
  },
  buildingSizeSF: {
    type: Number,
    required: false,
    default: null,
  },
  lotSizeAC: {
    type: Number,
    required: false,
    default: null,
  },
  lotSizeDimensions: {
    type: String,
    required: false,
    default: null,
  },
  lotSizeSource: {
    type: String,
    required: false,
    default: null,
  },
  schools: SchoolsSchema,
  listingAgent: ListingAgentSchema,
  buyerAgent: BuyersAgentSchema,
  geometry: {
    type: mongoose.Schema.Types.Point,
    default: null,
    required: false,
  },
  lat: {
    type: Number,
    default: null,
    required: false,
  },
  lng: {
    type: Number,
    default: null,
    required: false,
  },
  pointsOfInterest: [PointsOfInterestSchema],
  annualTaxAmount: {
    type: Number,
    required: true,
  },
  taxLot: {
    type: String,
    required: false,
    default: null,
  },
  parcelNumber: {
    type: String,
    required: false,
    default: null,
  },
  isSeniorCommunity: {
    type: Boolean,
    required: false,
    default: null,
  },
  isWaterFront: {
    type: Boolean,
    required: false,
    default: null,
  },
  poolFeatures: {
    type: String,
    required: false,
    default: null,
  },
  hasPool: {
    type: Boolean,
    required: false,
    default: null,
  },
  hasAttachedGarage: {
    type: Boolean,
    required: false,
    default: null,
  },
  levels: {
    type: String,
    required: false,
    default: null,
  },
  basement: {
    type: String,
    required: false,
    default: null,
  },
  isNewConstruction: {
    type: Boolean,
    required: false,
    default: null,
  },
  hasCarport: {
    type: Boolean,
    required: false,
    default: null,
  },
  associationFee1: {
    type: Number,
    required: false,
    default: null,
  },
  associationFee2: {
    type: Number,
    required: false,
    default: null,
  },
  association1Frequency: {
    type: String,
    required: false,
    default: null,
  },
  association2Frequency: {
    type: String,
    required: false,
    default: null,
  },
  associationFeeIncludes: {
    type: String,
    required: false,
    default: null,
  },
  associationAmenities: {
    type: String,
    required: false,
    default: null,
  },
  flooring: {
    type: String,
    required: false,
    default: null,
  },
  appliances: {
    type: String,
    required: false,
    default: null,
  },
  constructionMaterials: {
    type: String,
    required: false,
    default: null,
  },
  originatingSystem: {
    type: String,
    required: true,
  },
  imagesCount: {
    type: Number,
    required: true,
  },
  patioAndPorchFeatures: {
    type: String,
    required: false,
    default: null,
  },
  possession: {
    type: String,
    required: false,
    default: null,
  },
  architecturalStyle: {
    type: String,
    required: false,
    default: null,
  },
  greenEnergyEfficient: {
    type: String,
    required: false,
    default: null,
  },
  roof: {
    type: String,
    required: false,
    default: null,
  },
  isPropertyAttached: {
    type: Boolean,
    required: false,
    default: null,
  },
});

ListingSchema.virtual('images', {
  ref: 'Image',
  localField: 'mlsId',
  foreignField: 'mlsId',
  options: { sort: { order: 1 } },
});

ListingSchema.set('toObject', { virtuals: true });
ListingSchema.set('toJSON', { virtuals: true });
ListingSchema.index({ geometry: '2dsphere' });
ListingSchema.plugin(mongoosePaginate);

module.exports =
  mongoose.models.Listing || mongoose.model('Listing', ListingSchema);
