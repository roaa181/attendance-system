// const mongodb = require("mongodb");
// const mongoclient = mongodb.MongoClient;
// const connectionUrl = "mongodb://localhost:27017";
// const dbname = "project";

// mongoclient.connect(connectionUrl, (error, result) => {
//   if (error) {
//     return console.log('error has occured');
//   }
//   console.log('ALL PREFECT');

//   const db = result.db(dbname)


//   ////////////////////////////////////////////////////////////////////////////
//   db.collection('employees').insertMany(
//   [
//      {
//     name:'Zyad Elsayed Husseiny ',
//     age: 21,
//     email:"Zyad@gmail.com",
//     password: "Zyad123",
//     rfid_code: 123,
//     qr_code:122,
    

//   },
//     {
//     name:'Youssef Samy Naim ',
//     age: 21,
//     email:"Youssef@gmail.com",
//     password: "Youssef123",
//     rfid_code: 123,
//     qr_code:122,
  

//   },
//     {
//     name:'Emad El-Refaey Mohamed ',
//     age: 21,
//     email:"Emad@gmail.com",
//     password: "Emad123",
//     rfid_code: 123,
//     qr_code:122,


//   },
//     {
//     name:'Ahmed Samy Salah ',
//     age: 21,
//     email:"Ahmed@gmail.com",
//     password: "Ahmed123",
//     rfid_code: 123,
//     qr_code:122,
  

//   },
//   {
//     name:'Abdullah Saber Abdullah',
//     age: 21,
//     email:"Abdullah@gmail.com",
//     password: "Abdullah123",
//     rfid_code: 123,
//     qr_code:122,
  

//   },
//   {
//     name:'Roaa Samir Mohammed ',
//     age: 21,
//     email:"Roaa@gmail.com",
//     password: "Roaa1811",
//     rfid_code: 123,
//     qr_code:122,
  

//   },
//   {
//     name:'Reem Farghaly Monagy ',
//     age: 21,
//     email:"Reem@gmail.com",
//     password: "Reem123",
//     rfid_code: 123,
//     qr_code:122,
  

//   },
//   {
//     name:'Noura Nagi Sayed',
//     age: 21,
//     email:"Noura@gmail.com",
//     password: "Nora123",
//     rfid_code: 123,
//     qr_code:122,
  

//   },
//   {
//     name:'Alaa Khaled Saadeldin ',
//     age: 21,
//     email:"Alaa@gmail.com",
//     password: "Alaa123",
//     rfid_code: 123,
//     qr_code:122,
  

//   },
//   {
//     name:'Hadeer Abdelmaged Badr ',
//     age: 21,
//     email:"Hadeer@gmail.com",
//     password: "Hadeer123",
//     rfid_code: 123,
//     qr_code:122,
  

//   },
//   {
//     name:'Neamat Hassan Ezzat ',
//     age: 21,
//     email:"Neamat@gmail.com",
//     password: "Neamat123",
//     rfid_code: 123,
//     qr_code:122,
  

//   }],(error,data)=>{
//      if(error){
//       console.log('unable to insert data')
//      }
//      console.log(data.insertedCount)
//     //  insertmany داخل ال insertedcount عشان تجبلي عددهم //
//   }
// )


// });

// import express from "express";
// import mongoose from "mongoose";
// import moment from "moment";

// const app = express();
// app.use(express.json());

// // 🧾 1. تعريف نموذج الموظف
// const EmployeeSchema = new mongoose.Schema({
//   name: String,
//   qr_code: String,
// });
// const Employee = mongoose.model("Employee", EmployeeSchema);

// // 🕒 2. تعريف نموذج الحضور
// const AttendanceSchema = new mongoose.Schema({
//   employee_id: String,
//   date: String,
//   time: String,
//   method: String,
//   status: String,
// });
// const Attendance = mongoose.model("Attendance", AttendanceSchema);

// // 📲 3. API استقبال الـ QR لما يتعمله Scan
// app.post("/api/scan", async (req, res) => {
//   try {
//     // البيانات اللي جاية من الموبايل أو جهاز المسح
//     const { qr_code } = req.body;

//     // نبحث عن الموظف اللي ليه الكود ده
//     const employee = await Employee.findOne({ qr_code });

//     if (!employee) {
//       return res.status(404).json({ message: "الموظف غير موجود 🚫" });
//     }

//     // لو الموظف موجود → نضيف سجل حضور جديد
//     const now = moment();
//     const newAttendance = new Attendance({
//       employee_id: employee._id,
//       date: now.format("YYYY-MM-DD"),
//       time: now.format("HH:mm:ss"),
//       method: "QR",
//       status: "Present",
//     });

//     await newAttendance.save();

//     res.json({
//       message: `تم تسجيل حضور ${employee.name} بنجاح ✅`,
//       attendance: newAttendance,
//     });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.listen(3000, () => console.log("Server running on port 3000"));


/////////////////////////////////////////////////////////////////////////////////////
// import mongoose from "mongoose";
// import express from "express";
// import moment from "moment";

// // اتصال بقاعدة البيانات
// mongoose.connect("mongodb://localhost:27017/project")
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.log("❌ Connection Error:", err));

// const app = express();
// app.use(express.json());

// // 1️⃣ تعريف نموذج الموظف
// const employeeSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   email: String,
//   password: String,
//   rfid_code: Number,
//   qr_code: Number,
// });

// const Employee = mongoose.model("Employee", employeeSchema);

// // 2️⃣ إدخال بيانات الموظفين مرة واحدة (insertMany)
// async function insertEmployees() {
//   try {
//     const employees = [
//       {
//         name: 'Zyad Elsayed Husseiny',
//         age: 21,
//         email: "Zyad@gmail.com",
//         password: "Zyad123",
//         rfid_code: 123,
//         qr_code: 122,
//       },
//       {
//         name: 'Youssef Samy Naim',
//         age: 21,
//         email: "Youssef@gmail.com",
//         password: "Youssef123",
//         rfid_code: 123,
//         qr_code: 122,
//       },
//       {
//         name: 'Emad El-Refaey Mohamed',
//         age: 21,
//         email: "Emad@gmail.com",
//         password: "Emad123",
//         rfid_code: 123,
//         qr_code: 122,
//       },
//       {
//         name: 'Ahmed Samy Salah',
//         age: 21,
//         email: "Ahmed@gmail.com",
//         password: "Ahmed123",
//         rfid_code: 123,
//         qr_code: 122,
//       },
//       {
//         name: 'Abdullah Saber Abdullah',
//         age: 21,
//         email: "Abdullah@gmail.com",
//         password: "Abdullah123",
//         rfid_code: 123,
//         qr_code: 122,
//       },
//       {
//         name: 'Roaa Samir Mohammed',
//         age: 21,
//         email: "Roaa@gmail.com",
//         password: "Roaa1811",
//         rfid_code: 123,
//         qr_code: 122,
//       },
//       {
//         name: 'Reem Farghaly Monagy',
//         age: 21,
//         email: "Reem@gmail.com",
//         password: "Reem123",
//         rfid_code: 123,
//         qr_code: 122,
//       },
//       {
//         name: 'Noura Nagi Sayed',
//         age: 21,
//         email: "Noura@gmail.com",
//         password: "Nora123",
//         rfid_code: 123,
//         qr_code: 122,
//       },
//       {
//         name: 'Alaa Khaled Saadeldin',
//         age: 21,
//         email: "Alaa@gmail.com",
//         password: "Alaa123",
//         rfid_code: 123,
//         qr_code: 122,
//       },
//       {
//         name: 'Hadeer Abdelmaged Badr',
//         age: 21,
//         email: "Hadeer@gmail.com",
//         password: "Hadeer123",
//         rfid_code: 123,
//         qr_code: 122,
//       },
//       {
//         name: 'Neamat Hassan Ezzat',
//         age: 21,
//         email: "Neamat@gmail.com",
//         password: "Neamat123",
//         rfid_code: 123,
//         qr_code: 122,
//       }
//     ];

//     const result = await Employee.insertMany(employees);
//     console.log(`✅ تم إدخال ${result.length} موظف`);
//   } catch (error) {
//     console.log("❌ خطأ أثناء الإدخال:", error);
//   }
// }

// // 🟢 شغلي الدالة دي مرة واحدة بس لإضافة البيانات
// // insertEmployees();

// // 3️⃣ تعريف نموذج الحضور
// const attendanceSchema = new mongoose.Schema({
//   employee_id: String,
//   date: String,
//   time: String,
//   method: String,
//   status: String,
// });
// const Attendance = mongoose.model("Attendance", attendanceSchema);

// // 4️⃣ API لتسجيل الحضور لما يتعمل Scan
// app.post("/api/scan", async (req, res) => {
//   try {
//     const { qr_code } = req.body;
//     const employee = await Employee.findOne({ qr_code });

//     if (!employee) return res.status(404).json({ message: "الموظف غير موجود 🚫" });

//     const now = moment();
//     const attendance = new Attendance({
//       employee_id: employee._id,
//       date: now.format("YYYY-MM-DD"),
//       time: now.format("HH:mm:ss"),
//       method: "QR",
//       status: "Present",
//     });

//     await attendance.save();
//     res.json({ message: `تم تسجيل حضور ${employee.name} ✅`, attendance });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// app.listen(3000, () => console.log("🚀 Server running on port 3000"));

/////////////////////////////////////////////////////////////////////////


// import mongoose from "mongoose";
// import express from "express";
// import moment from "moment";
// import QRCode from "qrcode";
// const port =process.env.PORT || 3000


// const app = express();
// app.use(express.json());

// // 📦 الاتصال بقاعدة البيانات
// mongoose.connect("mongodb://localhost:27017/project")
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.log("❌ Connection Error:", err));


// // 🧾 نموذج الموظف
// const employeeSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   email: String,
//   password: String,
//   rfid_code: Number,
//   qr_code: Number,
// });

// const Employee = mongoose.model("Employee", employeeSchema);


// // 🕒 نموذج الحضور والانصراف
// const attendanceSchema = new mongoose.Schema({
//   employee_id: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: "Employee"
//   },
//   date: String,
//   time_in: String,
//   time_out: String,
//   method: String,
// });


// const Attendance = mongoose.model("Attendance", attendanceSchema);


// // 👨‍💻 إدخال بيانات الموظفين (تشغليها أول مرة فقط)
// async function insertEmployees() {
//   try {
//     const employees = [
//        { name: 'Mahmoud Rihan Morgan', age: 40, email: "Mahmoud@gmail.com", password: "Mahmoud123", rfid_code: 110, qr_code: 100},
//       { name: 'Zyad Elsayed Husseiny', age: 21, email: "Zyad@gmail.com", password: "Zyad123", rfid_code: 111, qr_code: 101 },
//       { name: 'Youssef Samy Naim', age: 21, email: "Youssef@gmail.com", password: "Youssef123", rfid_code: 112, qr_code: 102 },
//       { name: 'Emad El-Refaey Mohamed', age: 21, email: "Emad@gmail.com", password: "Emad123", rfid_code: 113, qr_code: 103 },
//       { name: 'Ahmed Samy Salah', age: 21, email: "Ahmed@gmail.com", password: "Ahmed123", rfid_code: 114, qr_code: 104 },
//       { name: 'Abdullah Saber Abdullah', age: 21, email: "Abdullah@gmail.com", password: "Abdullah123", rfid_code: 115, qr_code: 105 },
//       { name: 'Roaa Samir Mohammed', age: 21, email: "Roaa@gmail.com", password: "Roaa1811", rfid_code: 116, qr_code: 106 },
//       { name: 'Reem Farghaly Monagy', age: 21, email: "Reem@gmail.com", password: "Reem123", rfid_code: 117, qr_code: 107 },
//       { name: 'Noura Nagy Sayed', age: 21, email: "Noura@gmail.com", password: "Nora123", rfid_code: 118, qr_code: 108 },
//       { name: 'Alaa Khaled Saadeldin', age: 21, email: "Alaa@gmail.com", password: "Alaa123", rfid_code: 119, qr_code: 109 },
//       { name: 'Hadeer Abdelmaged Badr', age: 21, email: "Hadeer@gmail.com", password: "Hadeer123", rfid_code: 120, qr_code: 110 },
//       { name: 'Neamat Hassan Ezzat', age: 21, email: "Neamat@gmail.com", password: "Neamat123", rfid_code: 121, qr_code: 111 },
//     ];

//     await Employee.insertMany(employees);
//     console.log("✅ تم إدخال الموظفين بنجاح");
//   } catch (error) {
//     console.log("⚠️ البيانات موجودة بالفعل أو حدث خطأ أثناء الإدخال");
//   }
// }
// // ⛔️ شغليها مرة واحدة فقط
// // insertEmployees();


// // 📲 تسجيل الحضور أو الانصراف

// async function recordAttendance(qr_code, method = "QR") {
//   try {
//     const employee = await Employee.findOne({ qr_code });
//     if (!employee) return console.log("🚫 الموظف غير موجود");

//     const today = moment().format("YYYY-MM-DD");
//     const currentTime = moment().format("HH:mm:ss");

//     let attendance = await Attendance.findOne({
//       employee_id: employee._id,
//       date: today,
//     });

//     if (!attendance) {
//       attendance = new Attendance({
//         employee_id: employee._id,
//         date: today,
//         time_in: currentTime,
//         time_out: "",
//         method,
//       });
//       await attendance.save();
//       console.log(`✅ تم تسجيل حضور ${employee.name} الساعة ${currentTime}`);
//     } else if (!attendance.time_out) {
//       attendance.time_out = currentTime;
//       await attendance.save();
//       console.log(`👋 تم تسجيل انصراف ${employee.name} الساعة ${currentTime}`);
//     } else {
//       console.log(`⚠️ ${employee.name} أنهى يومه بالفعل`);
//     }
//   } catch (err) {
//     console.log("❌ خطأ أثناء تسجيل الحضور/الانصراف:", err.message);
//   }
// }


// // 🔗 API بيستقبل الكود من صفحة HTML بعد عمل Scan
// app.post("/api/scan", async (req, res) => {
//   try {
//     const { qr_code } = req.body;

//     if (!qr_code) {
//       return res.status(400).json({ message: "QR code مفقود ❌" });
//     }

//     await recordAttendance(qr_code, "QR");

//     res.json({ message: "تم تسجيل الحضور أو الانصراف بنجاح ✅" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "حدث خطأ أثناء التسجيل ❌" });
//   }
// });
// // /////////////////////////////////////////////////////////////////////////////////////

// // 📸 عرض صفحة HTML فيها QR لكل موظف





// app.get("/employees", async (req, res) => {
//   try {
//     const employees = await Employee.find();

//     // توليد أكواد QR لكل موظف
//     const employeeQRs = await Promise.all(
//   employees.map(async (emp) => {
//     // اللينك اللي هيتخزن جوه الـ QR
//     // الخط ده فوق، بعد تعريف الموظف أو داخل loop الموظفين


// // بعدين

// const qrLink = `${publicUrl}/api/scan?qr_code=${emp.qr_code}`;

// // زي ما كان
// const qrImage = await QRCode.toDataURL(qrLink);

//     return {
//       name: emp.name,
//       email: emp.email,
//       qr_code: emp.qr_code,
//       qrImage,
//       qrLink, // نضيف اللينك علشان نعرضه لو حبيتي
//     };
//   })
// );


//     // HTML بسيط لعرض الموظفين مع الكود
//     let html = `
//       <html>
//       <head>
//         <meta charset="UTF-8">
//         <title>Employee QR Codes</title>
//         <style>
//           body { font-family: Arial; background:#f8f9fa; padding:30px; }
//           .card {
//             background: white; border-radius: 10px; box-shadow: 0 0 5px rgba(0,0,0,0.1);
//             padding: 15px; margin: 10px; display: inline-block; text-align: center;
//             width: 200px;
//           }
//           img { width: 150px; height: 150px; margin-top: 10px; }
//         </style>
//       </head>
//       <body>
//         <h2>Employee QR Codes</h2>
//         ${employeeQRs.map(emp => `
//           <div class="card">
//             <strong>${emp.name}</strong><br>
//             <small>${emp.email}</small><br>
//             <img src="${emp.qrImage}" alt="QR for ${emp.name}">
//           </div>
//         `).join("")}
//       </body>
//       </html>
//     `;

//     res.send(html);
//   } catch (err) {
//     res.status(500).send("حدث خطأ أثناء تحميل الصفحة ❌");
//   }
 
// });
// app.get("/", (req, res) => {
//   res.redirect("/employees");
// });

// app.get("/api/scan", async (req, res) => {
//   const { qr_code } = req.query;
//   if (!qr_code) return res.send("QR code مفقود ❌");

//   await recordAttendance(qr_code, "QR");
//   res.send("✅ تم تسجيل الحضور أو الانصراف بنجاح!");
// });


// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// });



// 🚀 تشغيل السيرفر

// ////////////////////////////////////////////////////////////////////////////////////////

// import mongoose from "mongoose";
// import express from "express";
// import moment from "moment";
// import QRCode from "qrcode";

// const port = process.env.PORT || 3000; // ✅ حروف كبيرة

// const app = express();
// app.use(express.json());

// // 📦 الاتصال بقاعدة البيانات
// mongoose.connect("mongodb://localhost:27017/project")
//   .then(() => console.log("✅ Connected to MongoDB"))
//   .catch((err) => console.log("❌ Connection Error:", err));

// // 🧾 نموذج الموظف
// const employeeSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
//   email: String,
//   password: String,
//   rfid_code: Number,
//   qr_code: Number,
// });
// const Employee = mongoose.model("Employee", employeeSchema);

// // 🕒 نموذج الحضور والانصراف
// const attendanceSchema = new mongoose.Schema({
//   employee_id: String,
//   date: String,
//   time_in: String,
//   time_out: String,
//   method: String,
// });
// const Attendance = mongoose.model("Attendance", attendanceSchema);

// // 👨‍💻 إدخال بيانات الموظفين (تشغليها أول مرة فقط)
// async function insertEmployees() {
//   try {
//     const employees = [

//       { name: 'Zyad Elsayed Husseiny', age: 21, email: "Zyad@gmail.com", password: "Zyad123", rfid_code: 111, qr_code: 101 },
//       { name: 'Youssef Samy Naim', age: 21, email: "Youssef@gmail.com", password: "Youssef123", rfid_code: 112, qr_code: 102 },
//       { name: 'Emad El-Refaey Mohamed', age: 21, email: "Emad@gmail.com", password: "Emad123", rfid_code: 113, qr_code: 103 },
//       { name: 'Ahmed Samy Salah', age: 21, email: "Ahmed@gmail.com", password: "Ahmed123", rfid_code: 114, qr_code: 104 },
//       { name: 'Abdullah Saber Abdullah', age: 21, email: "Abdullah@gmail.com", password: "Abdullah123", rfid_code: 115, qr_code: 105 },
//       { name: 'Roaa Samir Mohammed', age: 21, email: "Roaa@gmail.com", password: "Roaa1811", rfid_code: 116, qr_code: 106 },
//       { name: 'Reem Farghaly Monagy', age: 21, email: "Reem@gmail.com", password: "Reem123", rfid_code: 117, qr_code: 107 },
//       { name: 'Noura Nagi Sayed', age: 21, email: "Noura@gmail.com", password: "Nora123", rfid_code: 118, qr_code: 108 },
//       { name: 'Alaa Khaled Saadeldin', age: 21, email: "Alaa@gmail.com", password: "Alaa123", rfid_code: 119, qr_code: 109 },
//       { name: 'Hadeer Abdelmaged Badr', age: 21, email: "Hadeer@gmail.com", password: "Hadeer123", rfid_code: 120, qr_code: 110 },
//       { name: 'Neamat Hassan Ezzat', age: 21, email: "Neamat@gmail.com", password: "Neamat123", rfid_code: 121, qr_code: 111 },
//     ];

//     await Employee.insertMany(employees);
//     console.log("✅ تم إدخال الموظفين بنجاح");
//   } catch (error) {
//     console.log("⚠️ البيانات موجودة بالفعل أو حدث خطأ أثناء الإدخال");
//   }
// }
// // ⛔️ شغليها مرة واحدة فقط
// // insertEmployees();


// // 📲 تسجيل الحضور أو الانصراف
// async function recordAttendance(qr_code, method = "QR") {
//   try {
//     const employee = await Employee.findOne({ qr_code });
//     if (!employee) return console.log("🚫 الموظف غير موجود");

//     const today = moment().format("YYYY-MM-DD");
//     const currentTime = moment().format("HH:mm:ss");

//     let attendance = await Attendance.findOne({ employee_id: employee._id, date: today });

//     if (!attendance) {
//       attendance = new Attendance({
//         employee_id: employee._id,
//         date: today,
//         time_in: currentTime,
//         time_out: "",
//         method,
//       });
//       await attendance.save();
//       console.log(` تم تسجيل حضور ${employee.name} الساعة ${currentTime}`);
//     } else if (!attendance.time_out) {
//       attendance.time_out = currentTime;
//       await attendance.save();
//       console.log(`تم تسجيل انصراف ${employee.name} الساعة ${currentTime}`);
//     } else {
//       console.log(` ${employee.name} أنهى يومه بالفعل`);
//     }
//   } catch (err) {
//     console.log(" خطأ أثناء تسجيل الحضور/الانصراف:", err.message);
//   }
// }


// // 🔗 API بيستقبل الكود من صفحة HTML بعد عمل Scan
// app.post("/api/scan", async (req, res) => {
//   try {
//     const { qr_code } = req.body;
//     if (!qr_code) {
//       return res.status(400).json({ message: "QR code مفقود " });
//     }
//     await recordAttendance(qr_code, "QR");
//     res.json({ message: "تم تسجيل الحضور أو الانصراف بنجاح " });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "حدث خطأ أثناء التسجيل " });
//   }
// });


// // 📸 عرض صفحة HTML فيها QR لكل موظف
// app.get("/employees", async (req, res) => {
//   try {
//     const employees = await Employee.find();

//     const employeeQRs = await Promise.all(
//       employees.map(async (emp) => {
//         const qrLink = `http://localhost:3000/api/scan?qr_code=${emp.qr_code}`;
//         const qrImage = await QRCode.toDataURL(qrLink);
//         return {
//           name: emp.name,
//           email: emp.email,
//           qr_code: emp.qr_code,
//           qrImage,
//           qrLink,
//         };
//       })
//     );

//     let html = `
//       <html>
//       <head>
//         <meta charset="UTF-8">
//         <title>Employee QR Codes</title>
//         <style>
//           body { font-family: Arial; background:#f8f9fa; padding:30px; }
//           .card {
//             background: white; border-radius: 10px; box-shadow: 0 0 5px rgba(0,0,0,0.1);
//             padding: 15px; margin: 10px; display: inline-block; text-align: center;
//             width: 200px;
//           }
//           img { width: 150px; height: 150px; margin-top: 10px; }
//         </style>
//       </head>
//       <body>
//         <h2>Employee QR Codes</h2>
//         ${employeeQRs.map(emp => `
//           <div class="card">
//             <strong>${emp.name}</strong><br>
//             <small>${emp.email}</small><br>
//             <img src="${emp.qrImage}" alt="QR for ${emp.name}">
//           </div>
//         `).join("")}
//       </body>
//       </html>
//     `;
//     res.send(html);
//   } catch (err) {
//     res.status(500).send("حدث خطأ أثناء تحميل الصفحة ");
//   }
// });


// // 📄 الصفحة الرئيسية
// app.get("/", (req, res) => {
//   res.redirect("/employees");
// });

// // 🧾 لما يتم عمل Scan
// app.get("/api/scan", async (req, res) => {
//   const { qr_code } = req.query;
//   if (!qr_code) return res.send("QR code مفقود ");
//   await recordAttendance(qr_code, "QR");
//   res.send(" تم تسجيل الحضور أو الانصراف بنجاح!");
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// // });
// ////////////////////////////////////////////////////////
import mongoose from "mongoose";
import express from "express";
import moment from "moment";
import QRCode from "qrcode";




const port = process.env.PORT || 3000; // 

const app = express();
// TO PARSE AUTOMATICALLY FROM OBJECT TO JSON //
app.use(express.json());

// الاتصال بقاعدة البيانات //
mongoose.connect("mongodb://mongo:srgvGqEgpjKJoQKowTJIjhRScfvaPSEV@trolley.proxy.rlwy.net:44787")

  .then(() => console.log(" Connected to MongoDB"))
  .catch((err) => console.log("Connection Error:", err));

  // ///////////////////////////////////////////////////////////////
// نموذج الموظف //
const employeeSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  password: String, 
  // عشان مقيدهوش //
  rfid_code: Number,
  qr_code: Number,
});
const Employee = mongoose.model("Employee", employeeSchema);

// نموذج الحضور والانصراف
const attendanceSchema = new mongoose.Schema({
  employee_id: String,
  date: String,
  time_in: String,
  time_out: String,
  method: String,
});
const Attendance = mongoose.model("Attendance", attendanceSchema);

//  إدخال بيانات الموظفين (تشغليها أول مرة فقط)
async function insertEmployees() {
  try {
    const employees = [
      { name: 'DR_Mahmoud Rihan Morgan', age: 45, email: "Mahmoud@gmail.com", password: "Mahmoud123", rfid_code: 110, qr_code: 100},
      { name: 'Zyad Elsayed Husseiny', age: 21, email: "Zyad@gmail.com", password: "Zyad123", rfid_code: 111, qr_code: 101 },
      { name: 'Youssef Samy Naim', age: 21, email: "Youssef@gmail.com", password: "Youssef123", rfid_code: 112, qr_code: 102 },
      { name: 'Emad ElRefaey Mohamed', age: 21, email: "Emad@gmail.com", password: "Emad123", rfid_code: 113, qr_code: 103 },
      { name: 'Ahmed Samy Salah', age: 21, email: "Ahmed@gmail.com", password: "Ahmed123", rfid_code: 114, qr_code: 104 },
      { name: 'Abdullah Saber Abdullah', age: 21, email: "Abdullah@gmail.com", password: "Abdullah123", rfid_code: 115, qr_code: 105 },
      { name: 'Roaa Samir Mohammed', age: 21, email: "Roaa@gmail.com", password: "Roaa1811", rfid_code: 116, qr_code: 106 },
      { name: 'Noura Nagi Sayed', age: 21, email: "Noura@gmail.com", password: "Nora123", rfid_code: 117, qr_code: 107 },
      { name: 'Reem Farghaly Mongy', age: 21, email: "Reem@gmail.com", password: "Reem123", rfid_code: 118, qr_code: 108 },
      { name: 'Alaa Khaled Saadeldin', age: 21, email: "Alaa@gmail.com", password: "Alaa123", rfid_code: 119, qr_code: 109 },
      { name: 'Hadeer Abdelhamid Badr', age: 21, email: "Hadeer@gmail.com", password: "Hadeer123", rfid_code: 120, qr_code: 110 },
      { name: 'Neamat Hassan Ezzat', age: 21, email: "Neamat@gmail.com", password: "Neamat123", rfid_code: 121, qr_code: 111 },
    ];

    await Employee.insertMany(employees);
    console.log(" تم إدخال الموظفين بنجاح");
  } catch (error) {
    console.log("البيانات موجودة بالفعل أو حدث خطأ أثناء الإدخال");
  }
}
//  شغليها مرة واحدة فقط
// insertEmployees();


// تسجيل الحضور أو الانصراف
async function recordAttendance(qr_code, method = "QR") {
  try {
    const employee = await Employee.findOne({ qr_code });
    if (!employee) return console.log(" الموظف غير موجود");

    const today = moment().format("YYYY-MM-DD");
    const currentTime = moment().format("HH:mm:ss");

    let attendance = await Attendance.findOne({ employee_id: employee._id, date: today });

    if (!attendance) {
      attendance = new Attendance({
        employee_id: employee._id,
        date: today,
        time_in: currentTime,
        time_out: "",
        method,
      });
      await attendance.save();
      console.log(`تم تسجيل حضور ${employee.name} الساعة ${currentTime}`);
    } else if (!attendance.time_out) {
      attendance.time_out = currentTime;
      await attendance.save();
      console.log(` تم تسجيل انصراف ${employee.name} الساعة ${currentTime}`);
    } else {
      console.log(` ${employee.name} أنهى يومه بالفعل`);
    }
  } catch (err) {
    console.log("خطأ أثناء تسجيل الحضور/الانصراف:", err.message);
  }
}


// API بيستقبل الكود من صفحة HTML بعد عمل Scan
app.post("/api/scan", async (req, res) => {
  try {
    const { qr_code } = req.body;
    if (!qr_code) {
      return res.status(400).json({ message: "QR code مفقود " });
    }
    await recordAttendance(qr_code, "QR");
    res.json({ message: "تم تسجيل الحضور أو الانصراف بنجاح " });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "حدث خطأ أثناء التسجيل " });
  }
});


// لكل موظف QR فيها  HTML عرض صفحة //
const publicUrl = "https://attendance-system-production-9d3c.up.railway.app/employees";

app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find();

    const employeeQRs = await Promise.all(
      employees.map(async (emp) => {
       const qrLink = `https://attendance-system-production-9d3c.up.railway.app/employees.app/api/scan?qr_code=${emp.qr_code}`;



       
        const qrImage = await QRCode.toDataURL(qrLink);
        return {
          name: emp.name,
          email: emp.email,
          qr_code: emp.qr_code,
          qrImage,
          qrLink,
        };
      })
    );
// //////////////////////////////////////////////////////////////////////////////////
    let html = `
      <html>
      <head>
        <meta charset="UTF-8">
        <title>Employee QR Codes</title>
        <style>
          body { font-family: Arial; background:#f8f9fa; padding:30px; }
          .card {
            background: white; border-radius: 10px; box-shadow: 0 0 5px rgba(0,0,0,0.1);
            padding: 15px; margin: 10px; display: inline-block; text-align: center;
            width: 200px;
          }
          img { width: 150px; height: 150px; margin-top: 10px; }
        </style>
      </head>
      <body>
        <h2>Employee QR Codes</h2>
        ${employeeQRs.map(emp => `
          <div class="card">
            <strong>${emp.name}</strong><br>
            <small>${emp.email}</small><br>
            <img src="${emp.qrImage}" alt="QR for ${emp.name}">
          </div>
        `).join("")}
      </body>
      </html>
    `;
    res.send(html);
  } catch (err) {
    res.status(500).send("حدث خطأ أثناء تحميل الصفحة ");
  }
});


// الصفحة الرئيسية
app.get("/", (req, res) => {
  res.redirect("/employees");
});

// // scan لما اعمل //
app.get('/api/scan', async (req, res) => {
  try {
    const employeeId = req.query.employeeId;

    if (!employeeId) {
      return res.send(`
        <h2>❌ لم يتم العثور على رقم الموظف</h2>
        <p>يرجى التأكد من الرابط</p>
      `);
    }

    // هنا الكود اللي بيسجل الحضور أو الانصراف
    // ...

    res.send(`
      <h2>✅ تم تسجيل الحضور بنجاح!</h2>
      <p>شكراً لاستخدامك النظام.</p>
    `);
  } catch (error) {
    res.send(`<h2>❌ حدث خطأ أثناء معالجة الطلب</h2><pre>${error.message}</pre>`);
  }
});




////////////////////////////////////////////////////////////////////////////////

app.listen(port, "0.0.0.0", () => {
  console.log("Server running on  port ${port}");
});



