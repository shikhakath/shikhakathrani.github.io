export type Writing = {
  slug: string; 
  title: string;
  blurb: string;
  link: string;
  //tag?: string; "essay", "reflection", etc
};

export const writings: Writing[] = [
    {
    slug: "computer-talk",
    title: "How Do Computers Talk To Each Other",
    blurb:
    "An Overview of Serial Communication Protocols + Eavesdropping on a Temperature Sensor!",
    link: "https://medium.com/@shikhakathrani/how-do-computers-talk-to-each-other-a9c5a5732198",
    //tag: "Essay",
    },
    {
    slug: "homeostasis-essay",
    title: "Homeostasis: How a Scientific Term Became an Emotional Compass",
    blurb:
      "Hoᐧmeᐧoᐧstaᐧsis refers to an organism’s ability to maintain a stable internal environment despite changes in external conditions...",
    link: "https://medium.com/@shikhakathrani/homeostasis-02e65d37768e",
    //tag: "Essay",
  },
  {
    slug: "kindness",
    title: "Kill'Em With Kindness: An Ode to My Housemates and Selena Gomez's Song",
    blurb:
      "In Gujarati, there is this phrase: *ghar, ghar jevu lage*, which quite literally translates to 'the house feels like home.'...",
    link: "https://medium.com/@shikhakathrani/kill-em-with-kindness-dbe3ffb9c95a",
    //tag: "Reflection",
  },
];
