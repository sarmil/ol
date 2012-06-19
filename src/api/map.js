goog.provide('ol.map');

goog.require('ol.Loc');
goog.require('ol.Map');
goog.require('ol.Projection');
goog.require('ol.loc');
goog.require('ol.projection');


/**
 * @typedef {ol.Map|Object|string}
 */
ol.MapLike;


/**
 * @param {ol.MapLike=} opt_arg Argument.
 * @return {ol.Map} Map.
 */
ol.map = function(opt_arg){

    var center;
    var target;
    var zoom;
    
    if (arguments.length == 1) {
        if (opt_arg instanceof ol.Map) {
            return opt_arg;
        }
        else if (goog.isObject(opt_arg)) {
            center = opt_arg['center'];
            target = opt_arg['target'];
            zoom = opt_arg['zoom'];
        }
        else {
            throw new Error('ol.map');
        }
    }
    
    var map = new ol.Map();
    if (goog.isDef(center)) {
        map.setCenter(ol.loc(center));
    }
    if (goog.isDef(zoom)) {
        map.setZoom(zoom);
    }
    return map;
    
};

/**
 * @param {ol.LocLike=} opt_arg
 * @returns {ol.Map|ol.Loc|undefined} Map center.
 */
ol.Map.prototype.center = function(opt_arg) {
    if (arguments.length == 1 && goog.isDef(opt_arg)) {
        return this.setCenter(ol.loc(opt_arg));
    } else {
        return this.getCenter();
    }
};

/**
 * @param {ol.ProjectionLike=} opt_arg
 * @returns {ol.Map|ol.Projection|undefined}
 */
ol.Map.prototype.projection = function(opt_arg) {
    if (arguments.length == 1 && goog.isDef(opt_arg)) {
        return this.setProjection(ol.projection(opt_arg));
    } else {
        return this.getProjection();
    }
};

/**
 * @param {ol.ProjectionLike=} opt_arg
 * @returns {ol.Map|ol.Projection|undefined}
 */
ol.Map.prototype.userProjection = function(opt_arg) {
    if (arguments.length == 1 && goog.isDef(opt_arg)) {
        return this.setUserProjection(ol.projection(opt_arg));
    } else {
        return this.getUserProjection();
    }
};

/**
 * @param {number=} opt_arg
 * @returns {ol.Map|number|undefined} Map center.
 */
ol.Map.prototype.zoom = function(opt_arg) {
    if (arguments.length == 1 && goog.isDef(opt_arg)) {
        return this.setZoom(opt_arg);
    } else {
        return this.getZoom();
    }
};