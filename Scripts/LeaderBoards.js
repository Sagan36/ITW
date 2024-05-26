let CURRENT_USER = JSON.parse(localStorage.getItem('currentLogin'))

function CurrentGameInfo(user, time){
    this.user = user
    this.time = time
}
