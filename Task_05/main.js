let time =
{
    hours: 0,
    minutes: 0,
    seconds: 0,
    AddNewTime() {
        let check = true
        while (check) {
            this.hours = +prompt("Введіть години:");
            this.minutes = +prompt("Введіть хвилини:");
            this.seconds = +prompt("Введіть секунди");

            if (isNaN(this.hours) || isNaN(this.minutes) || isNaN(this.seconds)) {
                alert("Будь ласка, введіть числа.")
            } else if (this.hours < 0 || this.hours > 23) {
                alert("Години повинні бути в межах від 0 до 23.");
            } else if (this.minutes < 0 || this.minutes > 59) {
                alert("Хвилини повинні бути в межах від 0 до 59.");
            } else if (this.seconds < 0 || this.seconds > 59) {
                alert("Секунди повинні бути в межах від 0 до 59.");
            } else { check = false; }
        }
    },

    AddSecond() {

        this.seconds += 1;
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes += 1;

            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours += 1;

                if (this.hours === 24) {
                    this.hours = 0;
                }
            }
        }

    },

    MinusSecond() {

        this.seconds -= 1;
        if (this.seconds === -1) {
            this.seconds = 59;
            this.minutes -= 1;

            if (this.minutes === -1) {
                this.minutes = 59;
                this.hours -= 1;

                if (this.hours === -1) {
                    this.hours = 23;

                }
            }
        }
    },
    Show() {
        console.log(` time: ${this.hours}:${this.minutes}:${this.seconds}`)
    }
};


time.AddNewTime();
time.Show();
time.AddSecond();
time.Show();
time.MinusSecond();
time.Show();

let car = {
    manufacturer: "none",
    model: "none",
    year : 0,
    avgSpeed:0,
    Show(){
        console.log(`Manufacturer: ${this.manufacturer}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Average speed: ${this.avgSpeed} km/h`);
    },
    Race(){
        let distance = +prompt("distance");
        let travelTime = distance / this.avgSpeed; 
        let restTime = parseInt( Math.floor(travelTime / 4)); 
        let totalTime = restTime + travelTime; 
        console.log(`Distance: ${distance} | totalTime: ${totalTime} | restTime: ${restTime} | `)
    
    },
    AddCar(){
        this.manufacturer = prompt("manufacturer");
        this.model = prompt("model");
        this.year = +prompt("year");
        this.avgSpeed = +prompt("average speed");
    }
}

car.AddCar();
car.Show();
car.Race();