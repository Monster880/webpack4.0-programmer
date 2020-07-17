function Sidebar() {
  var dom = document.getElementById("root");
  var sidebar = document.createElement("div");
  sidebar.innerText = "这是sidebar";
  dom.append(sidebar);
}

module.exports = Sidebar;
