const mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');

const CrimeSchema = new mongoose.Schema(
  {
    assault: { type: Number, required: true, unique: false },
    burglary: { type: Number, required: true, unique: false },
    overall: { type: Number, required: true, unique: false },
    robbery: { type: Number, required: true, unique: false },
    vehicle: { type: Number, required: true, unique: false },
  },
  { _id: false }
);

const EducationSchema = new mongoose.Schema(
  {
    highschool: { type: Number, required: true, unique: false },
    bachelor: { type: Number, required: true, unique: false },
    graduate: { type: Number, required: true, unique: false },
  },
  { _id: false }
);

const EmploymentSchema = new mongoose.Schema(
  {
    accommodations: { type: Number, required: false },
    administration: { type: Number, required: false },
    agriculture: { type: Number, required: false },
    arts: { type: Number, required: false },
    construction: { type: Number, required: false },
    education: { type: Number, required: false },
    finance: { type: Number, required: false },
    government: { type: Number, required: false },
    healthcare: { type: Number, required: false },
    management: { type: Number, required: false },
    manufacturing: { type: Number, required: false },
    mining: { type: Number, required: false },
    other: { type: Number, required: false },
    professional: { type: Number, required: false },
    realestate: { type: Number, required: false },
    retail: { type: Number, required: false },
    technology: { type: Number, required: false },
    transportation: { type: Number, required: false },
    utilities: { type: Number, required: false },
    wholesale: { type: Number, required: false },
  },
  { _id: false }
);

const IncomeSchema = new mongoose.Schema(
  {
    average: { type: Number, required: true },
    median: { type: Number, required: true },
  },
  { _id: false }
);

const CostsSchema = new mongoose.Schema(
  {
    overall: { type: Number, required: false },
    apparel: { type: Number, required: false },
    education: { type: Number, required: false },
    entertainment: { type: Number, required: false },
    food: { type: Number, required: false },
    healthcare: { type: Number, required: false },
    housing: { type: Number, required: false },
    transportation: { type: Number, required: false },
    utilities: { type: Number, required: false },
  },
  { _id: false }
);

const SchoolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: String, required: false, default: null },
    districtName: { type: String, required: false, default: null },
    totalStudents: { type: Number, required: false, default: null },
    totalTeachers: { type: Number, required: false, default: null },
    url: { type: String, required: false, default: null },
    expenditure: { type: Number, required: false, default: null },
    studentTeacherRatio: { type: String, required: true, default: null },
    advancedPlacement: { type: Boolean, required: true, default: null },
  },
  { _id: false }
);

const SchoolsSchema = new mongoose.Schema(
  {
    elementary: [SchoolSchema],
    middle: [SchoolSchema],
    high: [SchoolSchema],
  },
  { _id: false }
);

const SalesStatisticsSchema = new mongoose.Schema(
  {
    averageDaysOnMarket: { type: Number, required: false, default: null },
    averageClosePrice: { type: Number, required: false, default: null },
    averageListPrice: { type: Number, required: false, default: null },
    closeListPriceRatio: { type: Number, required: false, default: null },
    numberOfAgents: { type: Number, required: false, default: null },
    totalNumberOfclosedSales: {
      type: Number,
      required: false,
      default: null,
    },
  },
  { _id: false }
);

const SlugSchema = new mongoose.Schema(
  {
    state: { type: String, required: true, default: null },
    type: { type: String, required: true, default: null },
    city: { type: String, required: false, default: null },
    zipCode: { type: String, required: false, default: null },
    county: { type: String, required: false, default: null },
    neighborhood: { type: String, required: false, default: null },
  },
  { _id: false }
);

const LocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    unique: false,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  path: {
    type: String,
    required: true,
    unique: true,
  },
  city: {
    name: {
      type: String,
      required: false,
    },
    path: {
      type: String,
      required: false,
    },
  },
  state: {
    name: {
      type: String,
      required: false,
    },
    path: {
      type: String,
      required: false,
    },
  },
  county: {
    name: {
      type: String,
      required: false,
    },
    path: {
      type: String,
      required: false,
    },
  },
  lat: {
    type: Number,
    required: true,
    unique: true,
  },
  lng: {
    type: Number,
    required: true,
    unique: true,
  },
  center: mongoose.Schema.Types.Point,
  type: {
    type: String,
    required: true,
    unique: false,
  },
  currentPopulation: {
    type: Number,
    required: true,
    unique: false,
  },
  crime: CrimeSchema,
  education: EducationSchema,
  employment: EmploymentSchema,
  income: IncomeSchema,
  costs: CostsSchema,
  geometry: mongoose.Schema.Types.MultiPolygon,
  schools: SchoolsSchema,
  stats: SalesStatisticsSchema,
  slugObj: SlugSchema,
});

LocationSchema.index({ center: '2dsphere' });

module.exports =
  mongoose.models.Location || mongoose.model('Location', LocationSchema);
