class User {
    constructor(username, password) {
        this.username = username;
        this._password = password;
    }

    get password() {
        return this._password.replace(/./g, "*");
    }

    set password(newPassword) {
        const hasNumber = /\d/;
        const hasUpperCase = /[A-Z]/;

        if (newPassword.length < 8 || !hasNumber.test(newPassword) || !hasUpperCase.test(newPassword)) {
            console.error("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
        } else {
            this._password = newPassword;
        }
    }
}

const admin = new User("Mithun", "MyPaword123");

console.log(admin.password);

admin.password = "Mypassword";
