// 获取元素
var getElem = function (selector) {
    return document.querySelector(selector);
}

// 获取每一个元素
var getAllElem = function (selector) {
    return document.querySelectorAll(selector);
}


// 获取元素样式
var getCls = function (element) {
    return element.getAttribute("class");
}

// 设置元素样式
var setCls = function (element, cls) {
    return element.setAttribute("class", cls);
}

// 为元素添加样式
var addCls = function (element, cls) {
    var baseCls = getCls(element);
    if (baseCls.indexOf(cls) === -1)//如果没有这个样式，则添加
        setCls(element, baseCls + ' ' + cls);
}

// 为元素删除样式
var delCls = function (element, cls) {
    var baseCls = getCls(element);
    if (baseCls.indexOf(cls) != -1)
        // 将要删除的cls元素位置变成一个空格，然后全局修改将连续一个以上的空格变成一个空格
        setCls(element, baseCls.split(cls).join(' ').replace(/\s+/g, ' '));
}


// 第一步 初始化样式init
// 声明一个对象放每个屏幕内有动画的元素
var screenAnimateElements = {

    // 第一屏内有动画的元素
    '.screen-1': [
        '.screen-1__heading',
        '.screen-1__phone',
        '.screen-1__shadow',
    ],


    // 第二屏内有动画的元素
    '.screen-2': [
        '.screen-2__heading',
        '.screen-2__subheading',
        '.screen-2__phone',
        '.screen-2__point_i_1',
        '.screen-2__point_i_2',
        '.screen-2__point_i_3',
    ],


    // 第三屏内有动画的元素
    '.screen-3': [
        '.screen-3__heading',
        '.screen-3__subheading',
        '.screen-3__phone',
        '.screen-3__features',
    ],


    // 第四屏内有动画的元素
    '.screen-4': [
        '.screen-4__heading',
        '.screen-4__subheading',
        '.screen-4__type__item_i_1',
        '.screen-4__type__item_i_2',
        '.screen-4__type__item_i_3',
        '.screen-4__type__item_i_4',
    ],


    // 第五屏内有动画的元素
    '.screen-5': [
        '.screen-5__heading',
        '.screen-5__subheading',
        '.screen-5__bg',
    ]
}
// screenAnimateElements对象的定义结束

// 设置屏内元素的初始状态
var setScreenAnimateInit = function (screenCls) {

    var screen = document.querySelector(screenCls); //获取当前屏的元素
    var animateElements = screenAnimateElements[screenCls]; //获取当前屏内需要设置动画的元素

    for (var i = 0; i < animateElements.length; i++) {
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute('class');

        element.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '_animate_init');
        //substr(1)用于去掉前面的.

    }
}
// 设置播放屏内元素动画
var PlayScreenAnimateDone = function (screenCls) {
    var screen = document.querySelector(screenCls); //获取当前屏的元素
    var animateElements = screenAnimateElements[screenCls];//获取当前屏内需要设置动画的元素

    for (var i = 0; i < animateElements.length; i++) {
        var element = document.querySelector(animateElements[i]);
        var baseCls = element.getAttribute("class");
        element.setAttribute('class', baseCls.replace('_animate_init', '_animate_done'));
    }
}


var navItems = getAllElem('.header__nav-item'); //获得导航条的所有元素
var outLineItems = getAllElem('.outline__item'); //获得右侧导航栏的所有元素


//切换导航高亮的元素
var switchNavItemActive = function (idx) {
    // 切换导航条高亮部分
    for (var i = 0; i < navItems.length; i++) {
        delCls(navItems[i], 'header__nav-item_status_active');
    }
    addCls(navItems[idx], 'header__nav-item_status_active');


    // 切换右侧导航栏高亮部分
    for (var i = 0; i < outLineItems.length; i++) {
        delCls(outLineItems[i], 'outline__item_status_active');
    }
    addCls(outLineItems[idx], 'outline__item_status_active');

}


// 第二步 页面滚动到哪个屏幕，哪个屏幕就播放动画
window.onscroll = function () {

    var top = document.body.scrollTop;//获取滚动条的高度
    //console.log(top);

    if (top > 80) {//当高度高于80px
        addCls(getElem('.header'), 'header_status_black');//加入header_status_black样式，将导航条固定
        addCls(getElem('.outline'), 'outline_status_in');//加入outline_status_in样式，将右侧导航栏固定
    } else {//反之
        delCls(getElem('.header'), 'header_status_black');
        delCls(getElem('.outline'), 'outline_status_in');
        switchNavItemActive(0);
        navTip.style.left = (0 * 70) + "px";
    }


    // 播放第一屏动画
    if (top > 1) {
        PlayScreenAnimateDone('.screen-1');

    }

    // 播放第二屏动画
    if (top > 800 * 1 - 100) {
        PlayScreenAnimateDone('.screen-2');
        switchNavItemActive(1);
        navTip.style.left = (1 * 70) + "px";
    }

    // 播放第三屏动画
    if (top > 800 * 2 - 100) {
        PlayScreenAnimateDone('.screen-3');
        switchNavItemActive(2);
        navTip.style.left = (2 * 70) + "px";
    }

    // 播放第四屏动画
    if (top > 800 * 3 - 100) {
        PlayScreenAnimateDone('.screen-4');
        switchNavItemActive(3);
        navTip.style.left = (3 * 70) + "px";
    }

    // 播放第五屏动画
    if (top > 800 * 4 - 100) {
        PlayScreenAnimateDone('.screen-5');
        switchNavItemActive(4);
        navTip.style.left = (0 * 70) + "px";
    }

}


//第三步 导航条双向定位

/* 变量定义放到前面去了
var navItems = getAllElem('.header__nav-item'); //获得导航条的所有元素
var outLineItems = getAllElem('.outline__item'); //获得右侧导航栏的所有元素
*/


var setNavJump = function (i, lib) {//lib为：navItems导航条元素或者outLineItems右侧导航栏元素
    var item = lib[i];
    item.onclick = function () {
        //console.log(i); 
        document.body.scrollTop = i * 800;
    }
}

for (var i = 0; i < navItems.length; i++) {
    setNavJump(i, navItems);
}

for (var i = 0; i < outLineItems.length; i++) {
    setNavJump(i, outLineItems);
}


//第四步 滑动门特效
var navTip = getElem('.header__nav-tip');//获取元素
navTip.style.left = '20px';

var setTip = function (idx, lib) {
    lib[idx].onmouseover = function () {
        //console.log(this, idx);
        navTip.style.left = (idx * 70) + 'px';
    }

    var activeIdx = 0;
    lib[idx].onmouseout = function () {
        for (var i = 0; i < lib.length; i++) {
            if (getCls(lib[i]).indexOf('header__nav-item_status_active') != -1) {
                activeIdx = i;
                break;
            }
        }
        navTip.style.left = (activeIdx * 70) + 'px';
    }
}

for (var i = 0; i < navItems.length - 1; i++) {
    setTip(i, navItems);
}



//第五步 让第一屏init样式一开始就在css中添加，然后延时设置init-done动作
window.onload = function () {

    for (k in screenAnimateElements) {
        if (k == ".screen-1")
            continue;

        setScreenAnimateInit(k);
    }
}


// 小优化：默认载入第一屏的动画
setTimeout(function () {
    PlayScreenAnimateDone('.screen-1');
}, 200);
