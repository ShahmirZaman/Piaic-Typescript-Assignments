let placesLikeToVisit:string[] = ["New York","Chicago","Madrid","Antalya","Paris"];
console.log("Original Array: ",placesLikeToVisit);
let alphabeticalOrder:string[] = [...placesLikeToVisit];
alphabeticalOrder = alphabeticalOrder.sort();
console.log("Alphabetical Order Array: ",alphabeticalOrder);
console.log("Original Array: ",placesLikeToVisit);
alphabeticalOrder =alphabeticalOrder.sort().reverse();
console.log("Reverse Alphabetical Order: ",alphabeticalOrder);
console.log("Original Array: ",placesLikeToVisit);
placesLikeToVisit.reverse();
console.log("Reverse Order Array: ",placesLikeToVisit);
placesLikeToVisit.reverse();
console.log("Reverse Array Again Back To It's Original order: ",placesLikeToVisit);
placesLikeToVisit.sort();
console.log("Sorted Array: ",placesLikeToVisit);
placesLikeToVisit.reverse();
console.log("Sorted Array In Reverse Order: ",placesLikeToVisit);



