import mongoose from "mongoose";
const { Schema } = mongoose;

const CidadesSchema = new Schema({
  cid_nome: {
    type: String,
    maxLength: 45,
    required: true,
  },
  cid_est_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  cid_ibge: {
    type: Number,
    required: true,
    unique: true,
  },
  cid_created_at: {
    type: Date,
    default: Date.now,
    required: true,
  },
  cid_updated_at: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Cidades", CidadesSchema, "cidades");
