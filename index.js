Cryptobiznes, [28.03.2022 18:58]
[В ответ на Cryptobiznes]
function Block(letter, rate, used, father, code) {
  this.letter = letter;
  this.rate = rate;
  this.used = used;
  this.father = father;
  this.code = code;
}

function FindCode(block) {

  if (tree[block.father].code !='') {
    block.code - tree[block.father].code + '1';
  }
    else {
    if (block.letter == tree[minindex].letter) {
      block.code = '0';
    }
        else if (block.letter == tree[preminIndex].letter) {
      block.code = '1';
    }
        else {
      FindCode(tree[block.father]);
      block.code = tree[block.father].code + '0';
    }
  }
}index
