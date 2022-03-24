exports.COMMON_OG_IMAGE =
  'https://felix-homes-assets.s3.us-east-2.amazonaws.com/images/og_image.jpg';

exports.REVIEWS_PAGE_SIZE = 6;
exports.BLOG_PAGE_SIZE = 10;
exports.LISTINGS_PAGE_SIZE = 52;
exports.MAP_LISTINGS_PAGE_SIZE = 150;

exports.MOBILE_BREAKPOINT = 480;
exports.TABLET_BREAKPOINT = 810;

exports.NAVIGATION_HEIGHT = 80;

exports.PRICE_OPTIONS = [
  [100000, '$100k'],
  [200000, '$200k'],
  [300000, '$300k'],
  [400000, '$400k'],
  [500000, '$500k'],
  [600000, '$600k'],
  [700000, '$700k'],
  [800000, '$800k'],
  [900000, '$900k'],
  [1000000, '$1mil'],
  [1500000, '$1.5mil'],
  [2000000, '$2mil'],
  [2500000, '$2.5mil'],
  [3000000, '$3mil'],
];

const COUNT_OPTIONS = [
  [1, '1+'],
  [2, '2+'],
  [3, '3+'],
  [4, '4+'],
  [5, '5+'],
  [6, '6+'],
];
exports.BED_OPTIONS = [[0, 'Beds'], ...COUNT_OPTIONS];

exports.BATH_OPTIONS = [[0, 'Baths'], ...COUNT_OPTIONS];

exports.TYPE_OPTIONS = [
  [0, 'Type'],
  ['singleFamily', 'House'],
  ['townhouse', 'Townhouse'],
  ['condo', 'Condo'],
];

exports.TEASER_LISTINGS = [
  {
    mlsId: 'RTC2262735',
    address: {
      street: '182 Oak Hollow Rd',
      city: 'Manchester',
      zipCode: '37355',
      state: 'TN',
      slug: '182-oak-hollow-rd',
    },
    listPrice: 425900,
    beds: 4,
    bathsFull: 3,
    baths: 3,
    lat: 35.46891014,
    lng: -86.05962331,
    image: 'https://images.felixhomes.co/RTC2262735/photo_0',
    livingAreaSF: 2784,
    description:
      'Spacious home in a prestigious development.  Beautiful hardwoods and cabinetry, vaulted ceiling, rocking chair front porch.  In the city close enough to all the amenities but in a quiet, peaceful, easy to love neighborhood.  Come see this home and fall in love with it.',
    isNewConstruction: false,
    yearBuilt: 2006,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262726',
    address: {
      street: '1013 Ishee Dr',
      city: 'Clarksville',
      zipCode: '37042',
      state: 'TN',
      slug: '1013-ishee-dr',
    },
    listPrice: 300000,
    beds: 4,
    bathsFull: 3,
    baths: 3,
    lat: 36.59515063,
    lng: -87.39475042,
    image: 'https://images.felixhomes.co/RTC2262726/photo_0',
    livingAreaSF: 2066,
    description:
      'Perfect location! Walking distance for fishing, canoeing & swimming! 3 min to restaurants & shopping. Nice eat in kitchen with stainless appliances. Formal Dining w/hardwood, Large great room with fireplace, Upstairs has Master + 2 guest bedrooms & 2 full baths. Lower level has 1 Bed & 1 bath, den & laundry room downstairs. Deep garage! ',
    isNewConstruction: false,
    yearBuilt: 2010,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262724',
    address: {
      street: '1264 Cottonwood Dr',
      city: 'Clarksville',
      zipCode: '37040',
      state: 'TN',
      slug: '1264-cottonwood-dr',
    },
    listPrice: 230000,
    beds: 4,
    bathsFull: 2,
    baths: 2.5,
    lat: 36.49829253,
    lng: -87.36018882,
    image: 'https://images.felixhomes.co/RTC2262724/photo_0',
    livingAreaSF: 1625,
    description:
      "Great all brick ranch with basement and fenced back yard close to Clarksville's Marina! 4 bedroom 2.5 bath with 1 car garage. Basement finished area can be used as bedroom rec room den or more!",
    isNewConstruction: false,
    yearBuilt: 1986,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262718',
    address: {
      street: '123 Airfloat Dr',
      city: 'Hendersonville',
      zipCode: '37075',
      state: 'TN',
      slug: '123-airfloat-dr',
    },
    listPrice: 339900,
    beds: 3,
    bathsFull: 2,
    baths: 2,
    lat: 36.26528775,
    lng: -86.61447007,
    image: 'https://images.felixhomes.co/RTC2262718/photo_0',
    livingAreaSF: 1467,
    description:
      'Close to Lake! Nice corner lot with large backyard. Beautifully renovated. New vinyl floors, beautiful stone fireplace with cathedral ceilings. Stainless steel appliances, Granite countertops. Multiple Offers Expected',
    isNewConstruction: false,
    yearBuilt: 1972,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262720',
    address: {
      street: '110 Woodside Dr',
      city: 'Dickson',
      zipCode: '37055',
      state: 'TN',
      slug: '110-woodside-dr',
    },
    listPrice: 389900,
    beds: 3,
    bathsFull: 2,
    baths: 2,
    lat: 36.08721417,
    lng: -87.35026096,
    image: 'https://images.felixhomes.co/RTC2262720/photo_0',
    livingAreaSF: 2126,
    description:
      'ALL BRICK CUSTOM BUILT ONE LEVEL LIVING IN HIGHLY  SOUGHT AFTER EXCLUSIVE  "NORTHWOOD" NEIGHBORHOOD, ENTRY WELCOMES YOU TO A FORMAL LIVING & DINING, COMBO KITCHEN/DEN,SS APP, GRANITE, MASTER W/ WHIRLPOOL & SEP SHOWER, OVERSIZED UTILITY RM LG  ENOUGH FOR HOME OFFICE OR ZOOM SCHOOL ZONE, LARGE PARKLIKE YARD, PLAYHOUSE/GARDEN SHED, ELEC EASILY ADDED..ENDLESS POSSIBILITIES , AMPLE RM TO ADD A POOL, ZONED FOR THE DISCOVERY SCHOOL  ',
    isNewConstruction: false,
    yearBuilt: 1994,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262715',
    address: {
      street: '7550 Don Bruce Ct',
      city: 'Christiana',
      zipCode: '37037',
      state: 'TN',
      slug: '7550-don-bruce-ct',
    },
    listPrice: 499900,
    beds: 3,
    bathsFull: 2,
    baths: 2.5,
    lat: 35.74444501,
    lng: -86.35784497,
    image: 'https://images.felixhomes.co/RTC2262715/photo_0',
    livingAreaSF: 2913,
    description:
      'Amazing custom-built home on a large lot. This home has beautiful tile work in all the bathrooms and the trim is over the top good with built-ins in every closet. A true must-see home. ',
    isNewConstruction: true,
    yearBuilt: 2021,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262710',
    address: {
      street: '545 Green Lane',
      city: 'Whites Creek',
      zipCode: '37189',
      state: 'TN',
      slug: '545-green-lane',
    },
    listPrice: 429900,
    beds: 4,
    bathsFull: 3,
    baths: 3,
    lat: 36.23664971,
    lng: -86.81264994,
    image: 'https://images.felixhomes.co/RTC2262710/photo_0',
    livingAreaSF: 1906,
    description:
      'New Construction Urban Farmhouse is filled with charm& upgrades including a screened back porch! 4 bed/3 full baths. Hardwoods throughout. Farmhouse style kitchen w/stainless appliances, tiled backsplash, soapstone counters, cute shelving. Open concept living space great for entertaining! Oversized bedrooms with large closets. Custom tiled baths. Storage galore! HUGE LOT! Owner related to agent. Taxes estimated.',
    isNewConstruction: true,
    yearBuilt: 2021,
    propertySubType: 'Horizontal Property Regime - Detached',
  },
  {
    mlsId: 'RTC2262705',
    address: {
      street: '3204 Oakview Ct',
      city: 'Antioch',
      zipCode: '37013',
      state: 'TN',
      slug: '3204-oakview-ct',
    },
    listPrice: 167000,
    beds: 2,
    bathsFull: 2,
    baths: 2,
    lat: 36.07510357,
    lng: -86.60737889,
    image: 'https://images.felixhomes.co/RTC2262705/photo_0',
    livingAreaSF: 1176,
    description:
      '2bd 2ba 1176 sq ft end-unit home conveniently located just off Bell Road in Antioch TN. Great floorplan with large living space, breakfast nook, and dining area. Perfect for the investor looking for a fix-n-flip. ',
    isNewConstruction: false,
    yearBuilt: 1984,
    propertySubType: 'Zero Lot Line',
  },
  {
    mlsId: 'RTC2262706',
    address: {
      street: '1400 Bethlehem Church Rd',
      city: 'Shelbyville',
      zipCode: '37160',
      state: 'TN',
      slug: '1400-bethlehem-church-rd',
    },
    listPrice: 159900,
    beds: 1,
    bathsFull: 1,
    baths: 1,
    lat: 35.44056089,
    lng: -86.64155492,
    image: 'https://images.felixhomes.co/RTC2262706/photo_0',
    livingAreaSF: 588,
    description:
      'manufactured mobile home sits on 5 acres of clear land, fenced in. Large road front. Build your beautiful home on this property. 3 bedroom septic system. ',
    isNewConstruction: false,
    yearBuilt: 2015,
    propertySubType: 'Mobile Home',
  },
  {
    mlsId: 'RTC2262701',
    address: {
      street: '102 LAUREL HILL CT',
      city: 'Dickson',
      zipCode: '37055',
      state: 'TN',
      slug: '102-laurel-hill-ct',
    },
    listPrice: 335900,
    beds: 3,
    bathsFull: 2,
    baths: 2,
    lat: 36.07060595,
    lng: -87.42608587,
    image: 'https://images.felixhomes.co/RTC2262701/photo_0',
    livingAreaSF: 2384,
    description:
      "MINUTES FROM DOWNTOWN..YET YOU FEEL LIKE YOU'RE LIVING IN THE COUNTRY WHERE PRIVACY ABOUNDS..LIVING ROOM PLUS MEDIA ROOM...EAT IN KITCHEN, MASTER ON MAIN, 2 BEDROOMS UP W/VAULTED CEILINGS, OFFICE OFFERS POSSIBILITY OF 4TH B'RM,1+ ACRE CORNER CUL-DE-SAC LOT WITH HUGE FRONT & BACK YARD, COY POND, STORAGE BUILDING, GARAGE COULD EASLY BE FINISHED FOR ADDITIONAL LIVING AREA SUCH AS DEN,MEDIA, ETC, PLENTY OF ROOM TO ADD CARPORT,GARAGE, GUEST QUARTERS, ETC  NEW FLOORING UPSTAIRS AND STAIR TREADS ",
    isNewConstruction: false,
    yearBuilt: 2000,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262692',
    address: {
      street: '320 Sparkle Ln',
      city: 'Cookeville',
      zipCode: '38501',
      state: 'TN',
      slug: '320-sparkle-ln',
    },
    listPrice: 159900,
    beds: 2,
    bathsFull: 1,
    baths: 1.5,
    lat: 36.32513832,
    lng: -85.4980946,
    image: 'https://images.felixhomes.co/RTC2262692/photo_0',
    livingAreaSF: 1100,
    description:
      'Information Herein Deemed Reliable but Not Guaranteed. 29.52 AC W/ A CABLET` HOUSE, WORKSHOP W/ GUEST QUARTERS, FLOWING CREEK.  MORE OF A DESCRIPTION ON DOCS TO SHARE WITH YOUR BUYERS.  2BD/1.5BA, 1100 sq ft, furnished, yr around creek, cave, springs, totally wooded, private & secluded, rd frontage, no restrictions, loads of wildlife and more ………… ',
    isNewConstruction: false,
    yearBuilt: 1996,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262690',
    address: {
      street: '1665 Sinks Weems Rd',
      city: 'Dickson',
      zipCode: '37055',
      state: 'TN',
      slug: '1665-sinks-weems-rd',
    },
    listPrice: 655000,
    beds: 3,
    bathsFull: 3,
    baths: 3,
    lat: 36.31571533,
    lng: -87.30934932,
    image: 'https://images.felixhomes.co/RTC2262690/photo_0',
    livingAreaSF: 3088,
    description:
      'What a fantastic property! 55.7 acres, pasture, woods, Barton Creek and .25 acre pond. This farm could be anything you want, horse ranch, cattle ranch or any type of ranch. The 5.5 acre track listed separately could be sold and that would reduce the acreage to 50.2 acres. This property could have multiple homes built on it. It is excellent location for the hunters. Also mini house unfinished. Pavilion to allow the largest gatherings. Hike it or hunt it, but make it your Homestead. ',
    isNewConstruction: false,
    yearBuilt: 1996,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262688',
    address: {
      street: '421 Harris Chapel Rd',
      city: 'Estill Springs',
      zipCode: '37330',
      state: 'TN',
      slug: '421-harris-chapel-rd',
    },
    listPrice: 565000,
    beds: 5,
    bathsFull: 3,
    baths: 3.5,
    lat: 35.22928112,
    lng: -86.16342446,
    image: 'https://images.felixhomes.co/RTC2262688/photo_0',
    livingAreaSF: 5588,
    description:
      '5 BR, 3 BATH, 1 HALF BATH, 2 Garage, home is on sprawling 6.9+/- Acres w/Open Floor Plan. Main level Primary BR w/His Hers Closets, Whirlpool Tub, Shower, 2 Guest BR, Open Kitchen w/Pantry, eat-in dining, Formal Dining Room, Laundry Room, Florida Room. Bonus Room upstairs w/unfinished Office & Attic. Finished & Semi Finish Basement has 2 BR w/FBath, Living Area, washer/dryer hookup, Garage, 2 Storm Shelters.* Estate SOLD AS IS*  Square Footage based on heated & cooled living space.',
    isNewConstruction: false,
    yearBuilt: 2007,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262687',
    address: {
      street: '3487 Dobbins Pike',
      city: 'Portland',
      zipCode: '37148',
      state: 'TN',
      slug: '3487-dobbins-pike',
    },
    listPrice: 799900,
    beds: 3,
    bathsFull: 2,
    baths: 2.5,
    lat: 36.55184093,
    lng: -86.40670729,
    image: 'https://images.felixhomes.co/RTC2262687/photo_0',
    livingAreaSF: 2525,
    description:
      'What a view! Beautiful 3 bedroom 2.5 bath home with a bonus room. Home sitting on 13 acres with 2 ponds. Soaring ceilings, Harwood floors, shiplap, tile. Large 50x56 shop with half bath. This is a must see and one of a kind opportunity.  ',
    isNewConstruction: false,
    yearBuilt: 2017,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262685',
    address: {
      street: '121 Bellevue Dr, S',
      city: 'Nashville',
      zipCode: '37205',
      state: 'TN',
      slug: '121-bellevue-dr-s',
    },
    listPrice: 1499000,
    beds: 4,
    bathsFull: 3,
    baths: 3,
    lat: 36.10572407,
    lng: -86.86066727,
    image: 'https://images.felixhomes.co/RTC2262685/photo_0',
    livingAreaSF: 3802,
    description:
      'Classic Belle Meade home on a gorgeous corner lot.  Home is being sold "As-Is." Interior of house not being shown. Walk to Parmer Park-perfect location to build your DREAM HOME!  *Buyer to verify SQFT and all pertinent information.',
    isNewConstruction: false,
    yearBuilt: 1930,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262684',
    address: {
      street: '106 Equestrian Way',
      city: 'Shelbyville',
      zipCode: '37160',
      state: 'TN',
      slug: '106-equestrian-way',
    },
    listPrice: 309125,
    beds: 3,
    bathsFull: 2,
    baths: 2,
    lat: 35.60870424,
    lng: -87.03570778,
    image: 'https://images.felixhomes.co/RTC2262684/photo_0',
    livingAreaSF: 1501,
    description:
      "Introducing another outstanding new ranch plan, the Piedmont, efficiently packed with all the essential elements demanded by today's lifestyles along with several surprising touches. This 3-bedroom 2-bath design greets you with a covered front porch that leads to an open layout with a front flex room and centrally-located island kitchen. The spacious family room has direct access to the rear yard, which is also enjoyed through views from the luxurious master bedroom. ",
    isNewConstruction: true,
    yearBuilt: 2021,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262683',
    address: {
      street: '762 Ellie Nat Dr',
      city: 'Clarksville',
      zipCode: '37040',
      state: 'TN',
      slug: '762-ellie-nat-dr',
    },
    listPrice: 299900,
    beds: 4,
    bathsFull: 3,
    baths: 3,
    lat: 36.6409865,
    lng: -87.28881632,
    image: 'https://images.felixhomes.co/RTC2262683/photo_0',
    livingAreaSF: 2039,
    description:
      "Meticulously maintained home with a full length RV pad and 50 amp service!  Entertainers dream with a tiered deck and large patio.  We have a large bonus room and the master on the main.  Don't wanna miss it!!!",
    isNewConstruction: false,
    yearBuilt: 2006,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262680',
    address: {
      street: '3512 Refuge Trl',
      city: 'Thompsons Station',
      zipCode: '37179',
      state: 'TN',
      slug: '3512-refuge-trl',
    },
    listPrice: 975000,
    beds: 3,
    bathsFull: 5,
    baths: 5,
    lat: 35.8317293,
    lng: -86.97244923,
    image: 'https://images.felixhomes.co/RTC2262680/photo_0',
    livingAreaSF: 3328,
    description:
      'Charming custom built home on 10 acres is a true country retreat in every way!  Incredible view, fruit trees, & spring water.  3 acres are clear & remaining is wooded.  Upstairs features 2 flex space rooms & kitchen.  Basement has 2 living areas and kitchenette.  Endless possibilities for all the space in this home.',
    isNewConstruction: false,
    yearBuilt: 1994,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262658',
    address: {
      street: '2118 W Linden Ave',
      city: 'Nashville',
      zipCode: '37212',
      state: 'TN',
      slug: '2118-w-linden-ave',
    },
    listPrice: 799000,
    beds: 3,
    bathsFull: 2,
    baths: 2,
    lat: 36.1280465,
    lng: -86.80596004,
    image: 'https://images.felixhomes.co/RTC2262658/photo_0',
    livingAreaSF: 2092,
    description:
      'Charming & beautiful move-in ready bungalow close to Vandy, VUMC & Belmont. Gorgeous landscaping & curb appeal! Original hardwoods throughout with 9-foot ceilings both floors. LR w/original tiled fireplace. Beautiful arches and striking woodwork! Granite countertops in kitchen w/stainless steel appliances & plentiful cabinet space. Master bedroom w/ walkout deck. Open upstairs w/ home/office or extra bedroom. Full stone walkout basement. Fabulous stacked stone det 2 car garage/studio. Sidewalks!',
    isNewConstruction: false,
    yearBuilt: 1931,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262646',
    address: {
      street: '1514 Jewell St',
      city: 'Nashville',
      zipCode: '37207',
      state: 'TN',
      slug: '1514-jewell-st',
    },
    listPrice: 395000,
    beds: 3,
    bathsFull: 2,
    baths: 2,
    lat: 36.19808046,
    lng: -86.75143309,
    image: 'https://images.felixhomes.co/RTC2262646/photo_0',
    livingAreaSF: 1264,
    description:
      'Bright and airy renovation on a large lot with space between neighbors! Tankless water heater, gas cooking, wonderfully roomy primary bedroom w/walk in closet, inviting deck just off the kitchen ready for string lights, music, and summer nights! BONUS: Old detached garage could become a workshop or huge storage area. Ultra convenient location just off Ellington Pkwy - under 15 minutes to downtown, under 20 to BNA, and super close to all everything East Nashville. GREAT attic space for storage.',
    isNewConstruction: false,
    yearBuilt: 1948,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262643',
    address: {
      street: '1300 Aline Ave',
      city: 'Nashville',
      zipCode: '37207',
      state: 'TN',
      slug: '1300-aline-ave',
    },
    listPrice: 230000,
    beds: 2,
    bathsFull: 1,
    baths: 1.5,
    lat: 36.19855878,
    lng: -86.77931245,
    image: 'https://images.felixhomes.co/RTC2262643/photo_0',
    livingAreaSF: 960,
    description:
      'This Nashville townhome has so much to offer and is less than 10 minutes from downtown! It includes hardwood flooring all throughout, a private back patio, a convenient downstairs half bath, and stainless steel kitchen appliances. It has been professionally cleaned and is move-in ready!',
    isNewConstruction: false,
    yearBuilt: 1986,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262640',
    address: {
      street: '137 Brookside Pt',
      city: 'Springfield',
      zipCode: '37172',
      state: 'TN',
      slug: '137-brookside-pt',
    },
    listPrice: 189000,
    beds: 3,
    bathsFull: 2,
    baths: 2,
    lat: 36.49361252,
    lng: -86.85066503,
    image: 'https://images.felixhomes.co/RTC2262640/photo_0',
    livingAreaSF: 1131,
    description:
      'Nice one level home with volume ceiling in great room. New vinyl plank flooring in the Dining & kitchen. Fresh Paint through out.  Spacious Master bedroom with trey ceiling, full bath and walk in closet. Crown molding in all bedrooms, New updated railing on the front porch.  Nice large deck to relaxing in the evenings.  New kitchen faucet.  This home is ready to move right in.  ',
    isNewConstruction: false,
    yearBuilt: 1997,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262638',
    address: {
      street: '156 Monks Rd',
      city: 'Fayetteville',
      zipCode: '37334',
      state: 'TN',
      slug: '156-monks-rd',
    },
    listPrice: 160000,
    beds: 3,
    bathsFull: 2,
    baths: 2,
    lat: 35.05579769,
    lng: -86.5956284,
    image: 'https://images.felixhomes.co/RTC2262638/photo_0',
    livingAreaSF: 1208,
    description:
      'Move-in ready 3BR 2BA home with 2-car detached garage/shop. Rinnai hot water heater! Fenced in backyard. Convenient to Huntsville! Shop is insulated. This is a perfect started/retirement home. Master has full bath. Appliances remain with property. Detached storage shed remains also.',
    isNewConstruction: false,
    yearBuilt: 1992,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262621',
    address: {
      street: '3532 Union Village Rd',
      city: 'Thompsons Station',
      zipCode: '37179',
      state: 'TN',
      slug: '3532-union-village-rd',
    },
    listPrice: 919900,
    beds: 4,
    bathsFull: 3,
    baths: 3.5,
    lat: 35.80682093,
    lng: -86.86292117,
    image: 'https://images.felixhomes.co/RTC2262621/photo_1',
    livingAreaSF: 3601,
    description:
      "Absolutely Stunning home on a private cul de sac & on one of the largest homesite in the Bridgemore community! Perfect open design w/soaring ceilings, gourmet kitchen, luxury owner's suite on the Main floor, 3 additional spacious bedrooms, 2 full baths & enormous bonus room upstairs. This home is just a short walk from the pool, basketball court and playground area. Large unfinished space on second floor  ",
    isNewConstruction: false,
    yearBuilt: 2014,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262619',
    address: {
      street: '8445 Highway 25, E',
      city: 'Cross Plains',
      zipCode: '37049',
      state: 'TN',
      slug: '8445-highway-25-e',
    },
    listPrice: 279900,
    beds: 3,
    bathsFull: 2,
    baths: 2,
    lat: 36.5355403,
    lng: -86.65730853,
    image: 'https://images.felixhomes.co/RTC2262619/photo_0',
    livingAreaSF: 1612,
    description:
      'One Level Brick home in convenient location! Large treed lot near I65! Fresh Paint! New Light Fixtures! Updated Baths and Kitchen! Granite! Tile! Metal roof! Fireplace! Stainless Appliances! Cash or Conventional Only! ',
    isNewConstruction: false,
    yearBuilt: 1970,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262618',
    address: {
      street: '607 Drummond St, Lot # 2064',
      city: 'Franklin',
      zipCode: '37064',
      state: 'TN',
      slug: '607-drummond-st-lot--2064',
    },
    listPrice: 879270,
    beds: 3,
    bathsFull: 3,
    baths: 3.5,
    lat: 35.93163362,
    lng: -86.94031858,
    image: 'https://images.felixhomes.co/RTC2262618/photo_0',
    livingAreaSF: 2619,
    description:
      'Beautiful "Ashland"  w/traditional elevation!  Very open floor plan, large front and back porches, 3 BRs, 3.5 Baths, full 3 car garage, fullly sodded, irrigated, and fenced courtyard, tankless water heater, 10-ft / 9-ft ceilings!  SELLER ACCEPTING OFFERS (ON WESTHAVEN/BUILDER CONTRACT ONLY) UNTIL 5:00 PM THURS 6/17/21.  NO ESCALATION CLAUSES, PLEASE.',
    isNewConstruction: true,
    yearBuilt: 2021,
    propertySubType: 'Single Family Residence',
  },
  {
    mlsId: 'RTC2262616',
    address: {
      street: '1603 River Rd',
      city: 'Chapel Hill',
      zipCode: '37034',
      state: 'TN',
      slug: '1603-river-rd',
    },
    listPrice: 429900,
    beds: 2,
    bathsFull: 2,
    baths: 2,
    lat: 35.58191875,
    lng: -86.74614837,
    image: 'https://images.felixhomes.co/RTC2262616/photo_0',
    livingAreaSF: 1142,
    description:
      'Completely Renovated River Front Oasis with Panoramic Views and Rare Private Access to the water. Located right on the Duck River this property offers a Private Concrete Boat Ramp, separate Access Stairs to the water, fire pit, multi tier decks for entertaining, completely fenced yard, Kinetico water filtration system, separate RV pad with electric hookup, large workshop/shed, 480 sq. unfinished basement,1.19 Unrestricted Acres and LOCATION! LOCATION! LOCATION!',
    isNewConstruction: false,
    yearBuilt: 1989,
    propertySubType: 'Single Family Residence',
  },
];

exports.LOCATIONS = [
  {
    name: 'Cedar Hill',
    slug: 'cedar-hill',
  },
  {
    name: 'Fairview',
    slug: 'fairview',
  },
  {
    name: 'Joelton',
    slug: 'joelton',
  },
  {
    name: 'Madison',
    slug: 'madison',
  },
  {
    name: '37042',
    slug: '37042',
  },
  {
    name: '37064',
    slug: '37064',
  },
  {
    name: '37040',
    slug: '37040',
  },
  {
    name: '37128',
    slug: '37128',
  },
  {
    name: '37122',
    slug: '37122',
  },
  {
    name: '37043',
    slug: '37043',
  },
  {
    name: '37174',
    slug: '37174',
  },
  {
    name: '37066',
    slug: '37066',
  },
  {
    name: '37209',
    slug: '37209',
  },
  {
    name: '37129',
    slug: '37129',
  },
  {
    name: '37027',
    slug: '37027',
  },
  {
    name: '37167',
    slug: '37167',
  },
  {
    name: '37087',
    slug: '37087',
  },
  {
    name: '37075',
    slug: '37075',
  },
  {
    name: '37013',
    slug: '37013',
  },
  {
    name: '37135',
    slug: '37135',
  },
  {
    name: '37211',
    slug: '37211',
  },
  {
    name: '37130',
    slug: '37130',
  },
  {
    name: '37207',
    slug: '37207',
  },
  {
    name: '37221',
    slug: '37221',
  },
  {
    name: '37203',
    slug: '37203',
  },
  {
    name: '37208',
    slug: '37208',
  },
  {
    name: '37215',
    slug: '37215',
  },
  {
    name: '37160',
    slug: '37160',
  },
  {
    name: '37086',
    slug: '37086',
  },
  {
    name: '37206',
    slug: '37206',
  },
  {
    name: '37138',
    slug: '37138',
  },
  {
    name: '37072',
    slug: '37072',
  },
  {
    name: '37205',
    slug: '37205',
  },
  {
    name: '37076',
    slug: '37076',
  },
  {
    name: '37355',
    slug: '37355',
  },
  {
    name: '37179',
    slug: '37179',
  },
  {
    name: '37067',
    slug: '37067',
  },
  {
    name: '37172',
    slug: '37172',
  },
  {
    name: '37115',
    slug: '37115',
  },
  {
    name: '37090',
    slug: '37090',
  },
  {
    name: '37188',
    slug: '37188',
  },
  {
    name: '37055',
    slug: '37055',
  },
  {
    name: '37216',
    slug: '37216',
  },
  {
    name: '37214',
    slug: '37214',
  },
  {
    name: '37046',
    slug: '37046',
  },
  {
    name: '37091',
    slug: '37091',
  },
  {
    name: '37148',
    slug: '37148',
  },
  {
    name: '37204',
    slug: '37204',
  },
  {
    name: '37212',
    slug: '37212',
  },
  {
    name: '37015',
    slug: '37015',
  },
  {
    name: '37062',
    slug: '37062',
  },
  {
    name: '37127',
    slug: '37127',
  },
  {
    name: '37069',
    slug: '37069',
  },
  {
    name: '37210',
    slug: '37210',
  },
  {
    name: '37218',
    slug: '37218',
  },
  {
    name: '37217',
    slug: '37217',
  },
  {
    name: '37037',
    slug: '37037',
  },
  {
    name: '37034',
    slug: '37034',
  },
  {
    name: '37014',
    slug: '37014',
  },
  {
    name: '37219',
    slug: '37219',
  },
  {
    name: '37146',
    slug: '37146',
  },
  {
    name: '37033',
    slug: '37033',
  },
  {
    name: '37073',
    slug: '37073',
  },
  {
    name: '37080',
    slug: '37080',
  },
  {
    name: '37029',
    slug: '37029',
  },
  {
    name: '37187',
    slug: '37187',
  },
  {
    name: '37036',
    slug: '37036',
  },
  {
    name: '37020',
    slug: '37020',
  },
  {
    name: '37220',
    slug: '37220',
  },
  {
    name: '37184',
    slug: '37184',
  },
  {
    name: '37025',
    slug: '37025',
  },
  {
    name: '37082',
    slug: '37082',
  },
  {
    name: '37010',
    slug: '37010',
  },
  {
    name: '37153',
    slug: '37153',
  },
  {
    name: '37049',
    slug: '37049',
  },
  {
    name: '37189',
    slug: '37189',
  },
  {
    name: '37201',
    slug: '37201',
  },
  {
    name: '37060',
    slug: '37060',
  },
  {
    name: '37035',
    slug: '37035',
  },
  {
    name: '37032',
    slug: '37032',
  },
  {
    name: '37183',
    slug: '37183',
  },
  {
    slug: 'bellevue',
    name: 'Bellevue',
  },
  {
    slug: 'cloverhill',
    name: 'Cloverhill',
  },
  {
    slug: 'sylvan-park',
    name: 'Sylvan Park',
  },
  {
    slug: 'parkwood-union-hill',
    name: 'Parkwood / Union Hill',
  },
  {
    slug: 'glencliff',
    name: 'Glencliff',
  },
  {
    slug: 'priest-lake',
    name: 'Antioch / Priest Lake',
  },
  {
    slug: 'downtown',
    name: 'Downtown',
  },
  {
    slug: 'southeast',
    name: 'Southeast',
  },
  {
    slug: 'south-nashville',
    name: 'South Nashville',
  },
  {
    slug: 'east-nashville',
    name: 'East Nashville',
  },
  {
    slug: 'west-nashville',
    name: 'West Nashville',
  },
  {
    slug: 'north-nashville',
    name: 'North Nashville',
  },
  {
    slug: 'belle-meade',
    name: 'Belle Meade',
  },
  {
    slug: 'bordeaux',
    name: 'Bordeaux',
  },
  {
    slug: 'bradford-hills',
    name: 'Bradford Hills',
  },
  {
    slug: 'caldwell-abbay-hall',
    name: 'Caldwell / Abbay Hall',
  },
  {
    slug: 'capitol-view',
    name: 'Capitol View',
  },
  {
    slug: 'charlotte-park',
    name: 'Charlotte Park',
  },
  {
    slug: 'cleveland-park',
    name: 'Cleveland Park',
  },
  {
    slug: 'crieve-hall',
    name: 'Crieve Hall',
  },
  {
    slug: 'east-hill',
    name: 'East Hill',
  },
  {
    slug: 'eastwood',
    name: 'Eastwood',
  },
  {
    slug: 'fredericksburg',
    name: 'Fredericksburg',
  },
  {
    slug: 'green-hills',
    name: 'Green Hills',
  },
  {
    slug: 'hermitage-hills',
    name: 'Hermitage Hills',
  },
  {
    slug: 'hillsboro-west-end',
    name: 'Hillsboro / West End',
  },
  {
    slug: 'historic-old-hickory-village',
    name: 'Historic Old Hickory Village',
  },
  {
    slug: 'inglewood',
    name: 'Inglewood',
  },
  {
    slug: 'lennox-village',
    name: 'Lennox Village',
  },
  {
    slug: 'lockeland-springs',
    name: 'Lockeland Springs',
  },
  {
    slug: 'maxwell-heights',
    name: 'Maxwell Heights',
  },
  {
    slug: 'melrose',
    name: 'Melrose',
  },
  {
    slug: 'nashboro-village',
    name: 'Nashboro Village',
  },
  {
    slug: 'river-plantation',
    name: 'River Plantation',
  },
  {
    slug: 'riverwalk',
    name: 'Riverwalk',
  },
  {
    slug: 'rosebank',
    name: 'Rosebank',
  },
  {
    slug: 'salemtown',
    name: 'Salemtown',
  },
  {
    slug: 'shelby-hills',
    name: 'Shelby Hills',
  },
  {
    slug: 'south-inglewood',
    name: 'South Inglewood',
  },
  {
    slug: 'sylvan-heights',
    name: 'Sylvan Heights',
  },
  {
    slug: 'vanderbilt-university',
    name: 'Vanderbilt University',
  },
  {
    slug: 'wedgewood-houston',
    name: 'Wedgewood Houston',
  },
  {
    slug: 'west-meade',
    name: 'West Meade',
  },
  {
    slug: 'woodbine',
    name: 'Woodbine',
  },
  {
    slug: 'mcmurrary-huntingdon',
    name: 'McMurrary / Huntingdon',
  },
  {
    slug: 'the-gulch',
    name: 'The Gulch',
  },
  {
    slug: 'edgehill',
    name: 'Edgehill',
  },
  {
    slug: 'smyrna',
    name: 'Smyrna',
  },
  {
    slug: 'whites-creek',
    name: 'Whites Creek',
  },
  {
    slug: 'white-house',
    name: 'White House',
  },
  {
    slug: 'white-bluff',
    name: 'White Bluff',
  },
  {
    slug: 'spring-hill',
    name: 'Spring Hill',
  },
  {
    slug: 'springfield',
    name: 'Springfield',
  },
  {
    slug: 'waverly',
    name: 'Waverly',
  },
  {
    slug: 'watertown',
    name: 'Watertown',
  },
  {
    slug: 'wartrace',
    name: 'Wartrace',
  },
  {
    slug: 'unionville',
    name: 'Unionville',
  },
  {
    slug: 'tullahoma',
    name: 'Tullahoma',
  },
  {
    slug: 'summertown',
    name: 'Summertown',
  },
  {
    slug: 'shelbyville',
    name: 'Shelbyville',
  },
  {
    slug: 'rockvale',
    name: 'Rockvale',
  },
  {
    slug: 'portland',
    name: 'Portland',
  },
  {
    slug: 'pulaski',
    name: 'Pulaski',
  },
  {
    slug: 'pleasant-view',
    name: 'Pleasant View',
  },
  {
    slug: 'pegram',
    name: 'Pegram',
  },
  {
    slug: 'old-hickory',
    name: 'Old Hickory',
  },
  {
    slug: 'nolensville',
    name: 'Nolensville',
  },
  {
    slug: 'nashville',
    name: 'Nashville',
  },
  {
    slug: 'murfreesboro',
    name: 'Murfreesboro',
  },
  {
    slug: 'mount-pleasant',
    name: 'Mount Pleasant',
  },
  {
    slug: 'mount-juliet',
    name: 'Mount Juliet',
  },
  {
    slug: 'greenbrier',
    name: 'Greenbrier',
  },
  {
    slug: 'goodlettsville',
    name: 'Goodlettsville',
  },
  {
    slug: 'gallatin',
    name: 'Gallatin',
  },
  {
    slug: 'franklin',
    name: 'Franklin',
  },
  {
    slug: 'eagleville',
    name: 'Eagleville',
  },
  {
    slug: 'dickson',
    name: 'Dickson',
  },
  {
    slug: 'decherd',
    name: 'Decherd',
  },
  {
    slug: 'thompsons-station',
    name: 'Thompsons Station',
  },
  {
    slug: 'charlotte',
    name: 'Charlotte',
  },
  {
    slug: 'cumberland-furnace',
    name: 'Cumberland Furnace',
  },
  {
    slug: 'culleoka',
    name: 'Culleoka',
  },
  {
    slug: 'cross-plains',
    name: 'Cross Plains',
  },
  {
    slug: 'cottontown',
    name: 'Cottontown',
  },
  {
    slug: 'cookeville',
    name: 'Cookeville',
  },
  {
    slug: 'columbia',
    name: 'Columbia',
  },
  {
    slug: 'college-grove',
    name: 'College Grove',
  },
  {
    slug: 'clarksville',
    name: 'Clarksville',
  },
  {
    slug: 'christiana',
    name: 'Christiana',
  },
  {
    slug: 'chapmansboro',
    name: 'Chapmansboro',
  },
  {
    slug: 'chapel-hill',
    name: 'Chapel Hill',
  },
  {
    slug: 'centerville',
    name: 'Centerville',
  },
  {
    slug: 'castalian-springs',
    name: 'Castalian Springs',
  },
  {
    slug: 'burns',
    name: 'Burns',
  },
  {
    slug: 'brentwood',
    name: 'Brentwood',
  },
  {
    slug: 'bon-aqua',
    name: 'Bon Aqua',
  },
  {
    slug: 'ashland-city',
    name: 'Ashland City',
  },
  {
    slug: 'arrington',
    name: 'Arrington',
  },
  {
    slug: 'bethpage',
    name: 'Bethpage',
  },
  {
    slug: 'bell-buckle',
    name: 'Bell Buckle',
  },
  {
    slug: 'lebanon',
    name: 'Lebanon',
  },
  {
    slug: 'lawrenceburg',
    name: 'Lawrenceburg',
  },
  {
    slug: 'adams',
    name: 'Adams',
  },
  {
    slug: 'mcminnville',
    name: 'McMinnville',
  },
  {
    slug: 'manchester',
    name: 'Manchester',
  },
  {
    slug: 'lynnville',
    name: 'Lynnville',
  },
  {
    slug: 'lyles',
    name: 'Lyles',
  },
  {
    slug: 'lewisburg',
    name: 'Lewisburg',
  },
  {
    slug: 'la-vergne',
    name: 'La Vergne',
  },
  {
    slug: 'lascassas',
    name: 'Lascassas',
  },
  {
    slug: 'kingston-springs',
    name: 'Kingston Springs',
  },
  {
    slug: 'hohenwald',
    name: 'Hohenwald',
  },
  {
    slug: 'hermitage',
    name: 'Hermitage',
  },
  {
    slug: 'hendersonville',
    name: 'Hendersonville',
  },
  {
    slug: 'hartsville',
    name: 'Hartsville',
  },
  {
    slug: 'antioch',
    name: 'Antioch',
  },
  {
    slug: 'the-nations',
    name: 'The Nations',
  },
  {
    slug: 'forest-hills',
    name: 'Forest Hills',
  },
  {
    slug: 'donelson',
    name: 'Donelson',
  },

  ,
  {
    slug: 'midtown',
    name: 'Midtown',
  },

  {
    slug: 'hillsboro-belmont',
    name: 'Hillsboro / Belmont',
  },

  {
    slug: '12-south',
    name: '12 South',
  },

  {
    slug: 'sobro',
    name: 'Sobro',
  },

  {
    name: 'Berry Hill',
    slug: 'berry-hill',
  },

  {
    name: 'Oak Hill',
    slug: 'oak-hill',
  },

  {
    name: 'Buena Vista',
    slug: 'buena-vista',
  },

  {
    name: 'Leipers Fork',
    slug: 'leipers-fork',
  },

  {
    name: 'Governors Club',
    slug: 'governors-club',
  },

  {
    name: 'Westhaven',
    slug: 'westhaven',
  },

  {
    name: 'Fieldstone Farms',
    slug: 'fieldstone-farms',
  },

  {
    name: 'Fairvue Plantation',
    slug: 'fairvue-plantation',
  },

  {
    name: 'McKays Mill',
    slug: 'mckays-mill',
  },

  {
    name: 'Forrest Crossing',
    slug: 'forrest-crossing',
  },

  {
    slug: 'laurelbrooke',
    name: 'Laurelbrooke',
  },

  {
    slug: 'ladd-park',
    name: 'Ladd Park',
  },

  {
    slug: 'lake-providence',
    name: 'Lake Providence',
  },

  {
    slug: 'berry-farms',
    name: 'Berry Farms',
  },

  {
    slug: 'tollgate-village',
    name: 'Tollgate Village',
  },

  {
    slug: 'bent-creek',
    name: 'Bent Creek',
  },

  {
    slug: 'sullivan-farms',
    name: 'Sullivan Farms',
  },

  {
    slug: 'the-grove',
    name: 'The Grove',
  },

  {
    slug: 'annandale',
    name: 'Annandale',
  },

  {
    slug: 'kelsey-glen',
    name: 'Kelsey Glen',
  },

  {
    slug: 'autumn-ridge',
    name: 'Autumn Ridge',
  },

  {
    slug: 'morgan-farms',
    name: 'Morgan Farms',
  },

  {
    slug: 'the-reserve-at-stone-hall',
    name: 'The Reserve at Stone Hall',
  },

  {
    slug: 'taramore',
    name: 'Taramore',
  },

  {
    slug: 'cool-springs',
    name: 'Cool Springs',
  },

  {
    slug: 'canterbury',
    name: 'Canterbury',
  },

  {
    slug: 'autumn-creek',
    name: 'Autumn Creek',
  },

  {
    slug: 'stream-valley',
    name: 'Stream Valley',
  },

  {
    slug: 'tuscan-gardens',
    name: 'Tuscan Gardens',
  },

  {
    slug: 'kingdom-ridge',
    name: 'Kingdom Ridge',
  },

  {
    slug: 'summerlyn',
    name: 'Summerlyn',
  },

  {
    slug: 'spence-creek',
    name: 'Spence Creek',
  },

  {
    slug: 'southern-springs',
    name: 'Southern Springs',
  },

  {
    slug: 'wright-farms',
    name: 'Wright Farms',
  },

  {
    slug: 'amelia-park',
    name: 'Amelia Park',
  },

  {
    slug: 'villas-at-cloister',
    name: 'Villas at Cloister',
  },

  {
    slug: 'providence',
    name: 'Providence',
  },

  {
    slug: 'puckett-station',
    name: 'Puckett Station',
  },

  {
    slug: 'harvest-woods',
    name: 'Harvest Woods',
  },

  {
    slug: 'burkitt-place',
    name: 'Burkitt Place',
  },

  {
    slug: 'stones-manor',
    name: 'Stones Manor',
  },

  {
    slug: 'kings-chapel',
    name: "King's Chapel",
  },

  {
    slug: 'farmington',
    name: 'Farmington',
  },

  {
    slug: 'franklin-meadows',
    name: 'Franklin Meadows',
  },

  {
    slug: 'kings-creek',
    name: 'Kings Creek',
  },

  {
    slug: 'marymont-springs',
    name: 'Marymont Springs',
  },
  ,
  {
    slug: 'indian-hills',
    name: 'Indian Hills',
  },
  {
    slug: 'jackson-hills',
    name: 'Jackson Hills',
  },
  {
    slug: 'bridgemore-village',
    name: 'Bridgemore Village',
  },
  {
    slug: 'belle-meade-highlands',
    name: 'Belle Meade Highlands',
  },
  {
    slug: 'cascade-falls',
    name: 'Cascade Falls',
  },
  {
    slug: 'tuscany-hills',
    name: 'Tuscany Hills',
  },
  {
    slug: 'durham-farms',
    name: 'Durham Farms',
  },
  {
    slug: 'avalon',
    name: 'Avalon',
  },
  {
    slug: 'three-rivers',
    name: 'Three Rivers',
  },
  {
    slug: 'cobblestone-landing',
    name: 'Cobblestone Landing',
  },
  {
    slug: 'wades-grove',
    name: 'Wades Grove',
  },
  {
    slug: 'five-oaks',
    name: 'Five Oaks',
  },
  {
    slug: 'waters-edge',
    name: 'Waters Edge',
  },
  {
    slug: 'lenox-village',
    name: 'Lenox Village',
  },
  {
    slug: 'downtown-franklin',
    name: 'Downtown Franklin',
  },
  {
    slug: 'settlers-ridge',
    name: 'Settlers Ridge',
  },
  {
    slug: 'davidson-county',
    name: 'Davidson County',
  },
  {
    slug: 'williamson-county',
    name: 'Williamson County',
  },
  {
    slug: 'wilson-county',
    name: 'Wilson County',
  },
  {
    slug: 'sumner-county',
    name: 'Sumner County',
  },
  {
    slug: 'rutherford-county',
    name: 'Rutherford County',
  },
  {
    slug: 'maury-county',
    name: 'Maury County',
  },
  {
    slug: 'marshall-county',
    name: 'Marshall County',
  },
  {
    slug: 'robertson-county',
    name: 'Robertson County',
  },
  {
    slug: 'montgomery-county',
    name: 'Montgomery County',
  },
  {
    slug: 'cheatham-county',
    name: 'Cheatham County',
  },
  {
    slug: 'bedford-county',
    name: 'Bedford County',
  },
  {
    slug: 'hickman-county',
    name: 'Hickman County',
  },
  {
    slug: 'dickson-county',
    name: 'Dickson County',
  },
  {
    slug: 'putnam-county',
    name: 'Putnam County',
  },
  {
    slug: 'franklin-county',
    name: 'Franklin County',
  },
  {
    slug: 'trousdale-county',
    name: 'Trousdale County',
  },
  {
    slug: 'lewis-county',
    name: 'Lewis County',
  },
  {
    slug: 'lawrence-county',
    name: 'Lawrence County',
  },
  {
    slug: 'giles-county',
    name: 'Giles County',
  },
  {
    slug: 'coffee-county',
    name: 'Coffee County',
  },
  {
    slug: 'humphreys-county',
    name: 'Humphreys County',
  },
  {
    slug: 'warren-county',
    name: 'Warren County',
  },
  {
    slug: 'germantown',
    name: 'Germantown',
  },
];
