type Album = {
    artist:string,
    title:string,
    tracks?:number
}
function make_album(artist:string,title:string,tracks?:number):Album {
    const album:Album = {
        artist,
        title
    }
    if(tracks !== undefined) {
        album.tracks = tracks;
    }
    return album
}
const album1:Album = make_album("Taylor Swift","Blankspace");
const album2:Album = make_album("Atif Aslam","Kuch Is trah",20);
const album3:Album = make_album("Young Stunners","Laga Reh",10);
console.log("Album1",album1);
console.log("Album2",album2);
console.log("Album3",album3);