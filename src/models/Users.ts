import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new Schema({
  user_usuario: {
    type: String,
    maxLength: 25,
    required: true,
    unique: true,
  },
  user_password: {
    type: String,
    maxLength: 25,
    select: false,
    required: true,
  },
  user_nome: {
    type: String,
    maxLength: 50,
    required: true,
  },
  user_cpf: {
    type: String,
    maxLength: 11,
    validate: {
      validator: function isValidCPF(value: string) {
        if (typeof value !== "string") {
          return false;
        }

        value = value.replace(/[^\d]+/g, "");

        if (value.length !== 11 || !!value.match(/(\d)\1{10}/)) {
          return false;
        }

        const values = value.split("").map((el) => +el);
        const rest = (count: number) =>
          ((values
            .slice(0, count - 12)
            .reduce((soma, el, index) => soma + el * (count - index), 0) *
            10) %
            11) %
          10;

        return rest(10) === values[9] && rest(11) === values[10];
      },
      message: (props: { value: string }) =>
        `${props.value} não é um CPF válido !`,
    },
    unique: true,
  },
  user_fone: {
    type: Number,
    validate: {
      validator: function isValidFone(value: number) {
        // Exemplo de validação simples: deve ter 11 caracteres numéricos
        return /^[0-9]{11}$/.test(value.toString());
      },
      message: (props: { value: string }) =>
        `${props.value} não é um número de telefone válido!`,
    },
    unique: true,
  },
  user_email: {
    type: String,
    maxLength: 100,
    validate: {
      validator: function isValidEmail(value: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: (props: { value: string }) =>
        `${props.value} não é um e-mail válido!`,
    },
    unique: true,
  },
  user_created_at: {
    default: Date.now,
    type: Date,
    required: true,
  },
  user_updated_at: {
    default: Date.now,
    type: Date,
  },
});

export default mongoose.model("User", UserSchema, "usuarios");
