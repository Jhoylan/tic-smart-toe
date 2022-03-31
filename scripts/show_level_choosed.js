const level = document.getElementById('level')
const levelsDescriptions = { 
  1: "Joe doesn't know how to play, he just mark on random places",
  2: "Now, he's able to set up a fatality, i.e., a move that will finish the game",
  3: "Once the fatality is set up, now Joe is able to give the fatality and finish the game",
  4: "In this level Joe can set up a attack that has 50% chance of work, be careful",
  5: "You cannot win so easily now, Joe is able to defend deadly traps",
  6: "It's becoming more and more difficult, now Joe can make advanced attacks, you're gonna lose if you don't know how to defend yourself",
  7: "Joe is improving his defense skills, he knows how to defend against some intermediary attacks",
  8: "It's being harder and harder beat this guy! Now he knows how to defend against all intermediary threats",
  9: "If you don't know how to defend yourself, you're dead! Joe knows all the advanced attacks now",
  10: "At this stage, Joe is unbeatable, you can only draw or lose to him. He's laughing in your face!" 
}
const description = document.getElementById('level_description')

level.addEventListener('click', () => {
  description.innerHTML = `Level ${level.value}: ${levelsDescriptions[level.value]}`
  console.log(`Level ${level.value} 
  ${levelsDescriptions[level.value]}`)
})