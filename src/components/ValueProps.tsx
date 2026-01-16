import { Sparkles, Leaf, ShieldCheck } from "lucide-react";

const values = [
  {
    icon: Sparkles,
    emoji: "🥐",
    title: "Giá cả siêu rẻ",
    description: "Thưởng thức các thực phẩm ngon từ nhà hàng, tiệm bánh, siêu thị tại Hà Nội giá giảm tới 70%.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Leaf,
    emoji: "🌱",
    title: "Cam kết cá nhân với xã hội",
    description: "Mỗi đơn hàng bạn mua giúp ngăn những thực phẩm tươi ngon trong ngày khỏi bị vứt đi dẫn đến lãng phí.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: ShieldCheck,
    emoji: "🛍️",
    title: "An toàn & chất lượng cao",
    description: "Chỉ hợp tác với các doanh nghiệp uy tín, được chọn lọc kỹ càng, cam kết tiêu chuẩn an toàn thực phẩm và chất lượng.",
    color: "bg-accent text-accent-foreground",
  },
];

const ValueProps = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Tại sao chọn Vẫn Ngon?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tốt cho bạn, tốt cho xã hội
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cùng hàng trăm người yêu ẩm thực tạo nên sự thay đổi từ mỗi bữa ăn
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="group relative bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">{value.emoji}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
