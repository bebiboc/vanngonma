import React from "react";

const Contact = () => {
  // Replace these placeholders with your real contact details
  const email = "mariekp.le@outlook.com";
  const linkedIn = "www.linkedin.com/in/marie-le-28234b206";

  return (
    <div className="container py-20 page-fade">
      <div className="max-w-2xl mx-auto bg-foreground/5 p-8 rounded-lg shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Liên hệ</h1>
        <p className="text-muted-foreground mb-6">Rất mong được lắng nghe và kết nối với bạn. Sử dụng thông tin bên dưới để liên hệ với chúng mình.</p>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Email</h3>
            <a
              href={`mailto:${email}`}
              className="text-primary hover:underline"
            >
              {email}
            </a>
          </div>

          <div>
            <h3 className="font-semibold">LinkedIn</h3>
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              {linkedIn}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
