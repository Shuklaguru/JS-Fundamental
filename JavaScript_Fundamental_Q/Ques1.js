function outerfunction(followers){
    let name = "Guru"
    function innerfunction(){
       console.log(name,"have", followers,"followers");
    }
    return innerfunction();
}

const result = outerfunction(11);
console.log(result);