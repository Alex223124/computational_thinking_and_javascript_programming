function totalArea(rectangles) {
  var areas = rectangles.map(function(rectangle) {
    return rectangle[0] * rectangle[1];
  });

  return areas.reduce(function(sum, area) {
    return sum += area;
  });
}

function totalAreaSquares(rectangles) {
  var squareAreas = rectangles.filter(function(rectangle) {
    return rectangle[0] === rectangle[1];
  });
  console.log(totalArea(squareAreas));
  return totalArea(squareAreas);
}

var rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

totalArea(rectangles);
totalAreaSquares(rectangles);
