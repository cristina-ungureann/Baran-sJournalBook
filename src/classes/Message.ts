export class Message{
    constructor(
        public name: string,
        public email: string,
        public message: string
    ){

    }

    inLine (){
        return `${this.name} - ${this.email} - ${this.message}`
    }
}