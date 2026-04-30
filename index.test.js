/** @jest-environment jsdom */
const fs = require('fs');
const path = require('path');

beforeEach(() => {
  const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
  document.documentElement.innerHTML = html;

  document.getElementById('reveal-btn').addEventListener('click', function () {
    document.getElementById('message').style.display = 'block';
  });
});

test('clicking the button reveals the message', () => {
  const button = document.getElementById('reveal-btn');
  const message = document.getElementById('message');
  expect(message.style.display).toBe('none');
  button.click();
  expect(message.style.display).toBe('block');
});