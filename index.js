function piackANumber(arr, name) {
  return 'Welcome '+ name +'. You are number ' + arr.length +1 + ' in line.'
}

function nowServing(arr) {
  if(arr.length > 0) {
    return arr.shift();
  } else {
    return 'There is nobody waiting to be served!';
  }
}

function currentLine(arr) {
  if(arr.length > 0){
  var line = 'The line is currently: ';
  arr.forEach(function (pos) {
    line += indexOf(pos) +'. ' + pos +', ';
  });
  return line;
  } else {
    return 'The line is currently empty.'
  }
}