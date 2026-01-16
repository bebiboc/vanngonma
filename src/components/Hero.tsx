import { MapPin, ArrowRight, Carrot, Beef, Apple, Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [phoneInput, setPhoneInput] = useState("");
  const [fromPhone, setFromPhone] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const vnd = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 });

  // Sample stores from BrowseStores (use images instead of emojis)
  const sampleStores = [
    {
      image: "./images/stores/fruit_bread.png",
      name: "Cafe Giảng",
      shop: "Quán cà phê",
      original: 110000,
      discount: 35000,
    },
    {
      image: "./images/stores/veggies_box.jpg",
      name: "Winmart",
      shop: "Siêu thị",
      original: 240000,
      discount: 72000,
    },
        {
      image: "./images/stores/patisserie_multiple.png",
      name: "Saint Honoré Hanoi",
      shop: "Tiệm bánh",
      original: 250000,
      discount: 68000,
    },
  ];

  useEffect(() => {
    try {
      const stored = localStorage.getItem("preferredPhone");
      if (stored) setFromPhone(stored);
    } catch (e) {
      // ignore localStorage access errors (e.g., SSR or blocked storage)
    }
  }, []);



  // Vietnamese phone: starts with 0, 10 digits, or +84 and 9 digits
  // Vietnamese phone: starts with 0 or +84, followed by 3,5,7,8,9 and 8 digits
  // Valid prefixes: 03, 05, 07, 08, 09 or +843, +845, +847, +848, +849
  function isValidVietnamesePhone(phone: string) {
    return /^((\+84|0)(3|5|7|8|9)\d{8})$/.test(phone);
  }

  function handleFind() {
    // If not editing and already registered, just navigate
    if (fromPhone && !isEditing) {
      navigate("/coming-soon", { state: { phone: fromPhone, source: "hero" } });
      return;
    }
    
    const p = phoneInput;
    if (!p?.trim() || !isValidVietnamesePhone(p.trim())) {
      alert("Vui lòng nhập số điện thoại Việt Nam hợp lệ.");
      return;
    }
    
    const oldPhone = isEditing ? fromPhone : null;
    try {
      localStorage.setItem("preferredPhone", p.trim());
    } catch (e) {
      // ignore
    }
    const payload = { phone: p.trim(), source: "hero", oldPhone };
    setFromPhone(p.trim());
    setIsEditing(false);
    navigate("/coming-soon", { state: payload });
  }

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
              Sắp ra mắt tại Hà Nội
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] tracking-tight">
              Mua túi thực phẩm bất ngờ,
              <br />
              <span className="text-secondary drop-shadow-sm">rẻ hơn đến 70%</span>
            </h1>
            
            <div className="space-y-4 max-w-lg">
              <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
                Giải cứu thực phẩm cuối ngày còn ngon, còn tươi — từ các quán được chọn lọc kỹ lưỡng tại Hà Nội.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-primary-foreground/80">
                <span className="text-base md:text-lg leading-relaxed">
                  Mỗi túi chứa thực phẩm ngẫu nhiên — bạn được chọn trước nhóm/loại thực phẩm
                </span>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
                  <Carrot className="w-5 h-5 text-primary-foreground/80" />
                  <Beef className="w-5 h-5 text-primary-foreground/80" />
                  <Apple className="w-5 h-5 text-primary-foreground/80" />
                  <Cookie className="w-5 h-5 text-primary-foreground/80" />
                </div>
              </div>

              <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed pt-2">
                <strong>Đăng ký ngay</strong> để được đơn hàng đầu tiên miễn phí khi chúng mình ra mắt vào tháng 02 này — <span className="text-primary-foreground font-bold">giới hạn 100 người đầu tiên!</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1 max-w-md">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                {fromPhone && !isEditing ? (
                  <div className="h-14 flex items-center justify-between pl-12 pr-4 text-primary-foreground">
                    <span>Đã đăng ký: <strong>{fromPhone}</strong></span>
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(true);
                        setPhoneInput(fromPhone);
                      }}
                      className="text-sm text-secondary hover:underline ml-2"
                    >
                      Sửa
                    </button>
                  </div>
                ) : (
                  <input
                    type="tel"
                    inputMode="tel"
                    value={phoneInput}
                    onChange={(e) => {
                      // allow only digits and plus at the start
                      let val = e.target.value;
                      if (val.startsWith('+')) {
                        val = '+' + val.slice(1).replace(/\D/g, "");
                      } else {
                        val = val.replace(/\D/g, "");
                      }
                      setPhoneInput(val);
                    }}
                    placeholder="Nhập số điện thoại của bạn"
                    className="w-full h-14 pl-12 pr-4 rounded-xl bg-card text-foreground placeholder:text-muted-foreground shadow-card focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                )}
              </div>
              <Button
                variant="warm"
                size="lg"
                className="gap-2"
                onClick={() => handleFind()}
                type="button"
                disabled={!((fromPhone && !isEditing) || (phoneInput && isValidVietnamesePhone(phoneInput)))}
              >
                {isEditing ? "Cập nhật" : "Đăng ký"} <ArrowRight className="w-5 h-5" />
              </Button>
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
