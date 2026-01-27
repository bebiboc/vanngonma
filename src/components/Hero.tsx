import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const MESSENGER_LINK = "https://m.me/vanngonvn";

const Hero = () => {
  const vnd = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 });

  // Sample stores from BrowseStores (use images instead of emojis)
  const sampleStores = [
    {
      image: "./images/stores/fruit_bread.webp",
      name: "Cafe Giảng",
      shop: "Quán cà phê",
      original: 110000,
      discount: 35000,
    },
    {
      image: "./images/stores/veggies_box.webp",
      name: "Winmart",
      shop: "Siêu thị",
      original: 240000,
      discount: 72000,
    },
        {
      image: "./images/stores/patisserie_multiple.webp",
      name: "Saint Honoré Hanoi",
      shop: "Tiệm bánh",
      original: 250000,
      discount: 68000,
    },
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-visible pb-16">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary-foreground/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-primary-foreground/5 blur-3xl" />
      </div>

      <div className="container relative z-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 text-primary-foreground/90 text-sm">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              Ra mắt tháng 02 tại Hà Nội
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight text-balance">
              Mua túi thực phẩm bất ngờ,{" "}
              <span className="text-secondary">rẻ hơn đến 70%</span>
            </h1>
            
            <div className="space-y-4 max-w-lg">
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Giải cứu thực phẩm cuối ngày còn ngon, còn tươi — từ các quán được chọn lọc kỹ lưỡng tại Hà Nội.
              </p>

              <p className="text-base md:text-lg leading-relaxed text-primary-foreground/80">
                Dưới dạng túi bất ngờ — bạn được chọn trước nhóm/loại thực phẩm 🥕🥩🍎🍪
              </p>

              <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed pt-2">
                <strong>Nhắn tin ngay</strong> để nhận thông tin và được ưu đãi đơn hàng đầu tiên miễn phí khi chúng mình ra mắt tháng 02 — <span className="text-primary-foreground font-bold">giới hạn 100 người đầu tiên!</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={MESSENGER_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="warm"
                  size="lg"
                  className="gap-2 w-full sm:w-auto"
                  type="button"
                >
                  <MessageCircle className="w-5 h-5" />
                  Nhắn tin Messenger <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 pb-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary-foreground/20 border-2 border-primary flex items-center justify-center text-xs font-medium text-primary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-primary-foreground/80 text-sm">
                <span className="font-bold text-primary-foreground">150+</span> túi thực phẩm dự kiến sẽ được cứu trong tháng tới
              </p>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Food cards floating animation */}
              <div className="absolute top-[10%] left-[5%] w-48 bg-card rounded-2xl shadow-card p-3 animate-float" style={{ animationDelay: "0s" }}>
                <div className="w-full h-24 rounded-xl bg-muted mb-2 overflow-hidden">
                  <img src={sampleStores[0].image} alt={sampleStores[0].name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <p className="font-semibold text-foreground text-sm">{sampleStores[0].name}</p>
                <span className="inline-block px-2 py-0.5 rounded-md bg-secondary/15 text-secondary text-xs font-medium mb-1">🎁 Túi bất ngờ</span>
                <p className="text-muted-foreground text-xs">{sampleStores[0].shop}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-primary font-bold text-xs">{vnd.format(sampleStores[0].discount)}</span>
                  <span className="text-xs text-muted-foreground line-through">{vnd.format(sampleStores[0].original)}</span>
                </div>
              </div>

              <div className="absolute top-[35%] right-[0%] w-48 bg-card rounded-2xl shadow-card p-3 animate-float" style={{ animationDelay: "0.5s" }}>
                <div className="w-full h-24 rounded-xl bg-muted mb-2 overflow-hidden">
                  <img src={sampleStores[1].image} alt={sampleStores[1].name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <p className="font-semibold text-foreground text-sm">{sampleStores[1].name}</p>
                <span className="inline-block px-2 py-0.5 rounded-md bg-secondary/15 text-secondary text-xs font-medium mb-1">🎁 Túi bất ngờ</span>
                <p className="text-muted-foreground text-xs">{sampleStores[1].shop}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-primary font-bold text-xs">{vnd.format(sampleStores[1].discount)}</span>
                  <span className="text-xs text-muted-foreground line-through">{vnd.format(sampleStores[1].original)}</span>
                </div>
              </div>

              <div className="absolute bottom-[10%] left-[15%] w-48 bg-card rounded-2xl shadow-card p-3 animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-full h-24 rounded-xl bg-muted mb-2 overflow-hidden">
                  <img src={sampleStores[2].image} alt={sampleStores[2].name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <p className="font-semibold text-foreground text-sm">{sampleStores[2].name}</p>
                <span className="inline-block px-2 py-0.5 rounded-md bg-secondary/15 text-secondary text-xs font-medium mb-1">🎁 Túi bất ngờ</span>
                <p className="text-muted-foreground text-xs">{sampleStores[2].shop}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-primary font-bold text-xs">{vnd.format(sampleStores[2].discount)}</span>
                  <span className="text-xs text-muted-foreground line-through">{vnd.format(sampleStores[2].original)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
