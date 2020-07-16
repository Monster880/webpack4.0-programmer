function Content() {
  var dom = document.getElementById("root");
  var content = document.createElement("div");
  content.innerText = "这是Content";
  dom.append(content);
}

export default Content;
