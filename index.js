
exports = module.exports = trim;

function trim(str){
  str = trimLeftSpaces(str);
  str = trimRightSpaces(str);
  return str;
}

exports.left = function(str){
  str = trimLeftSpaces(str);
  return str;
};

exports.right = function(str){
  str = trimRightSpaces(str);
  return str;
};

function trimLeftSpaces(str) {
  return str.replace(/^[\s]*/, '');
}

function trimRightSpaces(str) {
  return str.replace(/[\s]*$/, '');
}