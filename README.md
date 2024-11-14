# The 🦕 Moderation Wheel

A hilariously over-dramatic Deno CLI tool that helps you pick moderators while having an existential crisis.

## Features ✨

- Picks two random moderators from your team
- Includes sassy loading animations
- Provides emotional support (kind of)
- Makes simple tasks look unnecessarily complicated
- Guaranteed to make your team selection process at least 427% more dramatic

## Installation 🚀

```bash
git https://github.com/your-name/moderation-wheel
cd moderation-wheel
```

## Usage 💫

```bash
deno --allow-env main.ts
```

Then sit back and watch as the script:

1. Questions your life choices
2. Has a minor breakdown
3. Eventually picks two moderators
4. Gives up dramatically

## Code Example 💻

```typescript
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import process from "node:process";

const team = [
  "Team Member L",
  "Team Member E",
  "Team Member E",
  "Team Member T",
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
  process.stdout.write("\r");
};

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
```

## Loading States 🤪

The script goes through various emotional states:

- Mild confusion
- Complete despair
- Existential doubt
- Sarcastic resignation

## Technical Details 🤓

- Written in TypeScript for Deno 🦕
- Uses Deno's standard library
- Features a fancy spinning animation
- Employs state-of-the-art randomization (Math.random() - very cutting edge!)
- Includes gratuitous use of emojis

## Requirements 📋

- Deno (latest version)
- A sense of humor
- Emotional stability (recommended)
- Coffee (optional but highly recommended)

## Contributing 🤝

Feel free to contribute! Just be prepared for the code to sass you back.

1. Fork it
2. Create your feature branch
3. Question all your life decisions
4. Submit a pull request

## License 📜

MIT License - Because sharing is caring, even when it's slightly chaotic code.

## Author ✍️

Kevin Heyland - _Initial work_ - Creator of unnecessarily dramatic code

## Acknowledgments 🙏

- Coffee
- The entire team which inspired this masterpiece of overengineering
- The Deno 🦕 team for making TypeScript even more fun
