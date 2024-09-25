
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator || {};

/**
 * Behavior generated from Platformer trajectory evaluator
 */
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator = class PlatformerEvaluator extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PlatformerCharacter = behaviorData.PlatformerCharacter !== undefined ? behaviorData.PlatformerCharacter : "";
    this._behaviorData.JumpHeight = behaviorData.JumpHeight !== undefined ? behaviorData.JumpHeight : Number("") || 0;
    this._behaviorData.Time = Number("") || 0;
    this._behaviorData.Duration = Number("") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PlatformerCharacter !== newBehaviorData.PlatformerCharacter)
      this._behaviorData.PlatformerCharacter = newBehaviorData.PlatformerCharacter;
    if (oldBehaviorData.JumpHeight !== newBehaviorData.JumpHeight)
      this._behaviorData.JumpHeight = newBehaviorData.JumpHeight;
    if (oldBehaviorData.Time !== newBehaviorData.Time)
      this._behaviorData.Time = newBehaviorData.Time;
    if (oldBehaviorData.Duration !== newBehaviorData.Duration)
      this._behaviorData.Duration = newBehaviorData.Duration;

    return true;
  }

  // Properties:
  
  _getPlatformerCharacter() {
    return this._behaviorData.PlatformerCharacter !== undefined ? this._behaviorData.PlatformerCharacter : "";
  }
  _setPlatformerCharacter(newValue) {
    this._behaviorData.PlatformerCharacter = newValue;
  }
  _getJumpHeight() {
    return this._behaviorData.JumpHeight !== undefined ? this._behaviorData.JumpHeight : Number("") || 0;
  }
  _setJumpHeight(newValue) {
    this._behaviorData.JumpHeight = newValue;
  }
  _getTime() {
    return this._behaviorData.Time !== undefined ? this._behaviorData.Time : Number("") || 0;
  }
  _setTime(newValue) {
    this._behaviorData.Time = newValue;
  }
  _getDuration() {
    return this._behaviorData.Duration !== undefined ? this._behaviorData.Duration : Number("") || 0;
  }
  _setDuration(newValue) {
    this._behaviorData.Duration = newValue;
  }
}

/**
 * Shared data generated from Platformer trajectory evaluator
 */
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.SharedData = class PlatformerEvaluatorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PlatformerTrajectory_PlatformerEvaluatorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PlatformerTrajectory_PlatformerEvaluatorSharedData = new gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.SharedData(
      initialData
    );
  }
  return instanceContainer._PlatformerTrajectory_PlatformerEvaluatorSharedData;
}

// Methods:
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext = {};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.GDObjectObjects2= [];

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.GDObjectObjects1);

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpHeight() > 0 ) {
        gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetJumpHeight((gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJumpHeight()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext = {};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext.GDObjectObjects2= [];

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext.userFunc0x9ce630 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Formulas used in this extension were generated from a math model.
// They are probably not understandable on their own.
// If you need to modify them or need to write new feature,
// please take a look to the platformer extension documentation:
// https://github.com/4ian/GDevelop/tree/master/Extensions/PlatformBehavior#readme

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);
/** @type {float} */
const jumpHeight = -Math.abs(eventsFunctionContext.getArgument("JumpHeight"));

/** @type {gdjs.PlatformerObjectRuntimeBehavior} */
const character = objects[0].getBehavior(behavior._getPlatformerCharacter());
/** @type {float} */
const gravity = character.getGravity();
/** @type {float} */
const maxFallingSpeed = character.getMaxFallingSpeed();
/** @type {float} */
const jumpSustainTime = character.getJumpSustainTime();

const maxFallingSpeedReachedTime = maxFallingSpeed / gravity;

// The implementation jumps from one quadratic resolution to another
// to find the right formula to use as the time is unknown.

const sustainCase = (jumpHeight) => Math.sqrt(-jumpHeight * gravity * 2);
const maxFallingCase = (jumpHeight) => -gravity * jumpSustainTime + maxFallingSpeed
    + Math.sqrt(gravity * gravity * jumpSustainTime * jumpSustainTime - 2 * jumpHeight * gravity - maxFallingSpeed * maxFallingSpeed);

let jumpSpeed = 0;
let peakTime = 0;
if (maxFallingSpeedReachedTime > jumpSustainTime) {
    // common case
    jumpSpeed = -gravity * jumpSustainTime + Math.sqrt(2 * gravity * gravity * jumpSustainTime * jumpSustainTime - 4 * jumpHeight * gravity);
    peakTime = (gravity * jumpSustainTime + jumpSpeed) / (2 * gravity);
    if (peakTime < jumpSustainTime) {
        jumpSpeed = sustainCase(jumpHeight);
    }
    else if (peakTime > maxFallingSpeedReachedTime) {
        jumpSpeed = maxFallingCase(jumpHeight);
    }
}
else {
    // affine case can't have a maximum

    // sustain case
    jumpSpeed = sustainCase(jumpHeight);
    peakTime = jumpSpeed / gravity;
    if (peakTime > maxFallingSpeedReachedTime) {
        jumpSpeed = maxFallingCase(jumpHeight);
    }
}

if (jumpSpeed >= 0) {
    character.setJumpSpeed(jumpSpeed);
}

};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setJumpHeight((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("JumpHeight")) || 0 : 0));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext.GDObjectObjects1);
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext.userFunc0x9ce630(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeight = function(JumpHeight, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "JumpHeight") return JumpHeight;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.SetJumpHeightContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext = {};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.stopDoWhile2 = false;

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2= [];
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects1= [];
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects2= [];

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainter"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTime(0);
}
}{for(var i = 0, len = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects1[i].beginFillPath(0, 0);
}
}{for(var i = 0, len = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDuration((gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JumpDownTime(0, (gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getJumpSustainTime()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDuration(3);
}
}}

}


{


gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.stopDoWhile2 = false;
do {gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainter"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects2);
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() < (gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()) ) {
        gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.condition0IsTrue_0.val) {
if (true) {
{for(var i = 0, len = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects2[i].drawPathLineTo((( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getMaxSpeed()) * (( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime()), (( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JumpY((( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime()), (( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getJumpSustainTime()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}{for(var i = 0, len = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTime(gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() + (1 / 30));
}
}
{ //Subevents: 
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.stopDoWhile2 = true; 
} while ( !gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.stopDoWhile2 );

}


{



}


{


gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.stopDoWhile2 = false;
do {gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainter"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects2);
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() > 0 ) {
        gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[k] = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length = k;}if (gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.condition0IsTrue_0.val) {
if (true) {
{for(var i = 0, len = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTime(gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime() - (1 / 30));
}
}{for(var i = 0, len = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects2[i].drawPathLineTo((( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("PlatformerCharacter")).getMaxSpeed()) * (( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime()), (( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JumpY((( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTime()), 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}
{ //Subevents: 
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.stopDoWhile2 = true; 
} while ( !gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.stopDoWhile2 );

}


{


{
gdjs.copyArray(eventsFunctionContext.getObjects("ShapePainter"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects1[i].closePath();
}
}}

}


};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJump = function(ShapePainter, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "ShapePainter": ShapePainter
},
  _objectArraysMap: {
"Object": thisObjectList
, "ShapePainter": gdjs.objectsListsToArray(ShapePainter)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects1.length = 0;
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.GDShapePainterObjects2.length = 0;

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.DrawJumpContext.eventsList2(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpYContext = {};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpYContext.GDObjectObjects1= [];

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpYContext.userFunc0x9ce630 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Formulas used in this extension were generated from a math model.
// They are probably not understandable on their own.
// If you need to modify them or need to write new feature,
// please take a look to the platformer extension documentation:
// https://github.com/4ian/GDevelop/tree/master/Extensions/PlatformBehavior#readme

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);
/** @type {float} */
const t = eventsFunctionContext.getArgument("Time");
/** @type {float} */
const jumpSustainTime = eventsFunctionContext.getArgument("JumpSustainTime");

const character = objects[0].getBehavior(behavior._getPlatformerCharacter());
/** @type {float} */
const gravity = character.getGravity();
/** @type {float} */
const maxFallingSpeed = character.getMaxFallingSpeed();
/** @type {float} */
const jumpSpeed = character.getJumpSpeed();

// Falling and jump speed are integrated independently
// and summed at the end to get the Y displacement.

const maxFallingSpeedReachedTime = maxFallingSpeed / gravity;
let fallingY = 0;
if (t < maxFallingSpeedReachedTime) {
    fallingY = gravity * t * t / 2;
}
else {
    fallingY = maxFallingSpeed * (t - maxFallingSpeed / (2 * gravity));
}

const jumpEndTime = jumpSustainTime + jumpSpeed / gravity;
let jumpingY = 0;
if (t < jumpSustainTime) {
    jumpingY = -jumpSpeed * t;
}
else if (t < jumpEndTime) {
    jumpingY = gravity * jumpSustainTime * jumpSustainTime / 2 + gravity * t * t / 2
        - (gravity * jumpSustainTime + jumpSpeed) * t;
}
else {
    jumpingY = (jumpEndTime * jumpEndTime + jumpSustainTime * jumpSustainTime) * gravity / 2
        - (gravity * jumpSustainTime + jumpSpeed) * jumpEndTime;
}

eventsFunctionContext.returnValue = fallingY + jumpingY;

};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpYContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpYContext.GDObjectObjects1);
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpYContext.userFunc0x9ce630(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpY = function(Time, JumpSustainTime, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Time") return Time;
if (argName === "JumpSustainTime") return JumpSustainTime;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpYContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakYContext = {};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakYContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakYContext.GDObjectObjects2= [];

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakYContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakYContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakYContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JumpY((( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakYContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JumpPeakTime((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("JumpSustainTime")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("JumpSustainTime")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakY = function(JumpSustainTime, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "JumpSustainTime") return JumpSustainTime;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakYContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakTimeContext = {};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakTimeContext.GDObjectObjects1= [];

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakTimeContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakTimeContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakTimeContext.userFunc0x9ce630 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Formulas used in this extension were generated from a math model.
// They are probably not understandable on their own.
// If you need to modify them or need to write new feature,
// please take a look to the platformer extension documentation:
// https://github.com/4ian/GDevelop/tree/master/Extensions/PlatformBehavior#readme

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);
/** @type {float} */
const y = eventsFunctionContext.getArgument("PositionY");
/** @type {float} */
const jumpSustainTime = eventsFunctionContext.getArgument("JumpSustainTime");

/** @type {gdjs.PlatformerObjectRuntimeBehavior} */
const character = objects[0].getBehavior(behavior._getPlatformerCharacter());
/** @type {float} */
const gravity = character.getGravity();
/** @type {float} */
const maxFallingSpeed = character.getMaxFallingSpeed();
/** @type {float} */
const jumpSpeed = character.getJumpSpeed();

const maxFallingSpeedReachedTime = maxFallingSpeed / gravity;

// The implementation jumps from one quadratic resolution to another
// to find the right formula to use as the time is unknown.
let peakTime = 0;

if (maxFallingSpeedReachedTime > jumpSustainTime) {
    // common case
    peakTime = (gravity * jumpSustainTime + jumpSpeed) / (2 * gravity);
    if (peakTime < jumpSustainTime) {
        // sustain case
        peakTime = jumpSpeed / gravity;
    }
    else if (peakTime > maxFallingSpeedReachedTime) {
        // max falling case
        peakTime = jumpSustainTime + (jumpSpeed - maxFallingSpeed) / gravity;
    }
}
else {
    // affine case can't have a maximum

    // sustain case
    peakTime = jumpSpeed / gravity;
    if (peakTime > maxFallingSpeedReachedTime) {
        // max falling case
        peakTime = jumpSustainTime + (jumpSpeed - maxFallingSpeed) / gravity;
    }
}

//console.log("peakTime: " + peakTime);
eventsFunctionContext.returnValue = peakTime;

};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakTimeContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakTimeContext.GDObjectObjects1);
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakTimeContext.userFunc0x9ce630(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakTime = function(JumpSustainTime, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "JumpSustainTime") return JumpSustainTime;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakTimeContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpPeakTimeContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext = {};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.GDObjectObjects2= [];

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.userFunc0x9c1218 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Formulas used in this extension were generated from a math model.
// They are probably not understandable on their own.
// If you need to modify them or need to write new feature,
// please take a look to the platformer extension documentation:
// https://github.com/4ian/GDevelop/tree/master/Extensions/PlatformBehavior#readme

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);
/** @type {float} */
const y = eventsFunctionContext.getArgument("PositionY");
/** @type {float} */
const jumpSustainTime = eventsFunctionContext.getArgument("JumpSustainTime");

/** @type {gdjs.PlatformerObjectRuntimeBehavior} */
const character = objects[0].getBehavior(behavior._getPlatformerCharacter());
/** @type {float} */
const gravity = character.getGravity();
/** @type {float} */
const maxFallingSpeed = character.getMaxFallingSpeed();
/** @type {float} */
const jumpSpeed = character.getJumpSpeed();

const maxFallingSpeedReachedTime = maxFallingSpeed / gravity;
const jumpEndTime = jumpSustainTime + jumpSpeed / gravity;

// The implementation jumps from one quadratic resolution to another
// to find the right formula to use as the time is unknown.
const sustainCase = (y) => (jumpSpeed - Math.sqrt(jumpSpeed * jumpSpeed + 2 * gravity * y)) / gravity;
const affineCase = (y) => -(maxFallingSpeed * maxFallingSpeed + 2 * gravity * y) / (gravity * jumpSpeed - gravity * maxFallingSpeed) / 2;
const commonCase = (y) => (gravity * jumpSustainTime + jumpSpeed - Math.sqrt(-gravity * gravity * jumpSustainTime * jumpSustainTime
    + 2 * gravity * jumpSpeed * jumpSustainTime + jumpSpeed * jumpSpeed + 4 * gravity * y)) / (2 * gravity);
const maxFallingCase = (y) => (gravity * jumpSustainTime + jumpSpeed - maxFallingSpeed - Math.sqrt(2 * gravity * jumpSpeed * jumpSustainTime
    + jumpSpeed * jumpSpeed - 2 * (gravity * jumpSustainTime + jumpSpeed) * maxFallingSpeed + 2 * maxFallingSpeed * maxFallingSpeed + 2 * gravity * y)) / gravity;
const freeFallCase = (y) => -Math.sqrt(2 * gravity * jumpSpeed * jumpSustainTime + jumpSpeed * jumpSpeed + 2 * gravity * y) / gravity;
//const gladdingCase = (y) => (2 * gravity * jumpSpeed * jumpSustainTime + jumpSpeed * jumpSpeed + maxFallingSpeed * maxFallingSpeed + 2 * gravity * y) / (2 * gravity * maxFallingSpeed);

let time = 0;
if (maxFallingSpeedReachedTime > jumpEndTime) {
    time = sustainCase(y);
    if (time > jumpSustainTime || Number.isNaN(time)) {
        time = commonCase(y);
        if (time > jumpEndTime || Number.isNaN(time)) {
            time = freeFallCase(y);
        }
    }
}
else if (maxFallingSpeedReachedTime > jumpSustainTime) {
    time = sustainCase(y);
    if (time > jumpSustainTime || Number.isNaN(time)) {
        time = commonCase(y);
        if (time > maxFallingSpeedReachedTime || Number.isNaN(time)) {
            time = maxFallingCase(y);
        }
    }
}
else {
    time = sustainCase(y);
    if (time > maxFallingSpeedReachedTime || Number.isNaN(time)) {
        time = maxFallingSpeed <= jumpSpeed ? affineCase(y) : time = Number.MAX_VALUE
        if (time > jumpSustainTime || Number.isNaN(time)) {
            time = maxFallingCase(y);
        }
    }
}

eventsFunctionContext.returnValue = time;

};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.GDObjectObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.GDObjectObjects1);
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.userFunc0x9c1218(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JumpPeakTime((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("JumpSustainTime")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.GDObjectObjects1);

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.conditionTrue_1 = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.condition0IsTrue_0;
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionY")) || 0 : 0) >= (( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JumpPeakY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("JumpSustainTime")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}if (gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTime = function(PositionY, JumpSustainTime, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PositionY") return PositionY;
if (argName === "JumpSustainTime") return JumpSustainTime;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpUpTimeContext.eventsList1(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext = {};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.GDObjectObjects1= [];
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.GDObjectObjects2= [];

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.conditionTrue_1 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.userFunc0x786ab8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Formulas used in this extension were generated from a math model.
// They are probably not understandable on their own.
// If you need to modify them or need to write new feature,
// please take a look to the platformer extension documentation:
// https://github.com/4ian/GDevelop/tree/master/Extensions/PlatformBehavior#readme

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);
/** @type {float} */
const y = eventsFunctionContext.getArgument("PositionY");
/** @type {float} */
const jumpSustainTime = eventsFunctionContext.getArgument("JumpSustainTime");

/** @type {gdjs.PlatformerObjectRuntimeBehavior} */
const character = objects[0].getBehavior(behavior._getPlatformerCharacter());
/** @type {float} */
const gravity = character.getGravity();
/** @type {float} */
const maxFallingSpeed = character.getMaxFallingSpeed();
/** @type {float} */
const jumpSpeed = character.getJumpSpeed();

const maxFallingSpeedReachedTime = maxFallingSpeed / gravity;
const jumpEndTime = jumpSustainTime + jumpSpeed / gravity;

//console.log("y: " + y);

// The implementation jumps from one quadratic resolution to another
// to find the right formula to use as the time is unknown.
const sustainCase = (y) => (jumpSpeed + Math.sqrt(jumpSpeed * jumpSpeed + 2 * gravity * y)) / gravity;
const affineCase = (y) => -(maxFallingSpeed * maxFallingSpeed + 2 * gravity * y) / (gravity * jumpSpeed - gravity * maxFallingSpeed) / 2;
const commonCase = (y) => (gravity * jumpSustainTime + jumpSpeed + Math.sqrt(-gravity * gravity * jumpSustainTime * jumpSustainTime
    + 2 * gravity * jumpSpeed * jumpSustainTime + jumpSpeed * jumpSpeed + 4 * gravity * y)) / (2 * gravity);
const maxFallingCase = (y) => (gravity * jumpSustainTime + jumpSpeed - maxFallingSpeed + Math.sqrt(2 * gravity * jumpSpeed * jumpSustainTime
    + jumpSpeed * jumpSpeed - 2 * (gravity * jumpSustainTime + jumpSpeed) * maxFallingSpeed + 2 * maxFallingSpeed * maxFallingSpeed + 2 * gravity * y)) / gravity;
const freeFallCase = (y) => Math.sqrt(2 * gravity * jumpSpeed * jumpSustainTime + jumpSpeed * jumpSpeed + 2 * gravity * y) / gravity;
const gladdingCase = (y) => (2 * gravity * jumpSpeed * jumpSustainTime + jumpSpeed * jumpSpeed + maxFallingSpeed * maxFallingSpeed + 2 * gravity * y) / (2 * gravity * maxFallingSpeed);

let time = 0;
if (maxFallingSpeedReachedTime > jumpEndTime) {
    time = sustainCase(y);
    if (time > jumpSustainTime || Number.isNaN(time)) {
        time = commonCase(y);
        if (time > jumpEndTime || Number.isNaN(time)) {
            time = freeFallCase(y);
            if (time > maxFallingSpeedReachedTime || Number.isNaN(time)) {
                time = gladdingCase(y);
            }
        }
    }
}
else if (maxFallingSpeedReachedTime > jumpSustainTime) {
    time = sustainCase(y);
    if (time > jumpSustainTime || Number.isNaN(time)) {
        time = commonCase(y);
        if (time > maxFallingSpeedReachedTime || Number.isNaN(time)) {
            time = maxFallingCase(y);
            if (time > jumpEndTime || Number.isNaN(time)) {
                time = gladdingCase(y);
            }
        }
    }
}
else {
    time = sustainCase(y);
    if (time > maxFallingSpeedReachedTime || Number.isNaN(time)) {
        time = maxFallingSpeed >= jumpSpeed ? affineCase(y) : time = Number.MAX_VALUE;
        if (time > jumpSustainTime || Number.isNaN(time)) {
            time = maxFallingCase(y);
            if (time > jumpEndTime || Number.isNaN(time)) {
                time = gladdingCase(y);
            }
        }
    }
}

eventsFunctionContext.returnValue = time;

};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.GDObjectObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.GDObjectObjects1);
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.userFunc0x786ab8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JumpPeakTime((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("JumpSustainTime")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))); }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.GDObjectObjects1);

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.conditionTrue_1 = gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.condition0IsTrue_0;
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.conditionTrue_1.val = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("PositionY")) || 0 : 0) >= (( gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).JumpPeakY((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("JumpSustainTime")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}if (gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTime = function(PositionY, JumpSustainTime, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "PositionY") return PositionY;
if (argName === "JumpSustainTime") return JumpSustainTime;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.JumpDownTimeContext.eventsList1(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StopXDistanceContext = {};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StopXDistanceContext.GDObjectObjects1= [];

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StopXDistanceContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StopXDistanceContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StopXDistanceContext.userFunc0x9c94d8 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Formulas used in this extension were generated from a math model.
// They are probably not understandable on their own.
// If you need to modify them or need to write new feature,
// please take a look to the platformer extension documentation:
// https://github.com/4ian/GDevelop/tree/master/Extensions/PlatformBehavior#readme

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);
/** @type {float} */
const t = eventsFunctionContext.getArgument("Time");

/** @type {gdjs.PlatformerObjectRuntimeBehavior} */
const character = objects[0].getBehavior(behavior._getPlatformerCharacter());
/** @type {float} */
const decelerationX = character.getDeceleration();
/** @type {float} */
const currentSpeedX = Math.abs(character.getCurrentSpeed());

let x = 0;
if (currentSpeedX === 0) {
    x = 0;
}
else {
    const stopXTime = currentSpeedX / decelerationX;
    t = stopXTime;
    x = currentSpeedX * t - decelerationX * t * t / 2;
}
eventsFunctionContext.returnValue = x;

};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StopXDistanceContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StopXDistanceContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StopXDistanceContext.GDObjectObjects1);
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StopXDistanceContext.userFunc0x9c94d8(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StopXDistance = function(Time, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Time") return Time;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StopXDistanceContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StopXDistanceContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StoppingXContext = {};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StoppingXContext.GDObjectObjects1= [];

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StoppingXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StoppingXContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StoppingXContext.userFunc0x9ce630 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Formulas used in this extension were generated from a math model.
// They are probably not understandable on their own.
// If you need to modify them or need to write new feature,
// please take a look to the platformer extension documentation:
// https://github.com/4ian/GDevelop/tree/master/Extensions/PlatformBehavior#readme

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);
/** @type {float} */
const t = eventsFunctionContext.getArgument("Time");

/** @type {gdjs.PlatformerObjectRuntimeBehavior} */
const character = objects[0].getBehavior(behavior._getPlatformerCharacter());
/** @type {float} */
const decelerationX = character.getDeceleration();
/** @type {float} */
const currentSpeedX = Math.abs(character.getCurrentSpeed());

let x = 0;
if (currentSpeedX === 0) {
    x = 0;
}
else {
    const stopXTime = currentSpeedX / decelerationX;
    t = Math.min(t, stopXTime);
    x = currentSpeedX * t - decelerationX * t * t / 2;
}
eventsFunctionContext.returnValue = x;

};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StoppingXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StoppingXContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StoppingXContext.GDObjectObjects1);
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StoppingXContext.userFunc0x9ce630(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StoppingX = function(Time, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Time") return Time;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StoppingXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.StoppingXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.MovingXContext = {};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.MovingXContext.GDObjectObjects1= [];

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.MovingXContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.MovingXContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.MovingXContext.userFunc0x9ce630 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Formulas used in this extension were generated from a math model.
// They are probably not understandable on their own.
// If you need to modify them or need to write new feature,
// please take a look to the platformer extension documentation:
// https://github.com/4ian/GDevelop/tree/master/Extensions/PlatformBehavior#readme

const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = objects[0].getBehavior(behaviorName);
/** @type {float} */
const t = eventsFunctionContext.getArgument("Time");

/** @type {gdjs.PlatformerObjectRuntimeBehavior} */
const character = objects[0].getBehavior(behavior._getPlatformerCharacter());
/** @type {float} */
const accelerationX = character.getAcceleration();
/** @type {float} */
const maxSpeedX = character.getMaxSpeed();
/** @type {float} */
const currentSpeedX = Math.abs(character.getCurrentSpeed());

let x = 0;
if (currentSpeedX === maxSpeedX) {
    x = maxSpeedX * t;
}
else {
    const maxSpeedXTime = Math.min(0, (maxSpeedX - currentSpeedX) / accelerationX);
    if (t < maxSpeedXTime) {
        x = currentSpeedX * t + accelerationX * t * t / 2
    }
    else {
        x = currentSpeedX * maxSpeedXTime
            + accelerationX * maxSpeedXTime * maxSpeedXTime / 2
            + maxSpeedX * (t - maxSpeedXTime);
    }
}
eventsFunctionContext.returnValue = x;

};
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.MovingXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.MovingXContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.MovingXContext.GDObjectObjects1);
gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.MovingXContext.userFunc0x9ce630(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.MovingX = function(Time, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "PlatformerCharacter": this._getPlatformerCharacter()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Time") return Time;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.MovingXContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.MovingXContext.eventsList0(runtimeScene, eventsFunctionContext);

return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("PlatformerTrajectory::PlatformerEvaluator", gdjs.evtsExt__PlatformerTrajectory__PlatformerEvaluator.PlatformerEvaluator);
