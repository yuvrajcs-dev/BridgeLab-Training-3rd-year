
const user = {
    name: "Yuvraj",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

// Fix using normal function
const user2 = {
    name: "Yuvraj",

    showName: function() {
        console.log(this.name);
    }
};

user2.showName();
