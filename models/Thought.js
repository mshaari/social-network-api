// We not only have a Thought schema, but we create a Reaction schema. The Reaction schema never gets called as a model because it's a subdocument within the Thought schema
const { Schema, model, Types } = require('mongoose');

function formatTimestamp(input) {
  const time = new Date(input);
  return `${time.toDateString()} ${time.toLocaleTimeString()}`
}

// Create the schema for reactions. Though this will not become a model, it is used as the reaction field's subdocument in the Thought model below
// Example Data:
// {
//   "reactionBody": "Insert text here",
//   "username": "Username here",
// }
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      // Getter method to format date and time
      get: (timestamp) => formatTimestamp(timestamp),
    },
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    // This prevents an _id element from being created since we are already making a reactionId element
    _id: false,
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => formatTimestamp(timestamp),
    },
    username: {
      type: String,
      required: true,
    },
    // Array of nested documents created within reactionSchema above
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets number of reactions
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  })

// Initialize our Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
