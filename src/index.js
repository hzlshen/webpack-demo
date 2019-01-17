import printMe from './print.js'
import { cube } from './math.js'

function component() {
  // const element = document.createElement('div');
  let element = document.createElement('pre');

  let btn = document.createElement("button");
  
  // lodash 是由当前 script 脚本 import 导入进来的
  // element.innerHTML = _.join(['Hello,','webpack'],' ');

  element.innerHTML = [
    'Hello webpack',
    '5 cube is equal to '+ cube(5)
  ].join('\n\n');
  
  element.classList.add('hello');

  btn.innerHTML = "console.log";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

// document.body.appendChild(component());
let element = component(); 
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}
//模块热替换(HMR - Hot Module Replacement)
//功能会在应用程序运行过程中替换、添加或删除模块，而无需重
// 新加载整个页面。主要是通过以下几种方式，来显著加快开发速度：

// 保留在完全重新加载页面时丢失的应用程序状态。
// 只更新变更内容，以节省宝贵的开发时间。
// 调整样式更加快速 - 几乎相当于在浏览器调试器中更改样式。