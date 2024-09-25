document.getElementById("post_button").onclick = function(){

    let postBox = document.createElement("div")
    let posterName = document.createElement("h3")
    let post = document.createElement("p")

    postBox.className = "post_box"
    posterName.className = "poster_name"
    post.className = "post"

    posterName.innerText = document.getElementById("username").value
    post.innerText = document.getElementById("userpost").value

    postBox.append(posterName)
    postBox.append(post)
    document.body.append(postBox)

}