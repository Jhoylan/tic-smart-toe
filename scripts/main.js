const userStartsCheckbox = document.getElementById('start_checkbox')
const startButton = document.getElementById('start_button')
const firstColumnFirstRow = document.getElementById('first_columns_first_row')
const secondColumnFirstRow = document.getElementById('second_columns_first_row')
const thirdColumnFirstRow = document.getElementById('third_columns_first_row')
const firstColumnSecondRow = document.getElementById('first_columns_second_row')
const secondColumnSecondRow = document.getElementById('second_columns_second_row')
const thirdColumnSecondRow = document.getElementById('third_columns_second_row')
const firstColumnThirdRow = document.getElementById('first_columns_third_row')
const secondColumnThirdRow = document.getElementById('second_columns_third_row')
const thirdColumnThirdRow = document.getElementById('third_columns_third_row')
const game =[[firstColumnFirstRow, secondColumnFirstRow, thirdColumnFirstRow], 
             [firstColumnSecondRow, secondColumnSecondRow, thirdColumnSecondRow],
             [firstColumnThirdRow, secondColumnThirdRow, thirdColumnThirdRow]]
let userWillStart = false
let turn = 0
let userTurn = turn % 2 === 0

//code
startButton.addEventListener('click', () => {
  userWillStart = userStartsCheckbox.checked

  if(!userWillStart){
    userTurn = turn % 2 !== 0
  }
})

game.forEach(row => row.forEach(square => square.addEventListener('click', e => {
  if(userTurn){

  }
})))


function computerTurn(){

}
