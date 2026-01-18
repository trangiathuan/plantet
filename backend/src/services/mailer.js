const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true nếu dùng port 465
    auth: {
        user: "trangiathuan8223@gmail.com",
        pass: "spyh ugmo nvch dhtb", // App Password
    },
});

const sendConfirmMail = async ({ fullName, phone, attendance }) => {
    const htmlContent = `
  <div style="
    font-family: 'Segoe UI', Roboto, Arial, sans-serif;
    background-color: #0f1115;
    padding: 32px;
    color: #e8eaed;
  ">
    <div style="
      max-width: 560px;
      margin: 0 auto;
      background-color: #1f2228;
      border-radius: 16px;
      padding: 28px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.4);
    ">

      <!-- Title -->
      <h2 style="
        font-size: 24px;
        font-weight: 600;
        margin: 0 0 12px 0;
        line-height: 1.3;
      ">
        Báo cáo xác nhận tham gia tất niên 2026
      </h2>

      <p style="
        font-size: 14px;
        color: #9aa0a6;
        margin-bottom: 24px;
      ">
        Thông tin tham gia của bạn đã được ghi nhận trong hệ thống.
      </p>

      <!-- Info list -->
      <div style="font-size: 15px;">
        <div style="margin-bottom: 14px;">
          <span style="color:#9aa0a6;">Họ tên</span><br/>
          <strong>${fullName}</strong>
        </div>

        <div style="margin-bottom: 14px;">
          <span style="color:#9aa0a6;">Số điện thoại</span><br/>
          <strong>${phone}</strong>
        </div>

        <div style="margin-bottom: 14px;">
          <span style="color:#9aa0a6;">Trạng thái tham gia</span><br/>
          <strong style="
            color: ${attendance === "yes" ? "#34a853" : "#ea4335"};
          ">
            ${attendance === "yes" ? "Có tham gia" : "Không tham gia"}
          </strong>
        </div>

        <div style="margin-bottom: 20px;">
          <span style="color:#9aa0a6;">Thời gian</span><br/>
          <strong>27/12/2025 (Âm lịch)</strong>
        </div>
      </div>

      <!-- Button -->
      <a href="#" style="
        display: inline-block;
        margin-top: 8px;
        background-color: #1a73e8;
        color: #ffffff;
        text-decoration: none;
        padding: 12px 20px;
        border-radius: 24px;
        font-size: 14px;
        font-weight: 500;
      ">
        Xem chi tiết
      </a>

      <!-- Footer -->
      <p style="
        font-size: 13px;
        color: #9aa0a6;
        margin-top: 28px;
        line-height: 1.5;
      ">
        Chúc bạn một năm mới an khang – thịnh vượng 🧧  
        <br/>Trân trọng.
      </p>

    </div>
  </div>
`;



    await transporter.sendMail({
        from: `"Tiệc Tất Niên 2026" <trangiathuan8223@gmail.com>`,
        to: "kietquocdinh@gmail.com",
        subject: "📩 Xác nhận tham gia Tất Niên 2026",
        html: htmlContent,
    });
};

module.exports = { sendConfirmMail };
