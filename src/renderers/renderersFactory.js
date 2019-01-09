/**
 * 渲染器
 * @private @constant
 */
const RENDERER = {
    /**
     * CSS3 渲染模式
     * @private @readonly
     */
    css3: require('./css3Renderer').CSS3Renderer,
    /**
     * WebGL 渲染模式
     * @private @readonly
     */
    webgl: require('./webglRenderer').WebGLRenderer,
    /**
     * Canvas 2D 渲染模式
     * @private @readonly
     */
    canvas: require('./canvasRenderer').CanvasRenderer
}

class RenderersFactory {
    constructor(element, options, elementSize, event, bulletScreensOnScreen) {
        /**
         * 获取渲染器
         * @function
         * @param {String} renderMode - 渲染模式
         */
        this.getRenderer = (renderMode) =>
            new RENDERER[renderMode](element, options, elementSize, event, bulletScreensOnScreen);
    }
}

export { RenderersFactory };