let alien_colors = ["green", "red"];
alien_colors.map((item) => {
    console.log(item);
    if (item == "green") {
        console.log("The player just earned 5 points");
    }
    else {
        console.log("The player just earned 10 points");
    }
});
export {};
