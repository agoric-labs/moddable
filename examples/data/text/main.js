import { TextEncoder, TextDecoder } from "text";

const testCases = [
  { label: "empty", bytes: [], text: "" },
  { label: "euro", bytes: [226, 130, 172], text: "€" },
  { label: "CJK", bytes: [240, 160, 174, 183], text: "𠮷" },
  {
    label: "sample paragraph",
    text: "This is a sample paragraph.",
    bytes: [
      84,
      104,
      105,
      115,
      32,
      105,
      115,
      32,
      97,
      32,
      115,
      97,
      109,
      112,
      108,
      101,
      32,
      112,
      97,
      114,
      97,
      103,
      114,
      97,
      112,
      104,
      46,
    ],
  },
];

function traceln(s) {
  trace(s);
  trace("\n");
}

function cmp(a, b) {
  if (a.length !== b.length) return false;
  for (let pos = 0; pos < a.length; pos++) {
    if (a[pos] !== b[pos]) return false;
  }
  return true;
}

function main() {
  traceln("hello!");
  const enc = new TextEncoder();
  const dec = new TextDecoder();
  const data = enc.encode("blort!");
  traceln(data);
  const text = dec.decode(data);
  traceln(text);

  for (const { label, bytes, text } of testCases) {
    const actual = enc.encode(text);
    const actualString = dec.decode(Uint8Array.from(bytes));
    if (!cmp(actual, bytes)) {
      traceln(
        `FAIL: ${label}: expected ${JSON.stringify(bytes)} actual ${
          actual.length
        } ${JSON.stringify(Array.from(actual))}`
      );
    } else if (actualString !== text) {
      traceln(
        `FAIL: ${label}: expected ${JSON.stringify(
          text
        )} actual ${JSON.stringify(Array.from(actualString))}`
      );
    } else {
      traceln(`PASS: ${label}`);
    }
  }
}

main();
