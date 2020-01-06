class Game {
    constructor(canvasId) {
        this.loop = () => {
<<<<<<< Updated upstream
=======
            if (this.frameCounter < this.animatedTextArray.length) {
                this.writeTextToCanvas(this.animatedTextArray[this.frameCounter], 30, this.animatedTextX, this.animatedTextY, 'start', "rgb(69,66,63)");
                this.animatedTextX += 15;
            }
            requestAnimationFrame(this.loop);
>>>>>>> Stashed changes
            this.frameCounter++;
            requestAnimationFrame(this.loop);
        };
        this.mouseHandler = (event) => {
            console.log(`xPos ${event.clientX}, yPos ${event.clientY}`);
            if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 612 && event.clientY <= 827 && this.currentScreen === "levelScreen") {
                console.log('A');
            }
            ;
            if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 612 && event.clientY <= 827 && this.currentScreen === "levelScreen") {
                console.log('B');
            }
            ;
            if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 851 && event.clientY <= 1067 && this.currentScreen === "levelScreen") {
                console.log('C');
            }
            ;
            if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 851 && event.clientY <= 1067 && this.currentScreen === "levelScreen") {
                console.log('D');
            }
            ;
            if (event.clientX >= 674 && event.clientX < 1235 && event.clientY >= 562 && event.clientY <= 666 && this.currentScreen === "titleScreen") {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.levelScreen();
            }
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        document.addEventListener("click", this.mouseHandler);
<<<<<<< Updated upstream
        this.frameCounter = 0;
        this.animatedText = "ja dit is pure kanker";
        for (let i = 0; i < this.animatedText.length; i++) {
            this.animatedTextArray.push(this.animatedText[i]);
        }
        console.log(this.animatedTextArray);
        this.currentScreen = "titleScreen";
        this.titleScreen();
        this.loop();
=======
        this.dialogue = {
            set1: {
                q1: 'Die naam komt me bekend voor',
                a1: 'A) Waarschijnlijk niet',
                a2: 'B) Zou je me kunnen vertellen waarvan?',
                a3: 'C) Ik ken niemand die Ad heet.',
                a4: ''
            }
        };
        this.questionInfo = {
            xPos: 1075,
            yPos: 60
        };
        this.answerCoordinates = {
            A: {
                xPos: 44,
                yPos: 641
            },
            B: {
                xPos: 44,
                yPos: 885
            },
            C: {
                xPos: 1010,
                yPos: 641
            },
            D: {
                xPos: 1010,
                yPos: 885
            }
        };
        this.currentScreen = "";
        this.frameCounter = 0;
        this.animatedText = "ja dit is pure kanker";
        this.animatedTextArray = [];
        this.animatedTextX = 1075;
        this.animatedTextY = 60;
        console.log(this.animatedText);
        for (let i = 0; i < this.animatedText.length; i++) {
            this.animatedTextArray.push(this.animatedText[i]);
        }
        this.levelScreen();
    }
    startStoryline() {
        this.loadSet1();
>>>>>>> Stashed changes
    }
    titleScreen() {
        const Button = "./assets/images/button.png";
        this.loadImage(Button, this.writeButtonToStartScreen);
        this.writeTextToCanvas("Meeting old", 140, this.canvas.width / 2, 175);
        this.writeTextToCanvas("\"friends\"", 140, this.canvas.width / 2, 300);
        this.currentScreen = "titleScreen";
    }
    levelScreen() {
        const speechBubble = "./assets/images/speechBubble.png";
        this.loadImage(speechBubble, this.speechBubblePosition);
        const characterImage = "./assets/images/miniAd2.png";
        this.loadImage(characterImage, this.characterPosition);
        const choiceBox = "./assets/images/choiceBox.png";
        this.loadImage(choiceBox, this.choiceBoxPosition);
        this.currentScreen = "levelScreen";
<<<<<<< Updated upstream
=======
        this.startStoryline();
        this.loop();
>>>>>>> Stashed changes
    }
    choiceBoxPosition(img) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x - img.width / 2, y - 540);
<<<<<<< Updated upstream
=======
        this.startStoryline();
    }
    loadSet1() {
        this.writeTextToCanvas(this.dialogue.set1.a1, 20, this.answerCoordinates.A.xPos, this.answerCoordinates.A.yPos, "start", "rgb(69,66,63)");
        this.writeTextToCanvas(this.dialogue.set1.a2, 20, this.answerCoordinates.B.xPos, this.answerCoordinates.B.yPos, "start", "rgb(69,66,63)");
        this.writeTextToCanvas(this.dialogue.set1.a3, this.answerCoordinates.C.fontSize, this.answerCoordinates.C.xPos, this.answerCoordinates.C.yPos, "start", "black");
        this.writeTextToCanvas(this.dialogue.set1.a4, 20, this.answerCoordinates.D.xPos, this.answerCoordinates.D.yPos, "start", "rgb(69,66,63)");
>>>>>>> Stashed changes
    }
    writeButtonToStartScreen(img) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height - 1000;
        this.ctx.drawImage(img, x - img.width / 2, y);
        this.writeTextToCanvas("Play", 70, x, y + 550, "center", "rgb(69,66,63)");
    }
    characterPosition(img) {
        const x = this.canvas.width / 2 - 100;
        const y = this.canvas.height / 2 - 768;
        this.ctx.drawImage(img, (x - img.width / 2), y);
    }
    speechBubblePosition(img) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x + 70, y - 533);
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "white") {
        this.ctx.font = `${fontSize}px Undertale`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    loadImage(source, callback) {
        const imageElement = new Image();
        imageElement.addEventListener("load", () => {
            callback.apply(this, [imageElement]);
        });
        imageElement.src = source;
    }
}
let init = function () {
    const meetingnewfriends = new Game(document.getElementById("canvas"));
};
window.addEventListener("load", init);
//# sourceMappingURL=app.js.map