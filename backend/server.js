require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { sendConfirmMail } = require("./src/services/mailer");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post("/api/confirm", async (req, res) => {
    try {

        const { fullName, phone, attendance } = req.body;


        console.log(fullName, phone, attendance);


        if (!fullName || !phone || !attendance) {
            return res.status(400).json({ message: "Thiếu thông tin" });
        }

        // gửi mail
        await sendConfirmMail({ fullName, phone, attendance });

        res.json({ message: "Gửi xác nhận & email thành công" });

    } catch (error) {
        console.error("❌ Mail error:", error);
        res.status(500).json({ message: "Gửi mail thất bại" });
    }
});

app.listen(8888, () => {
    console.log("🚀 Server chạy tại http://localhost:3000");
});
