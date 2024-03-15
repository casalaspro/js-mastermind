
const botNumbers = generateUniqueNumbers(1,9,4);
console.log(botNumbers);

const containerElement = document.querySelector(`.answers`);
console.log(containerElement);



// leggere numero inserito dall'utente

const buttonElement = document.getElementById(`sendValues`);
buttonElement.addEventListener(`click`, function(){

  let answerString = "";
  let userNumbers = [];

  const inputElement = document.getElementById(`userNumbers`);
  const userNumbersString = inputElement.value.split("");
  console.log(userNumbersString);

  for(let i = 0; i < userNumbersString.length; i++){
    const userNumber = parseInt(userNumbersString[i]);
    const botNumber = botNumbers[i];
    if(userNumber === botNumber){
      answerString += "x";
    }else if(botNumbers.includes(userNumber)){
      answerString += "o";
    }
    userNumbers.push(userNumber)
  }

  console.log(userNumbers);

  if(botNumbers === userNumbers){
    console.log("Hai vinto");
  }else{
    console.log(answerString);
  }

  
})









function generateUniqueNumbers(min, max, repetitions){
  let randomNumbers = [];
  let stopGenerateNumbers = false;

  while(!stopGenerateNumbers){
    let number = getRandomNumber(min,max);
    if(!(randomNumbers.includes(number))){
      randomNumbers.push(number);
    }
  
    if(randomNumbers.length === repetitions){
      stopGenerateNumbers = true;
    }
  }

  return randomNumbers;

  function getRandomNumber(min, max){
    // return del numero
    return parseInt(Math.random()*max+min);
  }
}

