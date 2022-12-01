function hasThisProperty(cb, str) {
    for (let key in cb){
        if (key == str) {
            return true
        }
        else {
            return false
        }
    }
}
