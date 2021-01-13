
var trim = require('..');
var assert = require('assert');

describe('trim(str)', function(){
  it('should trim leading / trailing whitespace', function(){
    const withoutWhitespace = 'foo bar';
    const trimmed = trim('  foo bar  ');
    assert(trimmed === withoutWhitespace);

    const newLineTrimmed = trim('\n\n\nfoo bar\n\r\n\n');
    assert(trimmed === newLineTrimmed);

    const trimmedUnevenlyLeft = trim(' foo bar      ');
    assert(trimmed === trimmedUnevenlyLeft);

    const trimmedWithSpaceInMiddle = trim('  fo o ba a r     ');
    const trimmedWithoutSpace = 'fo o ba a r';
    assert(trimmedWithSpaceInMiddle, trimmedWithoutSpace);

    const trailingNewLines = trim('\n\n\nfo o ba a r       ');
    assert(trailingNewLines === trimmedWithoutSpace);
  })
})

describe('.left(str)', function(){
  it('should trim leading whitespace', function(){
    const leftTrimmed = 'foo bar  ';
    const testStr = trim.left('  foo bar  ');
    assert(leftTrimmed === testStr);

    const newLineTestStr = trim.left('\n\n\nfoo bar  ');
    assert(newLineTestStr === testStr);

    const leftTrimmedWithSpaceInMiddle = 'fo o ba a r   ';
    const testStrWithSpaceInMiddle = trim.left('    fo o ba a r   ');
    assert(leftTrimmedWithSpaceInMiddle === testStrWithSpaceInMiddle);

    const newLineLeadingTestStr = trim.left('\n\n\nfo o ba a r   ');
    assert(leftTrimmedWithSpaceInMiddle === newLineLeadingTestStr);

    const newLineAndSpacesLeadingTestStr = trim.left('\n\n\n   fo o ba a r   ');
    assert(newLineAndSpacesLeadingTestStr === leftTrimmedWithSpaceInMiddle);
  })
})

describe('.right(str)', function(){
  it('should trim trailing whitespace', function(){
    const rightTrimmed = '  foo bar';
    const testStr = trim.right('  foo bar  ');
    assert(rightTrimmed === testStr);

    const newLineTestStr = trim.right('  foo bar\n\r\n\n');
    assert(newLineTestStr === testStr);

    const newLineAndSpacesTrailingTestStr = trim.right('  foo bar\n\r\n\n      ');
    assert(newLineAndSpacesTrailingTestStr === rightTrimmed);

    const rightTrimmedWithSpaceInMiddle = '   fo o ba a a r';
    const testStrWithSpaceInMiddle = trim.right('   fo o ba a a r    ');
    assert(rightTrimmedWithSpaceInMiddle === testStrWithSpaceInMiddle);

    const newLinesTrailingWithSpaceInMiddle = trim.right('   fo o ba a a r\n\n\n\n');
    assert(rightTrimmedWithSpaceInMiddle === newLinesTrailingWithSpaceInMiddle);

    const newLinesAndSpacesTrailingWithSpaceInMiddle = trim.right('   fo o ba a a r\n\n\n\n    ');
    assert(rightTrimmedWithSpaceInMiddle === newLinesAndSpacesTrailingWithSpaceInMiddle);
  })
})
