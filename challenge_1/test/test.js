const boardsToTest = [
  [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]

  ],
  [
    [1, 1, 1],
    [0, 0, 0],
    [0, 0, 0]

  ],
  [
    [1, 0, 0],
    [1, 0, 0],
    [1, 0, 0]

  ],
  [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1]

  ],
  [
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 0]

  ],
  [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0]

  ]
];

var toTest = [[0,0], [0,0], [0,0], [0,0], [0,2], [0,1]];
var expected = [false, true, true, true, true, true];

boardsToTest.forEach((matrix, i)=>{
  var tictac = new Board(matrix);
  updater(expected[i],  tictac.check(toTest[i][0], toTest[i][1], 1), "model-test-win")
})

toTest = [[0,0], [0,0]];
expected = [true, false];

for (var i = 0; i<2; i++) {
  var tictac = new Board(boardsToTest[i])
  updater(expected[i],  tictac.update(toTest[i][0], toTest[i][1], 1), "model-test-flip")
}


function updater(expected, result, elementId) {
  var val = `Expecting ${result} to be equal to ${expected}`;
  var element = document.createElement("li");
  element.append(val);
  element.style.color = expected===result ? "green" : "red"
  document.getElementById(elementId).append(element);
}
