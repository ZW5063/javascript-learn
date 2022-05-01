
// 
// 'afterend' 元素自身后面
// insertAdjacentHTML
// 'beforeend' 插入元素内部最后一个子节点后
var _that;
class Tab {
    constructor() {
        this.addbtn = document.querySelector('.jia')
        _that = this;
        this.ul = document.querySelector('.ul')
        this.init();
    }

    // 初始化
    init() {
        this.getNode();
        this.addbtn.onclick = this.addContent;
    }

    // 获取节点
    getNode() {
        this.lis = document.querySelectorAll('li');
        this.jian = document.querySelectorAll('.jian');
        console.log(this.jian);
        console.log(this.lis.chil);
        for(let i = 0; i < this.lis.length; i ++){
            this.jian[i].onclick = this.delContent;
            this.lis[i].index = i;
            this.lis[i].onclick = this.checkoutContent;
        }
    }

    // 1.新增内容
    addContent() {
        _that.ul.insertAdjacentHTML('beforeend', `<li>测试${_that.lis.length + 1}<span class="jian">-</span></li>`)
        _that.init();

    }

    // 2.删除内容
    delContent(e) {
        e.stopPropagation();
        e.path[1].remove()
        console.log(e);
        console.log('删除',this.prantNode);
        
        
    }
    
    // 3.编辑内容
    editContent() {

    }

    // 清除样式
    clearStyle() {
        for(let j = 0; j < _that.lis.length; j++){
            _that.lis[j].className = '';
        }
    }

    // 切换内容
    checkoutContent() {
        _that.clearStyle();
        console.log(this.index);
        this.className = 'li-style';

    }
}

const tab = new Tab();