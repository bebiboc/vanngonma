import { Leaf, ArrowLeft, Bell, Sparkles, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MESSENGER_LINK = "https://m.me/vanngonvn";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen gradient-hero flex flex-col page-fade">
      {/* Header */}
      <header className="container py-6">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Quay lại trang chủ
        </button>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-xl w-full text-center">
          {/* Logo */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm mb-8 animate-float">
            <Leaf className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary rounded-full px-4 py-2 text-secondary-foreground text-sm font-medium mb-6">
            <Bell className="w-4 h-4" />
            Ra mắt cuối tháng 02 năm 2026
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Sắp ra mắt!
          </h1>

          <div className="space-y-6 mb-10 max-w-2xl mx-auto">
            <div className="bg-secondary/20 backdrop-blur-sm rounded-2xl p-6 border border-secondary/30">
              <p className="text-base md:text-lg text-primary-foreground/90 leading-relaxed mb-3">
                <span className="text-2xl mr-2">🎁</span>
                <strong>Nhắn tin ngay</strong> để nhận thông tin chi tiết và được ưu đãi đơn hàng đầu tiên miễn phí khi chúng mình ra mắt tháng 02 này!
              </p>
              <p className="text-base text-primary-foreground/80 leading-relaxed">
                Giới hạn <strong className="text-secondary">100 người đầu tiên</strong>.
              </p>
            </div>
            
            <div className="space-y-3">
              <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed">
                Chúng mình sẽ thông báo qua Messenger khi ra mắt, giúp bạn cứu thực phẩm còn tươi ngon mỗi ngày.
              </p>
            </div>
          </div>

          {/* Messenger CTA */}
          <div className="max-w-md mx-auto">
            <a
              href={MESSENGER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full"
            >
              <Button variant="warm" size="lg" className="gap-2 w-full">
                <MessageCircle className="w-5 h-5" />
                Nhắn tin Messenger
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">50+</p>
              <p className="text-sm text-primary-foreground/70">Túi thực phẩm bất ngờ</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">10+</p>
              <p className="text-sm text-primary-foreground/70">Cửa hàng đối tác</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground">1</p>
              <p className="text-sm text-primary-foreground/70">Thành phố sắp ra mắt</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container py-6 text-center">
        <p className="text-sm text-primary-foreground/60">
          © 2026 Vẫn Ngon. Cùng chống lãng phí thực phẩm.
        </p>
      </footer>
    </div>
  );
};

export default ComingSoon;
