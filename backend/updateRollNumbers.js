require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/asec_admissions', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const studentSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  dob: String,
  course: String,
  category: String,
  rollNumber: { type: String, unique: true }
});

const Student = mongoose.model('Student', studentSchema);

function generateRollNumber() {
  const randomNum = Math.floor(100000 + Math.random() * 900000);
  return `asec${randomNum}`;
}

async function updateRollNumbers() {
  const students = await Student.find({ rollNumber: { $exists: false } });
  for (const student of students) {
    let rollNumber;
    let exists = true;
    while (exists) {
      rollNumber = generateRollNumber();
      exists = await Student.exists({ rollNumber });
    }
    student.rollNumber = rollNumber;
    await student.save();
    console.log(`Updated student ${student._id} with rollNumber ${rollNumber}`);
  }
  mongoose.disconnect();
}

updateRollNumbers();
