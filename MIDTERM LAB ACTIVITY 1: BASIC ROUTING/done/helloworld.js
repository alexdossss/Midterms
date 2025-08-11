export default function (firstname, lastname, age){
    return{
        firstname: firstname,
        lastname: lastname,
        age: age,
        fullname: function(){
            return this.firstname + " " + this.lastname
        },
        isAdult: function(){
            return this.age >=18;
        }
    }
}

