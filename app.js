function truncate(str, length){
  let cutStr = str.slice(0, length)
  console.log(cutStr + `...`)
}
truncate("What I'd like to talk on this topic is:", 20); // What I'd like to te...
truncate("Hi everyone!", 20); // Hi everyone!
