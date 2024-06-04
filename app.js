let multiplier = 1;
const numberOf1Mines = [
    0.01, 0.06, 0.11, 0.16, 0.22, 0.29, 0.36, 0.44, 0.54, 0.64, 0.76, 0.9, 1.06,
    1.25, 1.47, 1.75, 2.1, 2.54, 3.14, 3.97, 5.22, 7.31, 11.47, 23.97, 23.97,
];
const numberOf2Mines = [
    0.06, 0.16, 0.27, 0.4, 0.55, 0.73, 0.93, 1.18, 1.47, 1.83, 2.27, 2.82, 3.52,
    4.43, 5.64, 7.31, 9.69, 13.26, 18.97, 28.97, 48.97, 98.97, 298.97, 598.97,
];
const numberOf3Mines = [
    0.11, 0.27, 0.47, 0.7, 0.99, 1.35, 1.79, 2.36, 3.08, 4.03, 5.29, 7.01, 9.43,
    12.91, 18.14, 26.35, 40.04, 64.69, 113.97, 228.97, 573.97, 2298.97, 6898.97,
];
const numberOf4Mines = [
    0.16, 0.4, 0.7, 1.09, 1.58, 2.24, 3.11, 4.29, 5.92, 8.24, 11.61, 16.67,
    24.53, 37.31, 59.21, 99.37, 179.69, 360.4, 842.31, 2528.97, 12648.97,
    50598.97,
];
const numberOf5Mines = [
    0.22, 0.55, 0.99, 1.58, 2.4, 3.54, 5.17, 7.56, 11.14, 16.67, 25.51, 40.26,
    66.06, 113.97, 209.81, 420.64, 947.72, 2528.97, 8853.97, 53128.97,
    265648.97,
];
const numberOf6Mines = [
    0.29, 0.73, 1.35, 2.24, 3.54, 5.5, 8.51, 13.28, 21.09, 34.36, 57.95, 102.18,
    190.64, 382.31, 842.31, 2107.31, 6323.97, 25298.97, 177098.97, 1062598.97,
];
const numberOf7Mines = [
    0.36, 0.93, 1.79, 3.11, 5.17, 8.51, 14.08, 23.69, 40.99, 73.67, 139.04,
    279.1, 605.92, 1455.64, 4004.81, 13351.75, 60086.47, 480698.97, 3364898.97,
];
const numberOf8Mines = [
    0.44, 1.18, 2.36, 4.29, 7.56, 13.28, 23.69, 43.46, 83.01, 167.05, 359.14,
    839.36, 2183.97, 6553.97, 24033.97, 120173.97, 1081573.97, 8652598.97,
];
const numberOf9Mines = [
    0.54, 1.47, 3.08, 5.92, 11.14, 21.09, 40.99, 83.01, 177.55, 407.16, 1019.44,
    2856.28, 9285.22, 37143.97, 204296.47, 2042973.97, 18386773.97,
];
const numberOf10Mines = [
    0.64, 1.83, 4.03, 8.24, 16.67, 34.36, 73.67, 167.05, 407.16, 1087.47,
    3264.47, 11428.2, 49525.64, 297158.97, 3268758.97, 32687598.97,
];
const numberOf11Mines = [
    0.76, 2.27, 5.29, 11.61, 25.51, 57.95, 139.04, 359.14, 1019.44, 3264.47,
    12244.58, 57145.13, 371448.97, 4457398.97, 49031398.97,
];
const numberOf12Mines = [
    0.9, 2.82, 7.01, 16.67, 40.26, 102.18, 279.1, 839.36, 2856.28, 11428.2,
    57145.13, 400022.05, 5200298.97, 62403598.97,
];
const numberOf13Mines = [
    1.06, 3.52, 9.43, 24.53, 66.06, 190.64, 605.92, 2183.97, 9285.22, 49525.64,
    371448.97, 5200298.97, 67603898.97,
];
const numberOf14Mines = [
    1.25, 4.43, 12.91, 37.31, 113.97, 382.31, 1455.64, 6553.97, 37143.97,
    297158.97, 4457398.97, 62403598.97,
];
const numberOf15Mines = [
    1.47, 5.64, 18.14, 59.21, 209.81, 842.31, 4004.81, 24033.97, 204296.47,
    3268758.97, 49031398.97,
];
const numberOf16Mines = [
    1.75, 7.31, 26.35, 99.37, 420.64, 2107.31, 13351.75, 120173.97, 2042973.97,
    32687598.97,
];
const numberOf17Mines = [
    2.1, 9.69, 40.04, 179.69, 947.72, 6323.97, 60086.47, 1081573.97,
    18386773.97,
];
const numberOf18Mines = [
    2.54, 13.26, 64.69, 360.4, 2528.97, 25298.97, 480698.97, 8652598.97,
];
const numberOf19Mines = [
    3.14, 18.97, 113.97, 842.31, 8853.97, 177098.97, 3364898.97,
];
const numberOf20Mines = [3.97, 28.97, 228.97, 2528.97, 53128.97, 1062598.97];
const numberOf21Mines = [5.22, 48.97, 573.97, 12648.97, 265648.97];
const numberOf22Mines = [7.31, 98.97, 2298.97, 50598.97];
const numberOf23Mines = [11.47, 298.97, 6898.97];
const numberOf24Mines = [23.97, 598.97];
const numberOf25Mines = [23.97];
const multiplierList = [
    numberOf1Mines,
    numberOf2Mines,
    numberOf3Mines,
    numberOf4Mines,
    numberOf5Mines,
    numberOf6Mines,
    numberOf7Mines,
    numberOf8Mines,
    numberOf9Mines,
    numberOf10Mines,
    numberOf11Mines,
    numberOf12Mines,
    numberOf13Mines,
    numberOf14Mines,
    numberOf15Mines,
    numberOf16Mines,
    numberOf17Mines,
    numberOf18Mines,
    numberOf19Mines,
    numberOf20Mines,
    numberOf21Mines,
    numberOf22Mines,
    numberOf23Mines,
    numberOf24Mines,
    numberOf25Mines,
];


document.addEventListener("DOMContentLoaded", () => {
    gridItems = document.querySelectorAll(".grid-item");
    gridItemsBehind = document.querySelectorAll(".grid-item-behind");
    let trapFound = false;
    let totalProfitSpan = document.getElementById("profit");
    let betButton = document.getElementById("cashbet");
    let betAmount = parseFloat(document.getElementById("bet-amount").value);
    let onBet = false;
    let haveCashout = false;

    // Add click event listener to each grid item
    gridItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            betButton = document.getElementById("cashbet");
            if (onBet == false || haveCashout) {
                return;
            }
            const img = item.querySelector("img");
            if (trapFound || item.classList.contains("clicked")) {
                return;
            }
            if (img.src.includes("bomb.webp")) {
                trapFound = true;
            }
            item.classList.add("clicked");
            item.classList.add("expand-one");

            setTimeout(() => {
                item.classList.remove("expand-one");
                item.classList.add("collapsed");
            }, 300);

            setTimeout(() => {
                item.classList.remove("collapsed");
                gridItemsBehind[index].style.visibility = "visible";
                gridItemsBehind[index].style.zIndex = 3;
                const img = item.querySelector("img");
                item.style.visibility = "visible";
                item.style.backgroundColor = "transparent";
                img.classList.add("expanded");

                // Check if the clicked item is a bomb
                if (img.src.includes("bomb.webp")) {
                    trapFound = true;
                    const audio = new Audio("assets/sounds/what.mp3");
                    audio.play();
                    document.getElementsByClassName("input-total")[0].style.display =
                    "none";
                    betButton = document.getElementById("cashbet");
                    betButton.innerText = "Bet";

                    setTimeout(() => {
                        revealAllItems(index);
                        return;
                    }, 500);
                } else {
                    // play an audio sound
                    const audio = new Audio("assets/sounds/coin.MP3");
                    audio.play();
                    multiplier = updateMultiplier(multiplierList);
                    betAmount = parseFloat(document.getElementById("bet-amount").value);
                    betAmount = parseFloat(
                        document.getElementById("bet-amount").value
                    );
                    updateProfitDisplay(multiplier, betAmount);
                }
            }, 600);
        });
    });

    // Event listener for form submission
    document.querySelector("form").addEventListener("submit", (event) => {
        event.preventDefault();
        // Call the randomizeGrid function with the values of the "mines" and "gems" fields
        if (betButton.innerText === "Cashout") {
            // Make sure if not single tiles clicked, then cant cashout
            if(document.querySelectorAll(".grid-item.clicked").length == 0){
                return;
            } else {
                cashout();
            }
           
        } else {
            placeBet();
        }
    });

    function placeBet() {
        // Add validation bet amount cannot exceed balance
        trapFound = false;
        const balance = parseFloat(
            document.getElementById("balance").textContent.replace(/[^0-9.-]+/g, "")
        )
        console.log("placeBet");
        betAmount = parseFloat(document.getElementById("bet-amount").value);
        if (betAmount > balance) {
            alert("Bet amount cannot exceed balance");
            return;
        }
        document.getElementById("balance").innerText = `$${(balance - betAmount).toFixed(2)}`;        console.log("placeBet");
        const mines = parseInt(document.getElementById("mines").value);
        const gems = parseInt(document.getElementById("gems").value);
        document.getElementsByClassName("profit-modal")[0].style.display = "none";
        resetGame();
        document.getElementsByClassName("input-total")[0].style.display =
            "block";

        onBet = true;

        // Call the randomizeGrid function
        randomizeGrid(mines, gems);
        betButton.innerText = "Cashout";
        haveCashout = false;
    }



    function updateMultiplier(multiplierList) {
        const mines = parseInt(document.getElementById("mines").value);
        const gemsRevealed =
        document.querySelectorAll(".grid-item.clicked").length;
        multiplier = multiplierList[mines - 1][gemsRevealed - 1];
        return multiplier + 1;
    }

    function updateProfitDisplay(multiplier, betAmount) {
        console.log(multiplier);
        console.log(betAmount);
        document.getElementById("multiplier-label").innerHTML = `Total Profit (${updateMultiplier(multiplierList).toFixed(2)}<span>&times;</span>)`;        
        totalProfitSpan.innerText = (multiplier * betAmount).toFixed(2);
        console.log(totalProfitSpan.innerText);
        console.log(multiplier * betAmount);
    }

    function cashout() {
        betButton.innerText = "Bet";
        trapFound = false;
        document.getElementsByClassName("input-total")[0].style.display =
            "none";
        // Update Balance
        betAmount = parseFloat(document.getElementById("bet-amount").value);
        amount = parseFloat((betAmount * updateMultiplier(multiplierList)).toFixed(2));
        const balanceElement = document.getElementById("balance");
        let currentBalance = parseFloat(
            balanceElement.textContent.replace(/[^0-9.-]+/g, "")
        );
        console.log(`betAmount: ${betAmount}, amount: ${amount}, balanceElement: ${balanceElement.textContent}, multiplier: ${updateMultiplier(multiplierList).toFixed(2)}`);
        currentBalance += amount;
        balanceElement.textContent = `$${currentBalance.toFixed(2)}`;
        showProfitModalDisplay();
        resetGame();

        // Update Total Profit Label
        document.getElementById("multiplier-label").innerHTML = `Total Profit`;        
        totalProfitSpan.innerText = 0;
        haveCashout = true;
        
    }

    // Event listener for mines form
    document.getElementById("mines").addEventListener("input", (event) => {
        const mines = parseInt(event.target.value);
        const gemsField = document.getElementById("gems");

        // Subtract the value of the "mines" input from 25 and set the result as the value of the "gems" field
        gemsField.value = 25 - mines;
    });

    document.getElementById("gems").addEventListener("input", (event) => {
        const gems = parseInt(event.target.value);
        const minesField = document.getElementById("mines");

        // Subtract the value of the "mines" input from 25 and set the result as the value of the "gems" field
        minesField.value = 25 - gems;
    });

    // Wallet button and modal functionality
    const walletButton = document.querySelector(".wallet-button");
    const walletModal = document.getElementById("wallet-modal");
    const closeButton = document.querySelector(".close-button");

    walletButton.addEventListener("click", () => {
        walletModal.style.display = "block";
    });

    closeButton.addEventListener("click", () => {
        walletModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === walletModal) {
            walletModal.style.display = "none";
        }
    });

    document
        .getElementById("wallet-form")
        .addEventListener("submit", (event) => {
            event.preventDefault();
            const amount = parseInt(document.getElementById("amount").value);
            const balanceElement = document.getElementById("balance");
            let currentBalance = parseFloat(
                balanceElement.textContent.replace(/[^0-9.-]+/g, "")
            );
            currentBalance += amount;
            balanceElement.textContent = `$${currentBalance.toFixed(2)}`;
            walletModal.style.display = "none";
        });

    document.getElementsByClassName("close-button")[0].addEventListener("click", () => {
        walletModal.style.display = "none";
    });

    function showProfitModalDisplay() {
        betAmount = parseFloat(document.getElementById("bet-amount").value);
        const profitModal = document.getElementsByClassName("profit-modal")[0];
        profitModal.style.display = "block";
        document.getElementById("multiplier-text").innerText =  updateMultiplier(multiplierList);
        document.getElementById("profit-text").innerText = `$${(updateMultiplier(multiplierList) * betAmount).toFixed(2)}`;    }
    
});

function randomizeGrid(mines) {
    const gridItems = document.querySelectorAll(".grid-item img");
    const totalItems = gridItems.length;
    const images = Array(totalItems).fill("assets/images/gold coin.webp");

    for (let i = 0; i < mines; i++) {
        let index;
        do {
            index = Math.floor(Math.random() * totalItems);
        } while (images[index] === "assets/images/bomb.webp");
        images[index] = "assets/images/bomb.webp";
    }

    gridItems.forEach((img, index) => {
        img.src = images[index];
    });
}

function resetGame() {
    const gridItems = document.querySelectorAll(".grid-item");
    const gridItemsBehind = document.querySelectorAll(".grid-item-behind");

    gridItems.forEach((item, index) => {
        item.style.opacity = 1;
        item.classList.remove("clicked", "collapsed", "expand-one");
        const img = item.querySelector("img");
        img.style.width = "";
        img.classList.remove("expanded");
        gridItemsBehind[index].style.visibility = "hidden";
        gridItemsBehind[index].style.zIndex = 1;
        item.style.visibility = "visible";
        item.style.backgroundColor = "#304454";
    });
}

function revealAllItems() {
    const gridItems = document.querySelectorAll(".grid-item");
    const gridItemsBehind = document.querySelectorAll(".grid-item-behind");

    gridItems.forEach((item, index) => {
        const img = item.querySelector("img");
        if (item.classList.contains("clicked")) {
            return;
        }
        item.classList.add("clicked");
        img.classList.add("revealed");
        item.classList.add("expand-one");
        setTimeout(() => {
            item.classList.remove("expand-one");
            item.classList.add("collapsed");
        }, 300);

        setTimeout(() => {
            item.classList.remove("collapsed");
            gridItemsBehind[index].style.visibility = "visible";
            gridItemsBehind[index].style.zIndex = 3;
            const img = item.querySelector("img");
            item.style.visibility = "visible";
            item.style.backgroundColor = "transparent";
            img.classList.add("expanded");
            item.style.opacity = 0.5;
        }, 600);
    });
}
