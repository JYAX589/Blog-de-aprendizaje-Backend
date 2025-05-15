import { model, Schema } from 'mongoose';

const PostSchema = Schema({
  title: {
    type: String,
    required: [true, 'El título es requerido'],
    trim: true,
    maxlength: [100, 'El título no puede exceder los 100 caracteres']
  },
  description: {
    type: String,
    required: [true, 'La descripción es requerida'],
    trim: true
  },
  course: {
    type: String,
    required: [true, 'El curso es requerido'],
    enum: {
      values: ['Taller', 'TICs', 'Práctica Supervisada'],
      message: 'Curso no válido'
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Actualizar la fecha de modificación antes de guardar
PostSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default model('Post', PostSchema);

