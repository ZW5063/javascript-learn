// 抽象对象
// 1.该对象具有切换功能
// 2.对象具有添加功能
// 3.该对象具有删除功能
// 4.该对象具有修改功能
let _that; 
console.log(element.insertAdjacentHTML);
class Tab {
  constructor(id) {
    _that = this;
    this.tab = document.getElementById(id);
    this.lis = this.tab.querySelectorAll('li');
    this.sections = this.tab.querySelectorAll('section');
    this.init();
  }
  // 初始化
  init() {
    for(let i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = this.tobbleTab;
    }
  }
  // 1.切换功能
  tobbleTab() {
    _that.clearStyle();
    this.className = 'li-style';
    _that.sections[this.index].className = 'con-style';
  }

  clearStyle() {
    for(let j = 0; j < this.lis.length; j++){
      this.lis[j].className = '';
      this.sections[j].className = '';
    }
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