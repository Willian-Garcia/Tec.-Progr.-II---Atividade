import mongoose from "mongoose";
const { Schema } = mongoose;

const EstadosSchema = new Schema({
  est_sigla: {
    type: String,
    minlength: 2,
    maxlength: 2,
    required: true,
    unique: true,
  },
  est_nome: {
    type: String,
    maxlength: 45,
    required: true,
    unique: true,
  },
  est_ibge: {
    type: Number,
    required: true,
    unique: true,
  },
  est_created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  est_updated_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Estados", EstadosSchema, "estados");
