window.snapKitInit = async function() {
  var loginButtonIconId = "my-login-button-target";
  // Mount Login Button
  await snap.loginkit.mountButton(loginButtonIconId, {
    clientId: "b05d25df-3fea-49f3-b6a2-d1af002ce3dc",
    redirectURI: "https://snap-vote.herokuapp.com/users",
    scopeList: ["user.display_name", "user.bitmoji.avatar"],
    handleResponseCallback: async function() {
      await snap.loginkit
        .fetchUserInfo()
        .then(data => {
          localStorage.setItem("userSnap", data.data.me.bitmoji.avatar);
          localStorage.setItem("userName", data.data.me.displayName);
          console.log("User info:", data);
          window.location = "/users";
        })
        .catch(e => {
          console.log(e);
        });
    }
  });
};

// Load the SDK asynchronously
(function(d, s, id) {
  var js,
    sjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://sdk.snapkit.com/js/v1/login.js";
  sjs.parentNode.insertBefore(js, sjs);
})(document, "script", "loginkit-sdk");
