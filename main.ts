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

const loadingAnimation1 = async (duration = 2000, speed = 100) => {
  const animationItems = ["/", "-", "\\", "|"];

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const frames = Math.floor(duration / speed);

  for (let i = 0; i < frames; i++) {
    process.stdout.write(
      `\r${
        animationItems[i % animationItems.length]
      } Seriously? That's ALL we could find? *dramatic sigh*`
    );
    await sleep(speed);
  }
  process.stdout.write("\r"); // Clear the line when done
};

const loadingAnimation2 = async (duration = 2000, speed = 100) => {
  const animationItems = ["/", "-", "\\", "|"];

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const frames = Math.floor(duration / speed);

  for (let i = 0; i < frames; i++) {
    process.stdout.write(
      `\r${
        animationItems[i % animationItems.length]
      } Wellll this is *slightly* more complicated than my tiny brain anticipated... 🙃`
    );
    await sleep(speed);
  }
  process.stdout.write("\r"); // Clear the line when done
};

const loadingAnimation3 = async (duration = 2000, speed = 100) => {
  const animationItems = ["/", "-", "\\", "|"];

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  const frames = Math.floor(duration / speed);

  for (let i = 0; i < frames; i++) {
    process.stdout.write(
      `\r${
        animationItems[i % animationItems.length]
      } HOUSTON, WE HAVE ACHIEVED PEAK IMPOSSIBILITY! 🚀💥 *SCREAMS IN JAVASCRIPT*`
    );
    await sleep(speed);
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
  await loadingAnimation1();
  await loadingAnimation2();
  await loadingAnimation3();

  console.log(
    "Oh suuuure, let's ask",
    ...moderators,
    "because they're just *sooooo* amazing at their jobs... 🙄✨"
  );
  rl.close();
};
wheelOfShuffling(team);
