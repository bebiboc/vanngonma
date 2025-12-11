import { useState } from "react";
import { Coffee, Croissant, UtensilsCrossed } from "lucide-react";
import StoreCard from "./StoreCard";

const categories = [
  { id: "all", label: "Tất cả", icon: null },
  { id: "coffee", label: "Quán cà phê", icon: Coffee },
  { id: "bakery", label: "Tiệm bánh", icon: Croissant },
  { id: "restaurant", label: "Nhà hàng khách sạn", icon: UtensilsCrossed },
  { id: "supermarket", label: "Siêu thị", icon: null },
];

const stores = [
  {
    id: "1",
    name: "S'Patisserie",
    category: "Tiệm bánh & Bánh ngọt",
    categoryId: "bakery",
    emoji: "🥐",
    image: "./images/stores/patisserie-bakery.jpg",
    rating: 4.7,
    distance: "0.5 km",
    pickupTime: "5:00 PM - 7:00 PM",
    originalPrice: 180000,
    discountPrice: 55000,
    itemsLeft: 4,
    itemType: "Bánh ngọt, bánh ngài, tráng miệng",
  },
  {
    id: "2",
    name: "Saint Honoré Hanoi",
    category: "Tiệm bánh Pháp & Quán cà phê",
    categoryId: "bakery",
    emoji: "🍰",
    image: "./images/stores/bakery-croissant.jpg",
    rating: 4.8,
    distance: "1.1 km",
    pickupTime: "6:00 PM - 8:00 PM",
    originalPrice: 220000,
    discountPrice: 69000,
    itemsLeft: 5,
    itemType: "Bánh mì Pháp, croissant, bánh ngọt",
  },
  {
    id: "3",
    name: "Grill 63 – Magic Bag",
    category: "Nhà hàng khách sạn",
    categoryId: "restaurant",
    emoji: "🥩",
    image: "./images/stores/grill-steak.jpg",
    rating: 4.6,
    distance: "1.8 km",
    pickupTime: "8:00 PM - 9:30 PM",
    originalPrice: 450000,
    discountPrice: 99000,
    itemsLeft: 3,
    itemType: "Nguyên liệu tươi sống: trái cây, rau củ, thịt",
  },
  {
    id: "4",
    name: "Cafe Giảng",
    category: "Quán cà phê",
    categoryId: "coffee",
    emoji: "☕",
    image: "./images/stores/coffee-cup.jpg",
    rating: 4.4,
    distance: "0.4 km",
    pickupTime: "4:00 PM - 5:30 PM",
    originalPrice: 120000,
    discountPrice: 39000,
    itemsLeft: 6,
    itemType: "Cà phê trứng, bánh ngọt, hạt cà phê",
  },
  {
    id: "5",
    name: "Hanoi Social Club",
    category: "Quán cà phê & Nhà hàng",
    categoryId: "restaurant",
    emoji: "🍽️",
    image: "./images/stores/restaurant-food.jpg",
    rating: 4.6,
    distance: "0.9 km",
    pickupTime: "7:00 PM - 9:00 PM",
    originalPrice: 280000,
    discountPrice: 75000,
    itemsLeft: 4,
    itemType: "Suất ăn + rầu củ quả tươi",
  },
  {
    id: "7",
    name: "Winmart",
    category: "Siêu thị",
    categoryId: "supermarket",
    emoji: "🛒",
    image: "./images/stores/supermarket-winmart.jpg",
    rating: 4.9,
    distance: "0.5 km",
    pickupTime: "5:30 PM - 6:30 PM",
    originalPrice: 180000,
    discountPrice: 59000,
    itemsLeft: 5,
    itemType: "Thực phẩm, rầu củ quả tươi, hàng thiết yếu",
  },
];

const BrowseStores = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredStores = activeCategory === "all"
    ? stores
    : stores.filter((store) => store.categoryId === activeCategory);

  return (
    <section id="browse" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Ra mắt vào tháng 01 năm 2026
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Khám phá các túi thực phẩm bất ngờ
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Khám phá những deal hấp dẫn từ các quán ăn địa phương trong khu vực của bạn
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {category.icon && <category.icon className="w-4 h-4" />}
              {category.label}
            </button>
          ))}
        </div>

        {/* Store grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStores.map((store) => (
            <StoreCard key={store.id} {...store} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrowseStores;
