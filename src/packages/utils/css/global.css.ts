import { globalStyle } from '@vanilla-extract/css';

const parentElements = ['canvas', 'iframe', 'img', 'svg', 'video'];
const childElements = ['svg *', 'symbol *'];

globalStyle(`*:not(${[...parentElements, ...childElements].join()})`, {
    /**
     * unset是取消设置的意思，
     * 也就是当前元素浏览器或用户设置的CSS忽略，
     * 如果是具有继承特性的CSS，如color，则使用继承值；
     * 如果是没有继承特性的CSS属性，如background-color，则使用初始值。
     */
    all: 'unset',
    /**
     * CSS 的属性从继承的角度看，可以分为继承类型（Inherited properties）和非继承类型（Non-inherited properties），
     * 两个类型的属性初始值是不一样的，对于继承类型的属性来说，默认值是 inherit；非继承类型的属性的默认值则是 initial。
     * 当我们在开发中想要取消某个样式属性的时候，可以将该属性设回默认值。而且我们大可不必死记硬背哪些属性是继承属性，
     * 要改成 inherit，哪些是非继承属性又要改成 initial，只要将属性设置为 unset，样式解析器会自己进行判断。
     * 但是，unset 不适用于 display 属性。display 属于非继承属性，
     * 因此 unset 会将它设置成 initial，但是 display 的 initial 属性值是 inline，这点和我们的预期不符。
     * 所以对于 display，我们要将它设置为 revert 这个属性值。
     */
    display: 'revert',
});

globalStyle('*, *::before, *::after', {
    boxSizing: 'border-box',
});
