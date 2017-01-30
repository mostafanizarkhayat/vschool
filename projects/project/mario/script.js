function totalCoins() {
    var goombas = document.getElementById("Goombas").value;
    var bobOmbs = document.getElementById("Bob-ombs").value;
    var cheepCheeps = document.getElementById("Cheep-cheeps").value;
    var totalResult = (goombas * 5) + (bobOmbs * 7) +(cheepCheeps * 11);
    document.getElementById("output").value = totalResult;
}
document.getElementById("totalCoins").addEventListener("click", totalCoins);

