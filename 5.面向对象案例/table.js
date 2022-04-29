// 抽象对象
// 1.该对象具有切换功能
// 2.对象具有添加功能
// 3.该对象具有删除功能
// 4.该对象具有修改功能
let _that; 
// console.log(element.insertAdjacentHTML);
// element.insertAdjacentHTML(position, text);
// position 是相对于元素的位置，并且必须是以下字符串之一
// 'beforebegin' 元素自身前面
// 'afterbegin' 插入元素内部的第一个子节点前
// 'beforeend' 插入元素内部最后一个子节点后
// 'afterend' 元素自身后面

// text 是要被解析为HTML或XML，并且插入到DOM树中的字符串
class Tab {
  constructor(id, jia) {
    _that = this;
    this.tab = document.getElementById(id);
    this.addBtn = document.querySelector(jia);
    this.ul = document.querySelector('.ul');
    this.main = document.querySelector('.main');
    
    this.init();
  }
  getNode() {
    this.del = document.querySelectorAll('.jian');
    this.lis = this.tab.querySelectorAll('li');
    this.sections = this.tab.querySelectorAll('section');
  }
  // 初始化
  init() {
    this.getNode();
    for(let i = 0; i < this.lis.length; i++) {
      this.lis[i].index = i;
      this.lis[i].onclick = this.tobbleTab;
      this.del[i].onclick = function(e){
        e.stopPropagation();
        
        console.log('删除了'[i],e);
      };
    }
    
    this.addBtn.onclick = this.addTab;
    console.log(this.del, this.addBtn);

  }
  // 1.切换功能
  tobbleTab() {
    console.log('切换');
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
    console.log(_that.lis.length);
    if(_that.lis.length == 5){
      alert('最多五个')
      return
    }
    _that.clearStyle();
    const li = '<li class="li-style">新建页签<span class="jian">-</span></li>';
    const random = Math.random();
    const section = `<section class="con-style">内容${random}}</section>`
    _that.ul.insertAdjacentHTML('beforeend', li);
    _that.main.insertAdjacentHTML('beforeend', section);
    _that.init();

  }
  // 3.删除功能
  delTab() {
    console.log('删除');
  }
  // 4.编辑功能
  editTab() {

  }

}

const tab = new Tab('tab', '.jia');