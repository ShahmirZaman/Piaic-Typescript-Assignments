let alienColors = ["green", "yellow", "red"];
alienColors.map((items) => {
    console.log(items);
    if (items == "green") {
        console.log("The player just earned 5 points");
    }
    else if (items == "yellow") {
        console.log("The player just earned 10 points");
    }
    else {
        console.log("The player just earned 15 points");
    }
});
export {};
