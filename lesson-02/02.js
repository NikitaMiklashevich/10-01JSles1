let dice1 = Math.floor(Math.random() * 6 + 1)
let dice2 = Math.floor(Math.random() * 6 + 1)
let isWinningDouble;

if (dice1 === dice2 && dice1 > 3) {
    isWinningDouble = true;
}else{
    isWinningDouble = false;
}

