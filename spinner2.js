const str = "|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\|/-\\";
let x = 200;

for (let char of str)
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, (x += 200));
