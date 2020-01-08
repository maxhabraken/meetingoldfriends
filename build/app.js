class Game {
    constructor(canvasId) {
        this.loop = () => {
            requestAnimationFrame(this.loop);
            if (this.frameCounter < this.adDialogue.length) {
                this.joined += (this.adDialogue[this.frameCounter]);
                this.writeTextToCanvas(this.joined, 30, 1075, this.dialogueY, 'start', "rgb(69,66,63)");
            }
            this.frameCounter++;
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
                this.introductionScreen();
            }
            if (event.clientX >= 12 && event.clientX < 1907 && event.clientY >= 612 && event.clientY <= 1067 && this.currentScreen === "introductionScreen") {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.levelScreen();
            }
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        document.addEventListener("click", this.mouseHandler);
        this.dialogue = {
            Set1: {
                q1: 'Hey, mijn naam is Ad, hoe gaat het met je?',
                a1: 'Met mij gaat alles goed, met jou?',
                a2: '',
                a3: '',
                a4: '',
            },
            Set2: {
                q1: 'Hoe heet je?',
                a1: 'Mijn naam is ...',
                a2: '',
                a3: '',
                a4: '',
            },
            set3: {
                q1: 'Aangenaam kennis te maken',
                a1: '',
                a2: '',
                a3: '',
                a4: '',
            },
            set4: {
                q1: 'Die naam komt me bekend voor, ken ik jou ergens van?',
                a1: 'A) Waarschijnlijk niet',
                a2: 'B) Zou je me kunnen vertellen waarvan?',
                a3: 'C) Ik ken niemand die Ad heet.',
                a4: ''
            },
            set5: {
                q1: 'Ik ken je van school',
                a1: 'Op welke school zit ik dan?',
                a2: 'Ik heb die naam echt nog nooit gehoord',
                a3: 'Zou goed kunnen',
                a4: ''
            },
            set6: {
                q1: 'Jij zit toch op de regenboog?',
                a1: 'Hoe ben je daar achter gekomen?',
                a2: 'Dat Klopt',
                a3: '',
                a4: '',
            },
            set7: {
                q1: 'Dat hoorde ik van een vriend van je',
                a1: '',
                a2: '',
                a3: '',
                a4: '',
            },
            set8: {
                q1: 'Wat doe je graag in je vrije tijd?',
                a1: 'Tekenen',
                a2: 'Sporten',
                a3: 'Gamen',
                a4: 'Koken',
            },
            set9: {
                q1: 'Oh leuk daar hou ik ook van!',
                a1: '',
                a2: '',
                a3: '',
                a4: '',
            },
            set10: {
                q1: 'Daar ben je vast heel goed in',
                a1: '',
                a2: '',
                a3: '',
                a4: '',
            },
        };
        this.answerInfo = {
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
        this.array = [];
        this.frameCounter = 0;
        this.adDialogue = this.dialogue.set1.q1;
        this.joined = "";
        this.dialogueY = 60;
        this.currentScreen = "titleScreen";
        this.titleScreen();
    }
    titleScreen() {
        const Button = "./assets/images/button.png";
        this.loadImage(Button, this.writeButtonToStartScreen);
        this.writeTextToCanvas("Meeting old", 140, this.canvas.width / 2, 175);
        this.writeTextToCanvas("\"friends\"", 140, this.canvas.width / 2, 300);
        this.currentScreen = "titleScreen";
    }
    introductionScreen() {
        const characterImage = "./assests/images/miniAd2.png";
        this.loadImage(characterImage, this.characterPosition);
        const speechBubble = "./assets/images/speechBubble.png";
        this.loadImage(speechBubble, this.speechBubblePosition);
        const introBox = "./assets/images/choiceBox.png";
        this.loadImage(introBox, this.choiceBoxPosition);
        this.currentScreen = "introductionScreen";
        this.loop();
    }
    levelScreen() {
        const characterImage = "./assets/images/miniAd2.png";
        this.loadImage(characterImage, this.characterPosition);
        const speechBubble = "./assets/images/speechBubble.png";
        this.loadImage(speechBubble, this.speechBubblePosition);
        const choiceBox = "./assets/images/choiceBox.png";
        this.loadImage(choiceBox, this.choiceBoxPosition);
        this.currentScreen = "levelScreen";
        this.loop();
    }
    choiceBoxPosition(img) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x - img.width / 2, y - 540);
        this.loadAnswers();
    }
    loadAnswers() {
        this.writeTextToCanvas(this.dialogue.set1.a1, 20, this.answerInfo.A.xPos, this.answerInfo.A.yPos, "start", "black");
        this.writeTextToCanvas(this.dialogue.set1.a2, 20, this.answerInfo.B.xPos, this.answerInfo.B.yPos, "start", "black");
        this.writeTextToCanvas(this.dialogue.set1.a3, this.answerInfo.C.fontSize, this.answerInfo.C.xPos, this.answerInfo.C.yPos, "start", "black");
        this.writeTextToCanvas(this.dialogue.set1.a4, 20, this.answerInfo.D.xPos, this.answerInfo.D.yPos, "start", "black");
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