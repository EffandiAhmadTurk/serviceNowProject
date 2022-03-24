const convertListItemToDataLayer = ({ el, index, search }) => {
  return {
    item_name: `${el.address.street} ${el.address.city}, ${el.address.state} ${el.address.zipCode}`,
    item_id: el.mlsId,
    price: el.listPrice,
    item_brand: el.propertySubType,
    item_category: el.address.city,
    item_category2: el.beds,
    item_category3: el.baths || el.bathsTotal,
    item_category4: el.livingAreaSF,
    item_category5: el.yearBuilt,
    item_variant: el.isNewConstruction,
    item_list_name: el.propertySubType,
    item_list_name: search,
    index: index + 1,
  };
};

export default convertListItemToDataLayer;
