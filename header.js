function Header() {
  var dom = document.getElementById("root");
  var header = document.createElement("div");
  header.innerText = "这是header";
  dom.append(header);
}

module.exports = Header;
