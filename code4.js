gdjs.Level6Code = {};
gdjs.Level6Code.GDboostObjects1_1final = [];

gdjs.Level6Code.GDplayerObjects1_1final = [];

gdjs.Level6Code.GDplatformObjects1= [];
gdjs.Level6Code.GDplatformObjects2= [];
gdjs.Level6Code.GDplayerObjects1= [];
gdjs.Level6Code.GDplayerObjects2= [];
gdjs.Level6Code.GDRulesObjects1= [];
gdjs.Level6Code.GDRulesObjects2= [];
gdjs.Level6Code.GDloadingObjects1= [];
gdjs.Level6Code.GDloadingObjects2= [];
gdjs.Level6Code.GDQuitBufferObjects1= [];
gdjs.Level6Code.GDQuitBufferObjects2= [];
gdjs.Level6Code.GDfinishObjects1= [];
gdjs.Level6Code.GDfinishObjects2= [];
gdjs.Level6Code.GDplatformfakeObjects1= [];
gdjs.Level6Code.GDplatformfakeObjects2= [];
gdjs.Level6Code.GDplatformfake2Objects1= [];
gdjs.Level6Code.GDplatformfake2Objects2= [];
gdjs.Level6Code.GDboostObjects1= [];
gdjs.Level6Code.GDboostObjects2= [];
gdjs.Level6Code.GDHintObjects1= [];
gdjs.Level6Code.GDHintObjects2= [];

gdjs.Level6Code.conditionTrue_0 = {val:false};
gdjs.Level6Code.condition0IsTrue_0 = {val:false};
gdjs.Level6Code.condition1IsTrue_0 = {val:false};
gdjs.Level6Code.condition2IsTrue_0 = {val:false};
gdjs.Level6Code.condition3IsTrue_0 = {val:false};
gdjs.Level6Code.conditionTrue_1 = {val:false};
gdjs.Level6Code.condition0IsTrue_1 = {val:false};
gdjs.Level6Code.condition1IsTrue_1 = {val:false};
gdjs.Level6Code.condition2IsTrue_1 = {val:false};
gdjs.Level6Code.condition3IsTrue_1 = {val:false};


gdjs.Level6Code.asyncCallback10443700 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level6Code.GDQuitBufferObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Level6Code.GDQuitBufferObjects2.length ;i < len;++i) {
    gdjs.Level6Code.GDQuitBufferObjects2[i].hide();
}
}}
gdjs.Level6Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Level6Code.asyncCallback10443700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level6Code.GDplayerObjects1});
gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDfinishObjects1Objects = Hashtable.newFrom({"finish": gdjs.Level6Code.GDfinishObjects1});
gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level6Code.GDplayerObjects1});
gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDfinishObjects1Objects = Hashtable.newFrom({"finish": gdjs.Level6Code.GDfinishObjects1});
gdjs.Level6Code.asyncCallback10446204 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level8");
}}
gdjs.Level6Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Level6Code.asyncCallback10446204(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level6Code.GDplayerObjects1});
gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplatformfakeObjects1Objects = Hashtable.newFrom({"platformfake": gdjs.Level6Code.GDplatformfakeObjects1});
gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level6Code.GDplayerObjects1});
gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplatformfake2Objects1Objects = Hashtable.newFrom({"platformfake2": gdjs.Level6Code.GDplatformfake2Objects1});
gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level6Code.GDplayerObjects1});
gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplatformfakeObjects1Objects = Hashtable.newFrom({"platformfake": gdjs.Level6Code.GDplatformfakeObjects1});
gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level6Code.GDplayerObjects1});
gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplatformfakeObjects1Objects = Hashtable.newFrom({"platformfake": gdjs.Level6Code.GDplatformfakeObjects1});
gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplatformfake2Objects1Objects = Hashtable.newFrom({"platformfake2": gdjs.Level6Code.GDplatformfake2Objects1});
gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level6Code.GDplayerObjects1});
gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDboostObjects1Objects = Hashtable.newFrom({"boost": gdjs.Level6Code.GDboostObjects1});
gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level6Code.GDplayerObjects1});
gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDboostObjects1Objects = Hashtable.newFrom({"boost": gdjs.Level6Code.GDboostObjects1});
gdjs.Level6Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level6Code.condition0IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.Level6Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level6", false);
}}

}


{


gdjs.Level6Code.condition0IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level6Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level6Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


gdjs.Level6Code.condition0IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level6Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level6Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


gdjs.Level6Code.condition0IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level6Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level6Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.Level6Code.GDplayerObjects1.length = 0;


gdjs.Level6Code.condition0IsTrue_0.val = false;
{
{gdjs.Level6Code.conditionTrue_1 = gdjs.Level6Code.condition0IsTrue_0;
gdjs.Level6Code.GDplayerObjects1_1final.length = 0;gdjs.Level6Code.condition0IsTrue_1.val = false;
gdjs.Level6Code.condition1IsTrue_1.val = false;
gdjs.Level6Code.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level6Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level6Code.GDplayerObjects2[i].getY() >= 620 ) {
        gdjs.Level6Code.condition0IsTrue_1.val = true;
        gdjs.Level6Code.GDplayerObjects2[k] = gdjs.Level6Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level6Code.GDplayerObjects2.length = k;if( gdjs.Level6Code.condition0IsTrue_1.val ) {
    gdjs.Level6Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level6Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level6Code.GDplayerObjects1_1final.indexOf(gdjs.Level6Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level6Code.GDplayerObjects1_1final.push(gdjs.Level6Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level6Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level6Code.GDplayerObjects2[i].getX() >= 800 ) {
        gdjs.Level6Code.condition1IsTrue_1.val = true;
        gdjs.Level6Code.GDplayerObjects2[k] = gdjs.Level6Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level6Code.GDplayerObjects2.length = k;if( gdjs.Level6Code.condition1IsTrue_1.val ) {
    gdjs.Level6Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level6Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level6Code.GDplayerObjects1_1final.indexOf(gdjs.Level6Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level6Code.GDplayerObjects1_1final.push(gdjs.Level6Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level6Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level6Code.GDplayerObjects2[i].getX() <= -(35) ) {
        gdjs.Level6Code.condition2IsTrue_1.val = true;
        gdjs.Level6Code.GDplayerObjects2[k] = gdjs.Level6Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level6Code.GDplayerObjects2.length = k;if( gdjs.Level6Code.condition2IsTrue_1.val ) {
    gdjs.Level6Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level6Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level6Code.GDplayerObjects1_1final.indexOf(gdjs.Level6Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level6Code.GDplayerObjects1_1final.push(gdjs.Level6Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level6Code.GDplayerObjects1_1final, gdjs.Level6Code.GDplayerObjects1);
}
}
}if (gdjs.Level6Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level6", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.Level6Code.GDloadingObjects1);
{for(var i = 0, len = gdjs.Level6Code.GDloadingObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDloadingObjects1[i].setWidth(2 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.Level6Code.condition0IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level6Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level6Code.GDQuitBufferObjects1);
gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Level6Code.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level6Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDQuitBufferObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level6Code.GDfinishObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDfinishObjects1[i].setPosition(87,310);
}
}{for(var i = 0, len = gdjs.Level6Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplayerObjects1[i].setPosition(148,182);
}
}}

}


{


gdjs.Level6Code.condition0IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 50;
}if (gdjs.Level6Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Tutorial");
}}

}


{


gdjs.Level6Code.condition0IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Level6Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level6Code.GDQuitBufferObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level6Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDQuitBufferObjects1[i].hide(false);
}
}}

}


{


gdjs.Level6Code.condition0IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Level6Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level6Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Level6Code.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects1);

gdjs.Level6Code.condition0IsTrue_0.val = false;
gdjs.Level6Code.condition1IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects, gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDfinishObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level6Code.condition0IsTrue_0.val ) {
{
gdjs.Level6Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.Level6Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level6Code.GDfinishObjects1 */
gdjs.copyArray(runtimeScene.getObjects("platformfake2"), gdjs.Level6Code.GDplatformfake2Objects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.Level6Code.GDfinishObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDfinishObjects1[i].setPosition(77,201);
}
}{for(var i = 0, len = gdjs.Level6Code.GDplatformfake2Objects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplatformfake2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Level6Code.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects1);

gdjs.Level6Code.condition0IsTrue_0.val = false;
gdjs.Level6Code.condition1IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects, gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDfinishObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level6Code.condition0IsTrue_0.val ) {
{
gdjs.Level6Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Level6Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level6Code.GDfinishObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.Level6Code.GDfinishObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDfinishObjects1[i].hide();
}
}
{ //Subevents
gdjs.Level6Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("platformfake"), gdjs.Level6Code.GDplatformfakeObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects1);

gdjs.Level6Code.condition0IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects, gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplatformfakeObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level6Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level6Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Level6Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(gdjs.Level6Code.GDplayerObjects1[i].getBehavior("PlatformerObject").getAcceleration() + (100));
}
}{for(var i = 0, len = gdjs.Level6Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level6Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(gdjs.Level6Code.GDplayerObjects1[i].getBehavior("PlatformerObject").getMaxSpeed() + (50));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("platformfake2"), gdjs.Level6Code.GDplatformfake2Objects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects1);

gdjs.Level6Code.condition0IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects, gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplatformfake2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level6Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level6Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Level6Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Level6Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplayerObjects1[i].setX(gdjs.Level6Code.GDplayerObjects1[i].getX() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("platformfake"), gdjs.Level6Code.GDplatformfakeObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects1);

gdjs.Level6Code.condition0IsTrue_0.val = false;
gdjs.Level6Code.condition1IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects, gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplatformfakeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level6Code.condition0IsTrue_0.val ) {
{
gdjs.Level6Code.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}}
if (gdjs.Level6Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level6Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Level6Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplayerObjects1[i].setX(gdjs.Level6Code.GDplayerObjects1[i].getX() + (5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("platformfake"), gdjs.Level6Code.GDplatformfakeObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects1);

gdjs.Level6Code.condition0IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects, gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplatformfakeObjects1Objects, true, runtimeScene, false);
}if (gdjs.Level6Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level6Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Level6Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplayerObjects1[i].getBehavior("PlatformerObject").setAcceleration(1500);
}
}{for(var i = 0, len = gdjs.Level6Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(250);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects1);

gdjs.Level6Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level6Code.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Level6Code.GDplayerObjects1[i].getY() <= 321 ) {
        gdjs.Level6Code.condition0IsTrue_0.val = true;
        gdjs.Level6Code.GDplayerObjects1[k] = gdjs.Level6Code.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Level6Code.GDplayerObjects1.length = k;}if (gdjs.Level6Code.condition0IsTrue_0.val) {
gdjs.Level6Code.GDplatformfake2Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplatformfake2Objects1Objects, 589, 356, "");
}{for(var i = 0, len = gdjs.Level6Code.GDplatformfake2Objects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplatformfake2Objects1[i].setSize(231, 34);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects1);

gdjs.Level6Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level6Code.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.Level6Code.GDplayerObjects1[i].getY() > 321 ) {
        gdjs.Level6Code.condition0IsTrue_0.val = true;
        gdjs.Level6Code.GDplayerObjects1[k] = gdjs.Level6Code.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.Level6Code.GDplayerObjects1.length = k;}if (gdjs.Level6Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("platformfake2"), gdjs.Level6Code.GDplatformfake2Objects1);
{for(var i = 0, len = gdjs.Level6Code.GDplatformfake2Objects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplatformfake2Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boost"), gdjs.Level6Code.GDboostObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects1);

gdjs.Level6Code.condition0IsTrue_0.val = false;
gdjs.Level6Code.condition1IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects, gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDboostObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level6Code.condition0IsTrue_0.val ) {
{
{gdjs.Level6Code.conditionTrue_1 = gdjs.Level6Code.condition1IsTrue_0;
gdjs.Level6Code.GDboostObjects1_1final.length = 0;gdjs.Level6Code.condition0IsTrue_1.val = false;
gdjs.Level6Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.Level6Code.GDboostObjects1, gdjs.Level6Code.GDboostObjects2);

for(var i = 0, k = 0, l = gdjs.Level6Code.GDboostObjects2.length;i<l;++i) {
    if ( gdjs.Level6Code.GDboostObjects2[i].getX() != 345 ) {
        gdjs.Level6Code.condition0IsTrue_1.val = true;
        gdjs.Level6Code.GDboostObjects2[k] = gdjs.Level6Code.GDboostObjects2[i];
        ++k;
    }
}
gdjs.Level6Code.GDboostObjects2.length = k;if( gdjs.Level6Code.condition0IsTrue_1.val ) {
    gdjs.Level6Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level6Code.GDboostObjects2.length;j<jLen;++j) {
        if ( gdjs.Level6Code.GDboostObjects1_1final.indexOf(gdjs.Level6Code.GDboostObjects2[j]) === -1 )
            gdjs.Level6Code.GDboostObjects1_1final.push(gdjs.Level6Code.GDboostObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level6Code.GDboostObjects1, gdjs.Level6Code.GDboostObjects2);

for(var i = 0, k = 0, l = gdjs.Level6Code.GDboostObjects2.length;i<l;++i) {
    if ( gdjs.Level6Code.GDboostObjects2[i].getY() != 286 ) {
        gdjs.Level6Code.condition1IsTrue_1.val = true;
        gdjs.Level6Code.GDboostObjects2[k] = gdjs.Level6Code.GDboostObjects2[i];
        ++k;
    }
}
gdjs.Level6Code.GDboostObjects2.length = k;if( gdjs.Level6Code.condition1IsTrue_1.val ) {
    gdjs.Level6Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level6Code.GDboostObjects2.length;j<jLen;++j) {
        if ( gdjs.Level6Code.GDboostObjects1_1final.indexOf(gdjs.Level6Code.GDboostObjects2[j]) === -1 )
            gdjs.Level6Code.GDboostObjects1_1final.push(gdjs.Level6Code.GDboostObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level6Code.GDboostObjects1_1final, gdjs.Level6Code.GDboostObjects1);
}
}
}}
if (gdjs.Level6Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level6Code.GDboostObjects1 */
/* Reuse gdjs.Level6Code.GDplayerObjects1 */
{for(var i = 0, len = gdjs.Level6Code.GDboostObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDboostObjects1[i].setPosition(345,286);
}
}{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(((( gdjs.Level6Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Level6Code.GDplayerObjects1[0].getPointY(""))) - 110);
}{for(var i = 0, len = gdjs.Level6Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplayerObjects1[i].getBehavior("Tween").addObjectPositionYTween("", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), "easeOutQuad", 100, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("boost"), gdjs.Level6Code.GDboostObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level6Code.GDplayerObjects1);

gdjs.Level6Code.condition0IsTrue_0.val = false;
gdjs.Level6Code.condition1IsTrue_0.val = false;
gdjs.Level6Code.condition2IsTrue_0.val = false;
{
gdjs.Level6Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDplayerObjects1Objects, gdjs.Level6Code.mapOfGDgdjs_46Level6Code_46GDboostObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level6Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level6Code.GDboostObjects1.length;i<l;++i) {
    if ( gdjs.Level6Code.GDboostObjects1[i].getX() == 345 ) {
        gdjs.Level6Code.condition1IsTrue_0.val = true;
        gdjs.Level6Code.GDboostObjects1[k] = gdjs.Level6Code.GDboostObjects1[i];
        ++k;
    }
}
gdjs.Level6Code.GDboostObjects1.length = k;}if ( gdjs.Level6Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level6Code.GDboostObjects1.length;i<l;++i) {
    if ( gdjs.Level6Code.GDboostObjects1[i].getY() == 286 ) {
        gdjs.Level6Code.condition2IsTrue_0.val = true;
        gdjs.Level6Code.GDboostObjects1[k] = gdjs.Level6Code.GDboostObjects1[i];
        ++k;
    }
}
gdjs.Level6Code.GDboostObjects1.length = k;}}
}
if (gdjs.Level6Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level6Code.GDboostObjects1 */
/* Reuse gdjs.Level6Code.GDplayerObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(((( gdjs.Level6Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Level6Code.GDplayerObjects1[0].getPointY(""))) - 90);
}{for(var i = 0, len = gdjs.Level6Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDplayerObjects1[i].getBehavior("Tween").addObjectPositionYTween("", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)), "easeOutQuad", 100, false);
}
}{for(var i = 0, len = gdjs.Level6Code.GDboostObjects1.length ;i < len;++i) {
    gdjs.Level6Code.GDboostObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};

gdjs.Level6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level6Code.GDplatformObjects1.length = 0;
gdjs.Level6Code.GDplatformObjects2.length = 0;
gdjs.Level6Code.GDplayerObjects1.length = 0;
gdjs.Level6Code.GDplayerObjects2.length = 0;
gdjs.Level6Code.GDRulesObjects1.length = 0;
gdjs.Level6Code.GDRulesObjects2.length = 0;
gdjs.Level6Code.GDloadingObjects1.length = 0;
gdjs.Level6Code.GDloadingObjects2.length = 0;
gdjs.Level6Code.GDQuitBufferObjects1.length = 0;
gdjs.Level6Code.GDQuitBufferObjects2.length = 0;
gdjs.Level6Code.GDfinishObjects1.length = 0;
gdjs.Level6Code.GDfinishObjects2.length = 0;
gdjs.Level6Code.GDplatformfakeObjects1.length = 0;
gdjs.Level6Code.GDplatformfakeObjects2.length = 0;
gdjs.Level6Code.GDplatformfake2Objects1.length = 0;
gdjs.Level6Code.GDplatformfake2Objects2.length = 0;
gdjs.Level6Code.GDboostObjects1.length = 0;
gdjs.Level6Code.GDboostObjects2.length = 0;
gdjs.Level6Code.GDHintObjects1.length = 0;
gdjs.Level6Code.GDHintObjects2.length = 0;

gdjs.Level6Code.eventsList2(runtimeScene);

return;

}

gdjs['Level6Code'] = gdjs.Level6Code;
