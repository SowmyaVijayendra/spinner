let delay = 100;
let characters = ["|", "/", "-", "\\",'|'];
let count = 1;
while (count < 3) {
  for (let i = 0; i < characters.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${characters[i]}   `);
    }, delay);
    delay += 200;
  }
  count++;
}
