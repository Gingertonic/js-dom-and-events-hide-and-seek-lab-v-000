function getFirstSelector(sel) {
  return document.querySelector(sel);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  let divs = document.querySelectorAll('#grand-node div');
  return divs[divs.length-1];
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < rankedLists.length; i++) {
    var children = rankedLists[i].children

    for (let i = 0; i < children.length; i++) {
      // let content = children[i].innerHTML;
      // content = parseInt(content) + x;
      children[i].innerHTML = parseInt(children[i].innerHTML) + n;
    }
  }

  // for (let i = 0, l = rankedLists.length; i < l; i++) {
  //   let children = rankedLists[i].children
  //
  //   for (let j = 0, k = children.length; j < k; j++) {
  //     children[j].innerHTML = parseInt(children[j].innerHTML) + n
  //   }
  // }
}
