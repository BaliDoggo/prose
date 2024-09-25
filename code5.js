gdjs.Level7Code = {};
gdjs.Level7Code.GDplayerObjects1_1final = [];

gdjs.Level7Code.GDplatformObjects1= [];
gdjs.Level7Code.GDplatformObjects2= [];
gdjs.Level7Code.GDplayerObjects1= [];
gdjs.Level7Code.GDplayerObjects2= [];
gdjs.Level7Code.GDRulesObjects1= [];
gdjs.Level7Code.GDRulesObjects2= [];
gdjs.Level7Code.GDloadingObjects1= [];
gdjs.Level7Code.GDloadingObjects2= [];
gdjs.Level7Code.GDQuitBufferObjects1= [];
gdjs.Level7Code.GDQuitBufferObjects2= [];
gdjs.Level7Code.GDfinishObjects1= [];
gdjs.Level7Code.GDfinishObjects2= [];
gdjs.Level7Code.GDplatformfakeObjects1= [];
gdjs.Level7Code.GDplatformfakeObjects2= [];
gdjs.Level7Code.GDenemyObjects1= [];
gdjs.Level7Code.GDenemyObjects2= [];
gdjs.Level7Code.GDchargeObjects1= [];
gdjs.Level7Code.GDchargeObjects2= [];
gdjs.Level7Code.GDChargeLabelObjects1= [];
gdjs.Level7Code.GDChargeLabelObjects2= [];
gdjs.Level7Code.GDhintObjects1= [];
gdjs.Level7Code.GDhintObjects2= [];

gdjs.Level7Code.conditionTrue_0 = {val:false};
gdjs.Level7Code.condition0IsTrue_0 = {val:false};
gdjs.Level7Code.condition1IsTrue_0 = {val:false};
gdjs.Level7Code.condition2IsTrue_0 = {val:false};
gdjs.Level7Code.condition3IsTrue_0 = {val:false};
gdjs.Level7Code.conditionTrue_1 = {val:false};
gdjs.Level7Code.condition0IsTrue_1 = {val:false};
gdjs.Level7Code.condition1IsTrue_1 = {val:false};
gdjs.Level7Code.condition2IsTrue_1 = {val:false};
gdjs.Level7Code.condition3IsTrue_1 = {val:false};


gdjs.Level7Code.asyncCallback10483004 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level7Code.GDQuitBufferObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Level7Code.GDQuitBufferObjects2.length ;i < len;++i) {
    gdjs.Level7Code.GDQuitBufferObjects2[i].hide();
}
}}
gdjs.Level7Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Level7Code.asyncCallback10483004(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level7Code.GDplayerObjects1});
gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDplatformfakeObjects1Objects = Hashtable.newFrom({"platformfake": gdjs.Level7Code.GDplatformfakeObjects1});
gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level7Code.GDplayerObjects1});
gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDplatformfakeObjects1Objects = Hashtable.newFrom({"platformfake": gdjs.Level7Code.GDplatformfakeObjects1});
gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level7Code.GDplayerObjects1});
gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDplatformfakeObjects1Objects = Hashtable.newFrom({"platformfake": gdjs.Level7Code.GDplatformfakeObjects1});
gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level7Code.GDplayerObjects1});
gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Level7Code.GDenemyObjects1});
gdjs.Level7Code.asyncCallback10490572 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("enemy"), gdjs.Level7Code.GDenemyObjects2);

{for(var i = 0, len = gdjs.Level7Code.GDenemyObjects2.length ;i < len;++i) {
    gdjs.Level7Code.GDenemyObjects2[i].setX(799);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}
gdjs.Level7Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Level7Code.GDenemyObjects1) asyncObjectsList.addObject("enemy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(12), (runtimeScene) => (gdjs.Level7Code.asyncCallback10490572(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level7Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level7", false);
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level7Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level7Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level7Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level7Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level7Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level7Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level7Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level7Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level7Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.Level7Code.GDplayerObjects1.length = 0;


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
{gdjs.Level7Code.conditionTrue_1 = gdjs.Level7Code.condition0IsTrue_0;
gdjs.Level7Code.GDplayerObjects1_1final.length = 0;gdjs.Level7Code.condition0IsTrue_1.val = false;
gdjs.Level7Code.condition1IsTrue_1.val = false;
gdjs.Level7Code.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level7Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level7Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level7Code.GDplayerObjects2[i].getY() >= 620 ) {
        gdjs.Level7Code.condition0IsTrue_1.val = true;
        gdjs.Level7Code.GDplayerObjects2[k] = gdjs.Level7Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level7Code.GDplayerObjects2.length = k;if( gdjs.Level7Code.condition0IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level7Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level7Code.GDplayerObjects1_1final.indexOf(gdjs.Level7Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level7Code.GDplayerObjects1_1final.push(gdjs.Level7Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level7Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level7Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level7Code.GDplayerObjects2[i].getX() >= 800 ) {
        gdjs.Level7Code.condition1IsTrue_1.val = true;
        gdjs.Level7Code.GDplayerObjects2[k] = gdjs.Level7Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level7Code.GDplayerObjects2.length = k;if( gdjs.Level7Code.condition1IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level7Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level7Code.GDplayerObjects1_1final.indexOf(gdjs.Level7Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level7Code.GDplayerObjects1_1final.push(gdjs.Level7Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level7Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level7Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level7Code.GDplayerObjects2[i].getX() <= -(35) ) {
        gdjs.Level7Code.condition2IsTrue_1.val = true;
        gdjs.Level7Code.GDplayerObjects2[k] = gdjs.Level7Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level7Code.GDplayerObjects2.length = k;if( gdjs.Level7Code.condition2IsTrue_1.val ) {
    gdjs.Level7Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level7Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level7Code.GDplayerObjects1_1final.indexOf(gdjs.Level7Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level7Code.GDplayerObjects1_1final.push(gdjs.Level7Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level7Code.GDplayerObjects1_1final, gdjs.Level7Code.GDplayerObjects1);
}
}
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level7", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.Level7Code.GDloadingObjects1);
{for(var i = 0, len = gdjs.Level7Code.GDloadingObjects1.length ;i < len;++i) {
    gdjs.Level7Code.GDloadingObjects1[i].setWidth(2 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level7Code.GDQuitBufferObjects1);
{for(var i = 0, len = gdjs.Level7Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level7Code.GDQuitBufferObjects1[i].hide();
}
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 50;
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Tutorial");
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level7Code.GDQuitBufferObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level7Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level7Code.GDQuitBufferObjects1[i].hide(false);
}
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Level7Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level7Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("platformfake"), gdjs.Level7Code.GDplatformfakeObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level7Code.GDplayerObjects1);

gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDplayerObjects1Objects, gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDplatformfakeObjects1Objects, true, runtimeScene, false);
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level7Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Level7Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level7Code.GDplayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(1500);
}
}{for(var i = 0, len = gdjs.Level7Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level7Code.GDplayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(250);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("platformfake"), gdjs.Level7Code.GDplatformfakeObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level7Code.GDplayerObjects1);

gdjs.Level7Code.condition0IsTrue_0.val = false;
gdjs.Level7Code.condition1IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDplayerObjects1Objects, gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDplatformfakeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level7Code.condition0IsTrue_0.val ) {
{
gdjs.Level7Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.Level7Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level7Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Level7Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level7Code.GDplayerObjects1[i].setX(gdjs.Level7Code.GDplayerObjects1[i].getX() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("platformfake"), gdjs.Level7Code.GDplatformfakeObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level7Code.GDplayerObjects1);

gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDplayerObjects1Objects, gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDplatformfakeObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level7Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Level7Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level7Code.GDplayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(gdjs.Level7Code.GDplayerObjects1[i].getBehavior("PlatformerObject").getAcceleration() + (100));
}
}{for(var i = 0, len = gdjs.Level7Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level7Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level7Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level7Code.GDplayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(gdjs.Level7Code.GDplayerObjects1[i].getBehavior("PlatformerObject").getMaxSpeed() + (40));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Level7Code.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level7Code.GDplayerObjects1);

gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDplayerObjects1Objects, gdjs.Level7Code.mapOfGDgdjs_46Level7Code_46GDenemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level7", false);
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 4;
}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level8");
}}

}


{


gdjs.Level7Code.condition0IsTrue_0.val = false;
gdjs.Level7Code.condition1IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.Level7Code.condition0IsTrue_0.val ) {
{
gdjs.Level7Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) <= 200;
}}
if (gdjs.Level7Code.condition1IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(1).add(2);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("charge"), gdjs.Level7Code.GDchargeObjects1);
{for(var i = 0, len = gdjs.Level7Code.GDchargeObjects1.length ;i < len;++i) {
    gdjs.Level7Code.GDchargeObjects1[i].setWidth(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level7Code.GDplayerObjects1);

gdjs.Level7Code.condition0IsTrue_0.val = false;
gdjs.Level7Code.condition1IsTrue_0.val = false;
gdjs.Level7Code.condition2IsTrue_0.val = false;
{
gdjs.Level7Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) >= 200;
}if ( gdjs.Level7Code.condition0IsTrue_0.val ) {
{
gdjs.Level7Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.Level7Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level7Code.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Level7Code.GDplayerObjects1[i].getY() > 225 ) {
        gdjs.Level7Code.condition2IsTrue_0.val = true;
        gdjs.Level7Code.GDplayerObjects1[k] = gdjs.Level7Code.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Level7Code.GDplayerObjects1.length = k;}}
}
if (gdjs.Level7Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level7Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Level7Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level7Code.GDplayerObjects1[i].getBehavior("Tween").addObjectPositionYTween("upsies", (gdjs.Level7Code.GDplayerObjects1[i].getPointY("")) - 20, "linear", 100, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Level7Code.GDenemyObjects1);

gdjs.Level7Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level7Code.GDenemyObjects1.length;i<l;++i) {
    if ( gdjs.Level7Code.GDenemyObjects1[i].getX() == 799 ) {
        gdjs.Level7Code.condition0IsTrue_0.val = true;
        gdjs.Level7Code.GDenemyObjects1[k] = gdjs.Level7Code.GDenemyObjects1[i];
        ++k;
    }
}
gdjs.Level7Code.GDenemyObjects1.length = k;}if (gdjs.Level7Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level7Code.GDenemyObjects1 */
{for(var i = 0, len = gdjs.Level7Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level7Code.GDenemyObjects1[i].getBehavior("Tween").addObjectPositionXTween("move", -(35), "linear", 1000, false);
}
}
{ //Subevents
gdjs.Level7Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level7Code.GDplayerObjects1);

gdjs.Level7Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level7Code.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Level7Code.GDplayerObjects1[i].getY() <= 225 ) {
        gdjs.Level7Code.condition0IsTrue_0.val = true;
        gdjs.Level7Code.GDplayerObjects1[k] = gdjs.Level7Code.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Level7Code.GDplayerObjects1.length = k;}if (gdjs.Level7Code.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}}

}


};

gdjs.Level7Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level7Code.GDplatformObjects1.length = 0;
gdjs.Level7Code.GDplatformObjects2.length = 0;
gdjs.Level7Code.GDplayerObjects1.length = 0;
gdjs.Level7Code.GDplayerObjects2.length = 0;
gdjs.Level7Code.GDRulesObjects1.length = 0;
gdjs.Level7Code.GDRulesObjects2.length = 0;
gdjs.Level7Code.GDloadingObjects1.length = 0;
gdjs.Level7Code.GDloadingObjects2.length = 0;
gdjs.Level7Code.GDQuitBufferObjects1.length = 0;
gdjs.Level7Code.GDQuitBufferObjects2.length = 0;
gdjs.Level7Code.GDfinishObjects1.length = 0;
gdjs.Level7Code.GDfinishObjects2.length = 0;
gdjs.Level7Code.GDplatformfakeObjects1.length = 0;
gdjs.Level7Code.GDplatformfakeObjects2.length = 0;
gdjs.Level7Code.GDenemyObjects1.length = 0;
gdjs.Level7Code.GDenemyObjects2.length = 0;
gdjs.Level7Code.GDchargeObjects1.length = 0;
gdjs.Level7Code.GDchargeObjects2.length = 0;
gdjs.Level7Code.GDChargeLabelObjects1.length = 0;
gdjs.Level7Code.GDChargeLabelObjects2.length = 0;
gdjs.Level7Code.GDhintObjects1.length = 0;
gdjs.Level7Code.GDhintObjects2.length = 0;

gdjs.Level7Code.eventsList2(runtimeScene);

return;

}

gdjs['Level7Code'] = gdjs.Level7Code;
