// 抽象对象
// 1.该对象具有切换功能
// 2.对象具有添加功能
// 3.该对象具有删除功能
// 4.该对象具有修改功能

class Tab {
  constructor(id) {
    this.tab = document.getElementById(id)
    this.lis = this.tab.querySelectorAll('li')
    this.sections = this.tab.querySelectorAll('section')
    this.init();
  }
  // 初始化
  init() {
    for(let i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = function(){
        console.log(this.index);
      }
    }
  }
  // 1.切换功能
  tobbleTab() {

  }
  // 2.新增功能
  addTab() {

  }
  // 3.删除功能
  delTab() {

  }
  // 4.编辑功能
  editTab() {

  }

}

const tab = new Tab('tab');