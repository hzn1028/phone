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

function setScreenAnimate(screenCls) {

    var screen = document.querySelector(screenCls); //获取当前屏的元素

    var animateElements = screenAnimateElements[screenCls]; //获取当前屏内需要设置动画的元素


    var isSetAnimateClass = false;   //是否有初始化子元素的样式？
    var isSetAnimateDone = false;   //当前屏下所有子元素的状态是done吗？

    screen.onclick = function () {

        //初始化样式，增加init
        if (isSetAnimateClass === false) {//如果子元素的样式没有初始化的话

            for (var i = 0; i < animateElements.length; i++) {
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');

                element.setAttribute('class', baseCls + ' ' + animateElements[i].substr(1) + '_animate_init');
                //substr(1)用于去掉前面的.

            }

            isSetAnimateClass = true; //设置完所有子元素的初始样式之后，记得把isSetAnimateClass的值改为true
            return;
        }


        // 切换所有的animateElements的class:init-->done
        if (isSetAnimateDone === false) { //如果子元素的状态不是done的话
            for (var i = 0; i < animateElements.length; i++) {
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');

                element.setAttribute('class', baseCls.replace('init', 'done'));

            }

            isSetAnimateDone = true;
            return;

        }

        // 切换所有的animateElements的class:done-->init
        if (isSetAnimateDone === true) { //如果子元素的状态不是done的话
            for (var i = 0; i < animateElements.length; i++) {
                var element = document.querySelector(animateElements[i]);
                var baseCls = element.getAttribute('class');

                element.setAttribute('class', baseCls.replace('done', 'init'));

            }
            isSetAnimateDone = false;
            return;

        }

    }
}


setScreenAnimate('.screen-1');
setScreenAnimate('.screen-2');
setScreenAnimate('.screen-3');
setScreenAnimate('.screen-4');
setScreenAnimate('.screen-5');