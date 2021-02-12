const db = require("../models");
const { Sequelize } = require("../models");


Sequelize.connect(
  process.env.Node_ENV || "development"
);

const postSeed = [
  {
    thumbnail: "",
    body: [
      "Car rides are evil chase ball of string yet what the heck just happened, something feels fishy. I shredded your linens for you bite nose of your human but catasstrophe bite nose of your human reaches under door into adjacent room and jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans eat from dog's food. Munch on tasty moths. Thinking longingly about tuna brine tweeting a baseball and take a deep sniff of sock then walk around with mouth half open for miaow then turn around and show you my bum. Oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap. Grab pompom in mouth and put in water dish fish i must find my red catnip fishy fish, or sleep nap your pillow is now my pet bed damn that dog . Meow for food, then when human fills food dish, take a few bites of food and continue meowing when owners are asleep, cry for no apparent reason i just saw other cats inside the house and nobody ask me before using my litter box wake up human for food at 4am. Is good you understand your place in my world stand in doorway, "
    ],
    title: "Stare out cat door then go back inside "
  },
  {
    thumbnail: "",
    body: [
      "Car rides are evil chase ball of string yet what the heck just happened, something feels fishy. I shredded your linens for you bite nose of your human but catasstrophe bite nose of your human reaches under door into adjacent room and jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans eat from dog's food. Munch on tasty moths. Thinking longingly about tuna brine tweeting a baseball and take a deep sniff of sock then walk around with mouth half open for miaow then turn around and show you my bum. Oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap. Grab pompom in mouth and put in water dish fish i must find my red catnip fishy fish, or sleep nap your pillow is now my pet bed damn that dog . Meow for food, then when human fills food dish, take a few bites of food and continue meowing when owners are asleep, cry for no apparent reason i just saw other cats inside the house and nobody ask me before using my litter box wake up human for food at 4am. Is good you understand your place in my world stand in doorway, "
    ],
    title: "Stare out cat door then go back inside "
  },
  {
    thumbnail: "",
    body: [
      "Car rides are evil chase ball of string yet what the heck just happened, something feels fishy. I shredded your linens for you bite nose of your human but catasstrophe bite nose of your human reaches under door into adjacent room and jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans eat from dog's food. Munch on tasty moths. Thinking longingly about tuna brine tweeting a baseball and take a deep sniff of sock then walk around with mouth half open for miaow then turn around and show you my bum. Oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap. Grab pompom in mouth and put in water dish fish i must find my red catnip fishy fish, or sleep nap your pillow is now my pet bed damn that dog . Meow for food, then when human fills food dish, take a few bites of food and continue meowing when owners are asleep, cry for no apparent reason i just saw other cats inside the house and nobody ask me before using my litter box wake up human for food at 4am. Is good you understand your place in my world stand in doorway, "
    ],
    title: "Stare out cat door then go back inside "
  },
  {
    thumbnail: "",
    body: [
      "Car rides are evil chase ball of string yet what the heck just happened, something feels fishy. I shredded your linens for you bite nose of your human but catasstrophe bite nose of your human reaches under door into adjacent room and jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans eat from dog's food. Munch on tasty moths. Thinking longingly about tuna brine tweeting a baseball and take a deep sniff of sock then walk around with mouth half open for miaow then turn around and show you my bum. Oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap. Grab pompom in mouth and put in water dish fish i must find my red catnip fishy fish, or sleep nap your pillow is now my pet bed damn that dog . Meow for food, then when human fills food dish, take a few bites of food and continue meowing when owners are asleep, cry for no apparent reason i just saw other cats inside the house and nobody ask me before using my litter box wake up human for food at 4am. Is good you understand your place in my world stand in doorway, "
    ],
    title: "Stare out cat door then go back inside "
  },
  {
    thumbnail: "",
    body: [
      "Car rides are evil chase ball of string yet what the heck just happened, something feels fishy. I shredded your linens for you bite nose of your human but catasstrophe bite nose of your human reaches under door into adjacent room and jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans eat from dog's food. Munch on tasty moths. Thinking longingly about tuna brine tweeting a baseball and take a deep sniff of sock then walk around with mouth half open for miaow then turn around and show you my bum. Oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap. Grab pompom in mouth and put in water dish fish i must find my red catnip fishy fish, or sleep nap your pillow is now my pet bed damn that dog . Meow for food, then when human fills food dish, take a few bites of food and continue meowing when owners are asleep, cry for no apparent reason i just saw other cats inside the house and nobody ask me before using my litter box wake up human for food at 4am. Is good you understand your place in my world stand in doorway, "
    ],
    title: "Stare out cat door then go back inside "
  },
  {
    thumbnail: "",
    body: [
      "Car rides are evil chase ball of string yet what the heck just happened, something feels fishy. I shredded your linens for you bite nose of your human but catasstrophe bite nose of your human reaches under door into adjacent room and jump on human and sleep on her all night long be long in the bed, purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans eat from dog's food. Munch on tasty moths. Thinking longingly about tuna brine tweeting a baseball and take a deep sniff of sock then walk around with mouth half open for miaow then turn around and show you my bum. Oooo! dangly balls! jump swat swing flies so sweetly to the floor crash move on wash belly nap. Grab pompom in mouth and put in water dish fish i must find my red catnip fishy fish, or sleep nap your pillow is now my pet bed damn that dog . Meow for food, then when human fills food dish, take a few bites of food and continue meowing when owners are asleep, cry for no apparent reason i just saw other cats inside the house and nobody ask me before using my litter box wake up human for food at 4am. Is good you understand your place in my world stand in doorway, "
    ],
    title: "Stare out cat door then go back inside "
  },
];

db.Post.remove({})
  .then(() => db.Posts.collection.insertMany(postSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
