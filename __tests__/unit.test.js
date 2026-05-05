// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber tests
test ('is a valid phone number', () => {
  expect(isPhoneNumber('(858) 123-4567')).toBe(true);
});

test('phone number has correct format', () => {
  expect(isPhoneNumber('858 123 4567')).toBe(false);
});

test('phone number has correct dashes but is missing parentheses', () => {
  expect(isPhoneNumber('858-123-4567')).toBe(true);
});

test('is not a valid phone number', () => {
  expect(isPhoneNumber('858-123-456')).toBe(false);
});


// isEmail tests
test('is a valid email', () => {
  expect(isEmail('user@example.com')).toBe(true);
});

test('is not a valid email', () => {
  expect(isEmail('invalid-email')).toBe(false);
});

test('email is missing @ symbol', () => {
  expect(isEmail('userexample.com')).toBe(false);
});

test('email is not missing domain', () => {
  expect(isEmail('user@domain.com')).toBe(true);
});

// isStrongPassword tests
test('first character of password is a letter', () => {
  expect(isStrongPassword('Password123')).toBe(true);
});

test('password is too short', () => {
  expect(isStrongPassword('P1')).toBe(false);
});

test('password is too long', () => {
  expect(isStrongPassword('ThisIsAVeryLongPassword123')).toBe(false);
});

test('password contains only letters, numbers, underscores, and is within the 15 character limit', () => {
  expect(isStrongPassword('Valid_pass123')).toBe(true);
});

// isDate tests
test('is a valid date', () => {
  expect(isDate('12/31/2020')).toBe(true);
});

test('date has missing leading zero', () => {
  expect(isDate('1/1/2020')).toBe(true);
});

test('date has incorrect format', () => {
  expect(isDate('2020/12/31')).toBe(false);
});

test('date has missing year', () => {
  expect(isDate('12/31')).toBe(false);
});

// isHexColor tests
test('valid 3 character hex color', () => {
  expect(isHexColor('#abc')).toBe(true);
});

test('valid 6 character hex color and is missing #', () => {
  expect(isHexColor('a1b2c3')).toBe(true);
});

test('hex color is invalid 3 digit characters', () => {
  expect(isHexColor('#1ia')).toBe(false);
});

test('hex color has invalid 6 digit characters', () => {
  expect(isHexColor('#g1h2i3')).toBe(false);
});