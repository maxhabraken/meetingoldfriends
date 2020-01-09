class Game {
    constructor(canvasId) {
        this.loop = () => {
            requestAnimationFrame(this.loop);
            if (this.frameCounter < this.adDialogue.length) {
                this.joined += (this.adDialogue[this.frameCounter]);
            }
            ;
            this.writeTextToSpeechBubble();
            this.frameCounter++;
        };
        this.mouseHandler = (event) => {
            console.log(`xPos ${event.clientX}, yPos ${event.clientY}`);
            if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 612 && event.clientY <= 827 && this.currentScreen === "levelScreen") {
                if (this.dialogue[this.currentSet].a1 != '') {
                    this.setId = this.dialogue[this.currentSet].a1id;
                    console.log(this.setId);
                    this.progressDialogue();
                    this.score += this.dialogue[this.currentSet].score1;
                }
                ;
            }
            ;
            if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 612 && event.clientY <= 827 && this.currentScreen === "levelScreen") {
                if (this.dialogue[this.currentSet].a2 != '') {
                    this.setId = this.dialogue[this.currentSet].a2id;
                    console.log(this.setId);
                    this.progressDialogue();
                    this.score += this.dialogue[this.currentSet].score2;
                }
                ;
            }
            ;
            if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 851 && event.clientY <= 1067 && this.currentScreen === "levelScreen") {
                if (this.dialogue[this.currentSet].a3 != '') {
                    this.setId = this.dialogue[this.currentSet].a3id;
                    console.log(this.setId);
                    this.progressDialogue();
                    this.score += this.dialogue[this.currentSet].score3;
                }
                ;
            }
            ;
            if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 851 && event.clientY <= 1067 && this.currentScreen === "levelScreen") {
                if (this.dialogue[this.currentSet].a4 != '') {
                    this.setId = this.dialogue[this.currentSet].a4id;
                    console.log(this.setId);
                    this.progressDialogue();
                    this.score += this.dialogue[this.currentSet].score4;
                }
                ;
            }
            ;
            if (event.clientX >= 674 && event.clientX < 1235 && event.clientY >= 562 && event.clientY <= 666 && this.currentScreen === "titleScreen") {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.levelScreen();
            }
            ;
        };
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.ctx = this.canvas.getContext("2d");
        document.addEventListener("click", this.mouseHandler);
        this.dialogue = {
            set1: {
                id: 1,
                q1: 'Hey, mijn naam is Ad, hoe gaat het met je?',
                a1: 'A) Met mij gaat alles goed, met jou?',
                a1id: 2,
                a2: '',
                a3: '',
                a4: '',
            },
            set2: {
                id: 2,
                q1: 'Hoe heet je?',
                a1: 'A) Mijn naam is ...',
                a1id: 3,
                a2: '',
                a3: '',
                a4: '',
            },
            set3: {
                id: 3,
                q1: 'Aangenaam kennis te maken',
                a1: 'A) Vind ik ook',
                a1Score: 0,
                a1id: 4,
                a2: 'B) Insgelijks ',
                a2Score: 0,
                a2id: 4,
                a3: 'C) Dankje',
                a3Score: 0,
                a3id: 4,
                a4: 'D) Ja',
                a4Score: 0,
                a4id: 4
            },
            set4: {
                id: 4,
                q1: 'Die naam komt me bekend voor, \nken ik jou ergens van?',
                a1: 'A) Waarschijnlijk niet',
                a1Score: 0,
                a1id: 5,
                a2: 'B) Zou je me kunnen vertellen waarvan?',
                a2Score: 0,
                a2id: 5,
                a3: 'C) Ik ken niemand die Ad heet.',
                a3Score: 0,
                a3id: 5,
                a4: ''
            },
            set5: {
                index: 5,
                q1: 'Ik ken je van school',
                a1: 'A) Op welke school zit ik dan?',
                a1Score: 0,
                a1id: 6,
                a2: 'B) Ik heb die naam echt nog nooit gehoord',
                a2Score: 0,
                a2id: 6,
                a3: 'C) Zou goed kunnen',
                a3Score: 0,
                a3id: 6,
                a4: ''
            },
            set6: {
                q1: 'Jij zit toch op de regenboog?',
                a1: 'A) Hoe ben je daar achter gekomen?',
                a1Score: 0,
                a1id: 7,
                a2: 'B) Dat Klopt',
                a2Score: 0,
                a2id: 7,
                a3: '',
                a4: '',
            },
            set7: {
                q1: 'Dat hoorde ik van een vriend van je',
                a1: 'A) Dat kan best',
                a1Score: 0,
                a1id: 8,
                a2: '',
                a3: '',
                a4: '',
            },
            set8: {
                q1: 'Wat doe je graag in je vrije tijd?',
                a1: 'A) Tekenen',
                a1Score: 0,
                a1id: 9,
                a2: 'B) Sporten',
                a2Score: 0,
                a2id: 9,
                a3: 'C) Gamen',
                a3Score: 0,
                a3id: 9,
                a4: 'D) Koken',
                a4Score: 0,
                a4id: 9,
            },
            set9: {
                q1: 'Oh leuk daar hou ik ook van!',
                a1: 'A) Top',
                a1Score: 0,
                a1id: 10,
                a2: '',
                a3: '',
                a4: '',
            },
            set10: {
                q1: 'Daar ben je vast heel goed in',
                a1: 'A) Zeker weten',
                a1Score: 0,
                a1id: 11,
                score1: '0',
                a2: '',
                a3: '',
                a4: '',
            },
            set11: {
                q1: 'Daar ben je vast heel goed in',
                a1: 'A) Einde',
                a1Score: 0,
                a1id: 12,
                a2: '',
                a3: '',
                a4: '',
            },
        };
        this.score = 0;
        this.setId = 1;
        this.currentSet = 'set' + this.setId.toString();
        this.questionInfo = {
            xPos: 1075,
            yPos: 60
        };
        this.answerInfo = {
            A: {
                xPos: 44,
                yPos: 641
            },
            B: {
                xPos: 1010,
                yPos: 641
            },
            C: {
                xPos: 44,
                yPos: 885
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
        this.currentScreen = "titleScreen";
        this.titleScreen();
    }
    ;
    titleScreen() {
        const Button = "./assets/images/button.png";
        this.loadImage(Button, this.writeButtonToStartScreen);
        this.writeTextToCanvas("Meeting old", 140, this.canvas.width / 2, 175);
        this.writeTextToCanvas("\"friends\"", 140, this.canvas.width / 2, 300);
        this.currentScreen = "titleScreen";
    }
    ;
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
    ;
    progressDialogue() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.levelScreen();
        this.frameCounter = 0;
        this.currentSet = 'set' + this.setId;
        this.joined = '';
        this.adDialogue = this.dialogue[this.currentSet].q1;
        this.loadAnswers();
    }
    ;
    choiceBoxPosition(img) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x - img.width / 2, y - 540);
        this.loadAnswers();
    }
    ;
    loadAnswers() {
        this.writeTextToCanvas(this.dialogue[this.currentSet].a1, 20, this.answerInfo.A.xPos, this.answerInfo.A.yPos, "start", "black");
        this.writeTextToCanvas(this.dialogue[this.currentSet].a2, 20, this.answerInfo.B.xPos, this.answerInfo.B.yPos, "start", "black");
        this.writeTextToCanvas(this.dialogue[this.currentSet].a3, this.answerInfo.C.fontSize, this.answerInfo.C.xPos, this.answerInfo.C.yPos, "start", "black");
        this.writeTextToCanvas(this.dialogue[this.currentSet].a4, 20, this.answerInfo.D.xPos, this.answerInfo.D.yPos, "start", "black");
    }
    ;
    writeButtonToStartScreen(img) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height - 1000;
        this.ctx.drawImage(img, x - img.width / 2, y);
        this.writeTextToCanvas("Play", 70, x, y + 550, "center", "rgb(69,66,63)");
    }
    ;
    characterPosition(img) {
        const x = this.canvas.width / 2 - 100;
        const y = this.canvas.height / 2 - 768;
        this.ctx.drawImage(img, (x - img.width / 2), y);
    }
    ;
    speechBubblePosition(img) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x + 70, y - 533);
    }
    ;
    writeTextToSpeechBubble() {
        let lineheight = 40;
        let lines = this.joined.split('\n');
        for (let i = 0; i < lines.length; i++) {
            this.writeTextToCanvas(lines[i], 30, this.questionInfo.xPos, this.questionInfo.yPos + (i * lineheight), 'start', "rgb(69,66,63)");
        }
        ;
    }
    ;
    writeTextToCanvas(text, fontSize = 20, xCoordinate, yCoordinate, alignment = "center", color = "white") {
        this.ctx.font = `${fontSize}px Undertale`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }
    ;
    loadImage(source, callback) {
        const imageElement = new Image();
        imageElement.addEventListener("load", () => {
            callback.apply(this, [imageElement]);
        });
        imageElement.src = source;
    }
    ;
}
;
let init = function () {
    const meetingnewfriends = new Game(document.getElementById("canvas"));
};
window.addEventListener("load", init);
//# sourceMappingURL=app.js.map