import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import process from "node:process";

const team = [
  "Jens",
  "Stephan",
  "Tim",
  "Jonathan",
  "Yashas",
  "Nicole",
  "Christian",
];

const loadingText = [
  "Wellll this is *slightly* more complicated than expected...",
  "HOUSTON, WE HAVE ACHIEVED PEAK IMPOSSIBILITY! 🚀💥",
  "I'm not sure if I can do this... 🤔",
  "Seriously? That's ALL we could find?",
];

const loadingAnimation = async (
  duration: number,
  speed: number,
  loadingText: string[],
  repetitions: number
) => {
  const animationItems = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const frames = Math.floor(duration / speed);

  for (let i = 0; i < repetitions; i++) {
    for (let f = 0; f < frames; f++) {
      process.stdout.write(
        `\r${animationItems[f % animationItems.length]} ${
          loadingText[i]
        }${" ".repeat(30)}`
      );
      await sleep(speed);
    }
  }
  process.stdout.write("\r"); // Clear the line when done
};

// const wheelOfFortune = (team) => {
//   const idFirstModerator = Math.floor(Math.random() * team.length);
//   const moderator1 = team[idFirstModerator];
//   const newArray = team.filter((name) => name !== moderator1);
//   const moderator2 = newArray[Math.floor(Math.random() * newArray.length) + 1];
//   console.log(moderator1, moderator2);
// };

// The functional programming approach
const wheelOfShuffling = async (team: string[]) => {
  if (team.length < 2) {
    throw new Error("Team must have at least two members");
  }

  const moderators = [...team].sort(() => Math.random() - 0.5).slice(0, 2);
  const rl = readline.createInterface({ input, output });

  await rl.question(
    "So, you need new moderators? Again? How were the last ones? That bad? "
  );
  const speed = 100;
  const duration = 3000;
  const repetitions = 4;

  await loadingAnimation(duration, speed, loadingText, repetitions);

  console.log(
    "I give up! I can't do this anymore! I'm done! Let's just go with these two:",
    ...moderators
  );
  rl.close();
};
wheelOfShuffling(team);
