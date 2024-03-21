const names = ["Angie", "Christian", "Thanos", "Alessa"];
const eventType = "funeral";

function writeCards(names, eventType) {
   let messages = []
   for (let i = 0; 1 < names.length; i++) {
     let message  = `Thank you ${names[i]} for attending the ${eventType}.`;
    messages.push(message);
  }
    return messages;
}

writeCards(["Angie", "Christian", "Thanos", "Alessa"], "funeral");

function countDown(number) {
   while (number >= 0) {
     console.log(number--);
   }
 }
  countDown(10);
