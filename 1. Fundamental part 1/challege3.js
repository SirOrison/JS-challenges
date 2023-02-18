averageDolphins = (96 + 108 + 89) / 3;
averageKoalas = (88 + 91 + 110) / 3;
let winner;

if (averageDolphins > averageKoalas) {
  winner = "Dolphins wins";
} else if(averageDolphins < averageKoalas){
  winner = "Koalas wins";
} else 
{
  winner = "Draw";
}

console.log(winner);