const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  id: ObjectId,
  firstname: String,
  lastname: String,
  email: String
});