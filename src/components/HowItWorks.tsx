import { Search, CreditCard, ShoppingBag, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Nhận thông báo",
    description: "Bạn sẽ nhận SMS hoặc Zalo về các quán có thực phẩm ngon còn dư trong ngày.",
    badge: null,
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Đặt túi bất ngờ",
    description: "Xác nhận tin nhắn và chọn danh mục bạn thích — Thịt, Rau củ, Trái cây, Tráng miệng.",
    badge: "Miễn phí đơn đầu tiên",
  },
  {
    icon: ShoppingBag,
    number: "03",
    title: "Nhận và thưởng thức",
    description: "Đến lấy túi thực phẩm tại quán trong khung giờ quy định và mở ra điều bất ngờ thơm ngon đang chờ bạn!",
    badge: null,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container">
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 rounded-full bg-primary/15 text-primary text-sm font-semibold mb-6 shadow-sm">
            Đơn giản & Dễ dàng
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Cách thức hoạt động
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Cứu đồ ăn chỉ với ba bước đơn giản
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-[16%] right-[16%] h-1 bg-gradient-to-r from-primary/20 via-primary/50 to-primary/20 -translate-y-1/2 rounded-full" />
          
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="bg-card rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 text-center relative z-10 border border-border/50 hover:border-primary/30 hover:-translate-y-2">
                  <div className="w-24 h-24 rounded-full gradient-hero mx-auto mb-8 flex items-center justify-center shadow-glow animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    <step.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                  
                  <span className="inline-block text-6xl font-bold bg-gradient-to-br from-primary/40 to-primary/20 bg-clip-text text-transparent mb-5">
                    {step.number}
                  </span>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  {step.badge && (
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary/20 text-secondary text-xs font-semibold mb-3">
                      {step.badge}
                    </span>
                  )}
                  
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-8 w-16 h-16 items-center justify-center z-20 bg-primary/10 rounded-full">
                    <ArrowRight className="w-7 h-7 text-primary animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
