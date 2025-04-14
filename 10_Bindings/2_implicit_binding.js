// in this program this will point to the object in which it is defined

let obj = {
    a : 1,
    b : 2,
    fun : function(){
        console.log(this);
        console.log("a = ", this.a);
        console.log("b = ", this.b);

        //Adding another key c
        this.c = 'Hello';
    }
}

obj.fun();
