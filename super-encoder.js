// Import the encryptors functions here.
const {
  caesarCipher,
  symbolCipher,
  reverseCipher,
} = require("./encryptors.js");

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  const caesarCipherReturn = caesarCipher(str, 13);
  const symbolCipherReturn = symbolCipher(caesarCipherReturn);
  const reverseCipherReturn = reverseCipher(symbolCipherReturn);

  return reverseCipherReturn;
};

const decodeMessage = (str) => {
  // Use the encryptor functions here.
  const reverseCipherReturn = reverseCipher(str);
  const symbolCipherReturn = symbolCipher(reverseCipherReturn);
  const caesarCipherReturn = caesarCipher(symbolCipherReturn, -13);

  return caesarCipherReturn;
};

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
  }
  if (process.argv[2] === "decode") {
    output = decodeMessage(str);
  }

  process.stdout.write(output + "\n");
  process.exit();
};

// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);
