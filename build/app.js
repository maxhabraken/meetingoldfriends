class Game {
    constructor(canvasId) {
        this.loop = () => {
            requestAnimationFrame(this.loop);
            if (this.frameCounter < this.adDialogue.length) {
                this.joined += (this.adDialogue[this.frameCounter]);
                this.writeTextToCanvas(this.joined, 30, 1075, 60, 'start', "rgb(69,66,63)");
            }
            this.frameCounter++;
        };
        this.mouseHandler = (event) => {
            console.log(`xPos ${event.clientX}, yPos ${event.clientY}`);
            if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 612 && event.clientY <= 827) {
                console.log('1');
                const Button = "./assets/images/button.png";
                this.loadImage(Button, this.writeButtonToStartScreen);
            }
            ;
            if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 612 && event.clientY <= 827) {
                console.log('2');
            }
            ;
            if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 851 && event.clientY <= 1067) {
                console.log('3');
            }
            ;
            if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 851 && event.clientY <= 1067) {
                console.log('4');
            }
            ;
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        document.addEventListener("click", this.mouseHandler);
        this.array = [];
        this.frameCounter = 0;
        this.adDialogue = "dikke kanker piraat dikke kanker piraat";
        this.joined = "";
        this.startScreen();
    }
    startScreen() {
        const Button = "./assets/images/button.png";
        this.loadImage(Button, this.writeButtonToStartScreen);
        this.writeTextToCanvas("Meeting old", 140, this.canvas.width / 2, 175);
        this.writeTextToCanvas("\"friends\"", 140, this.canvas.width / 2, 300);
    }
    levelScreen() {
        const characterImage = "./assets/images/miniAd2.png";
        this.loadImage(characterImage, this.characterPosition);
        const speechBubble = "./assets/images/speechBubble.png";
        this.loadImage(speechBubble, this.speechBubblePosition);
        const choiceBox = "./assets/images/choiceBox.png";
        this.loadImage(choiceBox, this.choiceBoxPosition);
    }
    choiceBoxPosition(img) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x - img.width / 2, y - 540);
    }
    drawTitleScreenToCanvas(img) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x, y - 1000);
        this.writeTextToCanvas("Play", 70, x, y + 550, "center", "rgb(69,66,63)");
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
class Gamescreen {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
    }
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "white") {
        this.ctx.font = `${fontSize}px Undertale`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
}
//# sourceMappingURL=app.js.map