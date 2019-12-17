class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;
    public frameCounter: number;
    public array: string[];
    public adDialogue: string;
    public joined: string;
    public currentScreen: any;
    public dialogue: any;
    public answerInfo: any;
    public dialogueY: number

    public constructor(canvasId: HTMLCanvasElement) {
        // Construct all of the canvas
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        // Set the context of the canvas
        this.ctx = this.canvas.getContext("2d");
        document.addEventListener("click", this.mouseHandler);

        this.dialogue = {
            set1: {
                q1: 'Die naam komt me bekend voor, ken ik jou ergens van?',
                a1: 'A) Waarschijnlijk niet',
                a2: 'B) Zou je me kunnen vertellen waarvan?',
                a3: 'C) Ik ken niemand die Ad heet.',
                a4: ''
            }
        }

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
        this.adDialogue = this.dialogue.set1.q1
        this.joined = ""
        this.dialogueY = 60


        // allows methods to check which screen the game is on
        this.currentScreen = "titleScreen";

        // allows you to write screens to the canvas
        // this.titleScreen();
        this.levelScreen();
        // this.loop();
    }

    public loop = () => {
        // this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


        //x1689 , y50
        requestAnimationFrame(this.loop);

        if (this.frameCounter < this.adDialogue.length) {
            this.joined += (this.adDialogue[this.frameCounter])
            this.writeTextToCanvas(this.joined, 30, 1075, this.dialogueY, 'start', "rgb(69,66,63)");
        }

        // if (this.joined.length == 38) { this.dialogueY += 20 }




        this.frameCounter++;
    }

    //draws startscreen
    public titleScreen() {
        //loads and draws images to canvas
        const Button = "./assets/images/button.png";
        this.loadImage(Button, this.writeButtonToStartScreen);
        //writes text to canvas
        this.writeTextToCanvas("Meeting old", 140, this.canvas.width / 2, 175);
        this.writeTextToCanvas("\"friends\"", 140, this.canvas.width / 2, 300);

        this.currentScreen = "titleScreen";
    }

    //draws levelScreen
    public levelScreen() {
        //loads and draws images to canvas
        const characterImage = "./assets/images/miniAd2.png";
        this.loadImage(characterImage, this.characterPosition);
        const speechBubble = "./assets/images/speechBubble.png";
        this.loadImage(speechBubble, this.speechBubblePosition);
        const choiceBox = "./assets/images/choiceBox.png";
        this.loadImage(choiceBox, this.choiceBoxPosition);

        this.currentScreen = "levelScreen";
        this.loop();
    }

    private mouseHandler = (event: MouseEvent) => {
        //logs the coordinates of the position where the screen is clicked
        console.log(`xPos ${event.clientX}, yPos ${event.clientY}`);
        //hitbox of choiceBox 1
        if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 612 && event.clientY <= 827 && this.currentScreen === "levelScreen") {
            console.log('A');
        };
        //hitbox of choiceBox 2
        if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 612 && event.clientY <= 827 && this.currentScreen === "levelScreen") {
            console.log('B');
        };
        //hitbox of choiceBox 3
        if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 851 && event.clientY <= 1067 && this.currentScreen === "levelScreen") {
            console.log('C');
        };
        //hitbox of choiceBox 4
        if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 851 && event.clientY <= 1067 && this.currentScreen === "levelScreen") {
            console.log('D');
        };

        //hitbox of button
        if (event.clientX >= 674 && event.clientX < 1235 && event.clientY >= 562 && event.clientY <= 666 && this.currentScreen === "titleScreen") {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.levelScreen();
        }
    }



    //decides the positions of all the elements on the canvas
    private choiceBoxPosition(img: HTMLImageElement) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x - img.width / 2, y - 540);
        this.loadAnswers();
    }

    private loadAnswers() {
        // write the first answer to the choiceBox
        this.writeTextToCanvas(this.dialogue.set1.a1, 20, this.answerInfo.A.xPos, this.answerInfo.A.yPos, "start", "black");
        // write the seconds answer to the choiceBox
        this.writeTextToCanvas(this.dialogue.set1.a2, 20, this.answerInfo.B.xPos, this.answerInfo.B.yPos, "start", "black");
        // write the third answer to the choiceBox
        this.writeTextToCanvas(this.dialogue.set1.a3, this.answerInfo.C.fontSize, this.answerInfo.C.xPos, this.answerInfo.C.yPos, "start", "black");
        // write the fourth answer to the choiceBox
        this.writeTextToCanvas(this.dialogue.set1.a4, 20, this.answerInfo.D.xPos, this.answerInfo.D.yPos, "start", "black");
    }

    private writeButtonToStartScreen(img: HTMLImageElement) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height - 1000;
        this.ctx.drawImage(img, x - img.width / 2, y);
        this.writeTextToCanvas("Play", 70, x, y + 550, "center", "rgb(69,66,63)");
    }

    private characterPosition(img: HTMLImageElement) {
        const x = this.canvas.width / 2 - 100;
        const y = this.canvas.height / 2 - 768;
        this.ctx.drawImage(img, (x - img.width / 2), y);
    }

    private speechBubblePosition(img: HTMLImageElement) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x + 70, y - 533);
    }

    /**
     * Writes text to the canvas
     * @param {string} text - Text to write
     * @param {number} fontSize - Font size in pixels
     * @param {number} xCoordinate - Horizontal coordinate in pixels
     * @param {number} yCoordinate - Vertical coordinate in pixels
     * @param {string} alignment - Where to align the text
     * @param {string} color - The color of the text
     */
    public writeTextToCanvas(
        text: string,
        fontSize: number = 20,
        xCoordinate: number,
        yCoordinate: number,
        alignment: CanvasTextAlign = "center",
        color: string = "white",
    ) {
        this.ctx.font = `${fontSize}px Undertale`;
        this.ctx.fillStyle = color;
        this.ctx.textAlign = alignment;
        this.ctx.fillText(text, xCoordinate, yCoordinate);
    }

    /**
     * Loads an image file into the DOM and writes it to the canvas. After the
     * image is loaded and ready to be drawn to the canvas, the specified
     * callback method will be invoked. the method will be called with the
     * loaded imageElement as a parameter.
     *
     * The callback method MUST be a method of this class with a header like:
     *
     *   private yourMethodNameHere(img: HTMLImageElement)
     *
     * In the body of that callback you can draw the image to the canvas
     * context like:
     *
     *   this.ctx.drawImage(img, someX, someY);
     *
     * This is the simplest way to draw images, because the browser must and
     * shall wait until the image is completely loaded into memory.
     *
     * @param {string} source - the name of the image file
     * @param {Function} callback - method that is invoked after the image is loaded
     */
    private loadImage(source: string, callback: Function) {
        const imageElement = new Image();

        // We must wait until the image file is loaded into the element
        // We add an event listener
        // We'll be using an arrow function for this, just because we must.
        imageElement.addEventListener("load", () => {
            callback.apply(this, [imageElement]);
        });

        // Now, set the src to start loading the image
        imageElement.src = source;
    }
}


// This will get an HTML element. I cast this element in de appropriate type using <>
let init = function () {
    const meetingnewfriends = new Game(document.getElementById("canvas") as HTMLCanvasElement);
};


// Add EventListener to load the game whenever the browser is ready
window.addEventListener("load", init);