function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)

  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`

}
function nowServing(line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!'
  } else {
    var current = line.shift()
    return `Currently serving ${current}.`
  }
}


function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  } else {

    for (var i = 0; i < line.length; i++) {
      var string = `The line is currently: `
      string += `${i}. ${line[i]},`
    }

    return string
  }
}
