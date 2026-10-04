let users = [
 {id: 1, name: "Вася"},
 {id: 2, name: "Петя"},
 {id: 3, name: "Маша"}

];

function userId(arr){
   return arr.reduce((acc, user)=> {
     if(user.id % 2 === 0){
       acc.push(user.id);
     }  
     return acc;
   }, []);
}
console.log(userId(users));


// Сделайте так чтобы у всех добавлися возраст(age) со значением 18
// Только у маши должно быть 22 используя reduce

function addAge(arr){
    return arr.reduce((acc, user) => {
        if(user.name === "Маша"){
            user.age = 22;
        }
        else{
            user.age = 18;
        }
        acc.push(user);
        return acc;
    }, []); 

}
 console.log(addAge(users));
 