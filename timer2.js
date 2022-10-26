const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", (key) => {
  if (key === "b") {
    process.stdout.write("\x07");
  } else if (key === "\u0003") {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  } else if (key <= 9 && key >= 1) {
    if (key >= 1 && key <= 9) {
      process.stdout.write(`setting timer for ${key} seconds...`);
      setTimeout(() => {
        process.stdout.write("\x07");
      }, key * 1000);
    }
  }
});

console.log(key);
