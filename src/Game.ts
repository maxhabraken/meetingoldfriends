class Game {
    private readonly canvas: HTMLCanvasElement;
    private readonly ctx: CanvasRenderingContext2D;

    public constructor(canvasId: HTMLCanvasElement) {
        // Construct all of the canvas
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        // Set the context of the canvas
        this.ctx = this.canvas.getContext("2d");
        document.addEventListener("click", this.mouseHandler);

        //draws the screen that is highlighted
        // this.startScreen();
        this.levelScreen();

    }

    //draws startscreen
    public startScreen() {
        //loads and draws images to canvas
        const Button = "./assets/images/button.png";
        this.loadImage(Button, this.writeButtonToStartScreen);
        //writes text to canvas
        this.writeTextToCanvas("Meeting old", 140, this.canvas.width / 2, 175);
        this.writeTextToCanvas("\"friends\"", 140, this.canvas.width / 2, 300);
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
    }

    private mouseHandler = (event: MouseEvent) => {
        //logs the coordinates of the position where the screen is clicked
        console.log(`xPos ${event.clientX}, yPos ${event.clientY}`);
        //hitbox of choiceBox 1
        if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 612 && event.clientY <= 827) {
            console.log('1');
        };
        //hitbox of choiceBox 2
        if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 612 && event.clientY <= 827) {
            console.log('2');
        };
        //hitbox of choiceBox 3
        if (event.clientX >= 12 && event.clientX < 948 && event.clientY >= 851 && event.clientY <= 1067) {
            console.log('3');
        };
        //hitbox of choiceBox 4
        if (event.clientX >= 972 && event.clientX < 1907 && event.clientY >= 851 && event.clientY <= 1067) {
            console.log('4');
        };
    }

    //decides the positions of all the elements on the canvas
    private choiceBoxPosition(img: HTMLImageElement) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x - img.width / 2, y - 540);
    }

    private drawTitleScreenToCanvas(img: HTMLImageElement) {
        const x = this.canvas.width / 2;
        const y = this.canvas.height / 2;
        this.ctx.drawImage(img, x, y - 1000);
        this.writeTextToCanvas("Play", 70, x, y + 550, "center", "rgb(69,66,63)");
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

