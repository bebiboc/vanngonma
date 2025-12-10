import { Clock, MapPin, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface StoreCardProps {
  id: string;
  name: string;
  category: string;
  image: string;
  rating: number;
  distance: string;
  pickupTime: string;
  originalPrice: number;
  discountPrice: number;
  itemsLeft: number;
}

const StoreCard = ({
  id,
  name,
  category,
  image,
  rating,
  distance,
  pickupTime,
  originalPrice,
  discountPrice,
  itemsLeft,
}: StoreCardProps) => {
  const navigate = useNavigate();

  const vnd = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 });

  const handleClick = () => {
    navigate("/coming-soon", { state: { source: `store:${id}` } });
  };

  return (
    <button
      onClick={handleClick}
      className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card-hover transition-all duration-300 hover:-translate-y-2 text-left w-full"
    >
      <div className="relative h-40 bg-muted overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-6xl bg-gradient-to-br from-muted to-muted/50">
            {image}
          </div>
        )}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-card/90 backdrop-blur-sm text-xs font-medium text-foreground">
          {category}
        </div>
        {itemsLeft <= 3 && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold">
            Only {itemsLeft} left!
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-secondary text-secondary" />
                {rating}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {distance}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
          <Clock className="w-4 h-4" />
          <span>Pickup: {pickupTime}</span>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">{vnd.format(discountPrice)}</span>
            <span className="text-sm text-muted-foreground line-through">{vnd.format(originalPrice)}</span>
          </div>
          <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-semibold">
            {Math.round((1 - discountPrice / originalPrice) * 100)}% off
          </span>
        </div>
      </div>
    </button>
  );
};

export default StoreCard;
