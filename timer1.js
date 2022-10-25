const times = process.argv.slice(2);

for (const time of times) {
  if (time > 0 && typeof time === "number") {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, time * 1000);
  }
}
