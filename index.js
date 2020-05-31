module.exports = function shorterReddit(link) {
  if (typeof link !== "string") throw new TypeError("shorterreddit wants a string!");
  const len = link.length;
  if(len < 45) throw new RangeError("shorterreddit wants the full link")
  const code = link.match(/\/comments\/(\w+?)\//)[1];
  const shortlink = `https://redd.it/${code}/`;
  return shortlink;
  // console.log(shortlink) => For Testing Purposes.
}