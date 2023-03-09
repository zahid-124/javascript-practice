const formatDate = require("../javascript/date");

// sample test case for formatDate function
test('testing', () => {
    expect(formatDate(new Date())).toBeTruthy;
});