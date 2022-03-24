import {
  ConfirmationNumber,
  LocalBar,
  RestaurantMenu,
  Room,
  Home,
} from '@material-ui/icons';
import {
  Cake,
  ShoppingBag,
  Sun,
  Music,
  FoodMenu,
  HomeAlt,
  MapPin,
} from '@styled-icons/boxicons-regular';

export const setPOIIcon = category => {
  switch (category) {
    case 'Food':
      return <Cake size={22} />;
    case 'Shopping':
      return <ShoppingBag size={22} />;
    case 'Arts & Entertainment':
      return <Sun size={22} />;
    case 'Nightlife':
      return <Music size={22} />;
    case 'Restaurants':
      return <FoodMenu size={22} />;
    case 'Listing':
      return <HomeAlt size={22} />;
    default:
      return <MapPin size={22} />;
  }
};
