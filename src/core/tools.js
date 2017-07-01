
const Tools = {

  extractCookieSession: function (){
    var matched = document.cookie.match(/session=.[^;]*/);
    if(matched){
        var cookie = matched[0].split('=')
        return cookie[1]
    }
    return false
  }
};


export default Tools;
