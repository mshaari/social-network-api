const connection = require('../config/connection');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
  await Thought.deleteMany({});
  await User.deleteMany({});

  // Array of users
  const users = [
    {
      username: "michaelShaari",
      email: "michael.shaari@gmail.com",
    },
    {
      username: "steveJobs",
      email: "steveJobs@gmail.com",
    },
    {
      username: "timCook",
      email: "timCook@gmail.com",
    },
    {
      username: "jeffBezos",
      email: "jeffBezos@gmail.com",
    }
  ];

  // Array of thoughts
  const thoughts = [
    {
      thoughtText: "Today is such a nice day, we should all go for a walk around Apple Park",
      username: "timCook",
      reactions: [
        {
          reactionBody: "That's a great idea, Tim",
          username: "steveJobs"
        }
      ]
    },
    {
      thoughtText: "Introducing iPhone",
      username: "steveJobs",
      reactions: [
        {
          reactionBody: "Legendary",
          username: "timCook"
        }
      ]
    },
    {
      thoughtText: "I am enjoying MongoDB, I find it super useful",
      username: "michaelShaari",
      reactions: [
        {
          reactionBody: "It is quite useful",
          username: "timCook"
        }
      ]
    },
    {
      thoughtText: "Fun fact... Amazon was started in a garage",
      username: "jeffBezos",
      reactions: [
        {
          reactionBody: "Crazy!",
          username: "steveJobs"
        }
      ]
    }
  ];
  
  // Load users
  await User.collection.insertMany(users);

  // Load thoughts and store them in an array
  const createdThoughts = await Thought.create(thoughts);

  // Loop through the thoughts and then add the thought IDs to the associated users who posted those thoughts
  for (let i = 0; i < createdThoughts.length; i++) {
    const thought = createdThoughts[i];

    await User.findOneAndUpdate(
      { username: thought.username },
      { $addToSet: { thoughts: thought._id } },
      { new: true }
    );
  };

  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
