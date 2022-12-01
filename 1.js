function properties(cb) {
    for (let key in cb){
        if (cb.hasOwnProperty(key)) {
            console.log(key)
        }
    }
}
