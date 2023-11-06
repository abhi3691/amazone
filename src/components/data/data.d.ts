interface CarouselDataProps {
  id: number;
  image: ImageSourcePropType;
}

interface CategoriesProps {
  id: number;
  image: ImageSourcePropType;
  title: string;
}

interface ProductDataProps {
  id: number;
  productName: string;
  rating: number;
  ratingCount: string;
  price: string;
  crossOutText: string;
  deliveryBy: string;
  image: string;
}
