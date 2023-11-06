const a = {
    firstName:'Sumit',
    sleep: function(){
        console.log(`${this.firstName} is sleeping`)
    }
}
a.sleep();