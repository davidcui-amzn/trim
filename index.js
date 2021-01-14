
exports = module.exports = trim;

function trim(str){
  if (str.trim) return str.trim();

  str = trimLeftSpaces(str);
  str = trimRightSpaces(str);
}

exports.left = function(str){
  if (str.trimLeft) return str.trimLeft();
  trimLeftSpaces(str);
};

exports.right = function(str){
  if (str.trimRight) return str.trimRight();
  trimRightSpaces(str);
};

function trimLeftSpaces(str) {
  return str.replace(/^[\s]*/, '');
}

function trimRightSpaces(str) {
  return str.replace(/[\s]*$/, '');
}