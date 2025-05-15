import { model, Schema } from 'mongoose';

const CommentSchema = Schema({
  postId: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: [true, 'El ID de la publicación es requerido']
  },
  userName: {
    type: String,
    required: [true, 'El nombre de usuario es requerido'],
    trim: true,
    maxlength: [50, 'El nombre no puede exceder los 50 caracteres']
  },
  content: {
    type: String,
    required: [true, 'El contenido del comentario es requerido'],
    trim: true,
    maxlength: [500, 'El comentario no puede exceder los 500 caracteres']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default model('Comment', CommentSchema);