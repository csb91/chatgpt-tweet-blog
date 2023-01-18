import emojiRegex from 'emoji-regex';

const encodeEmojis = (text) => {
  const emojiMatches = text.match(emojiRegex());
  if (!emojiMatches) {
    return text;
  }
  let encodedText = text;
  emojiMatches.forEach((emoji) => {
    encodedText = encodedText.replace(emoji, encodeURIComponent(emoji));
  });
  return encodedText;
}

export default encodeEmojis;
