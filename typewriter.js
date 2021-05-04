const sentence = "helolo";

let x = 300;
let y = x + (sentence.length + 1) * 100;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, (x = x + 100));
}

setTimeout(() => {
  process.stdout.write(`\n`);
}, y);
