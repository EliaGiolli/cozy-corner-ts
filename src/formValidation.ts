export class FormValidator{
    private formName: HTMLInputElement;
    private formEmail: HTMLInputElement;
    
    constructor(nameInput: HTMLInputElement, emailInput: HTMLInputElement) {
        this.formName = nameInput;
        this.formEmail = emailInput;
    }

    validate():boolean{
        if (!this.formName.value || !this.formEmail.value) {
            console.error('Missing name and/or email');
            alert("Both name and email are mandatory. Please try again.");
            return false;
        }

        if (!this.validateEmail(this.formEmail.value)) {
            console.error('Invalid email format');
            alert("Invalid email format. Please enter a valid email.");
            this.clearFields();
            return false;
        }

        console.log("Form submitted with name:", this.formName.value, "and email:", this.formEmail.value);
        this.clearFields();
        return true;
    }

    private clearFields() {
        this.formName.value = "";
        this.formEmail.value = "";
    }

    private validateEmail(email:string):boolean{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}