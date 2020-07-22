// Tree shaking摇树 只支持ES模块引入

// import "@babel/polyfill";
// babel window.Promise
import { add } from "./math.js";

add(1, 2);
