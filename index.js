function receivesAFunction(spy){
    spy()
}
function fn(){
    console.log("test")
}
function returnsANamedFunction(){
    return fn
}
function e(){
    console.log("test")
}
function returnsAnAnonymousFunction(){
    return function() {
        
    }
}