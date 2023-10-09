import { titleCase } from "../../modules/string";


describe('titleCase', () => {
  // Define an array of random test cases
  const randomTestCases = [
    {
      input: 'hello world',
      output: 'Hello World',
    },
    {
      input: 'jOhN dOe',
      output: 'John Doe',
    },
    {
      input: 'aBc dEf gHi',
      output: 'Abc Def Ghi',
    },
    // Add more random test cases here
  ];

  randomTestCases.forEach(({ input, output }) => {
    it(`should convert "${input}" to "${output}"`, () => {
      expect(titleCase(input)).toBe(output);
    });
  });
});
