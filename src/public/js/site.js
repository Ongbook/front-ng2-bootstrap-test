window.addEventListener("load", function () {
    //github
    var orgMembers = GhOrgMembers({
        container: "#org-members"
        , userTempl: "<div class='user'>"
        + "    <a href='{{html_url}}' target='blank'>"
        + "        <img src='{{avatar_url}}' class='avatar'>"
        + "        <span class='name'>{{login}}</span>"
        + "    </a>"
        + "</div>"
        , org: "ongbook"
    });

    orgMembers.done = function (err, data) {
        if (err) { return; }
        document.getElementById("count").innerHTML = data.length.toString();
        document.querySelector(".description").style.display = "block";
    };

    //parallax
    $('.parallax-window').parallax({ imageSrc: 'img/nat.jpg' });
    console.log('parallax adicionado');
});