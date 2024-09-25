gdjs.Level2Code = {};
gdjs.Level2Code.GDplayerObjects1_1final = [];

gdjs.Level2Code.GDplatformObjects1= [];
gdjs.Level2Code.GDplatformObjects2= [];
gdjs.Level2Code.GDplayerObjects1= [];
gdjs.Level2Code.GDplayerObjects2= [];
gdjs.Level2Code.GDRulesObjects1= [];
gdjs.Level2Code.GDRulesObjects2= [];
gdjs.Level2Code.GDenemyObjects1= [];
gdjs.Level2Code.GDenemyObjects2= [];
gdjs.Level2Code.GDfinishObjects1= [];
gdjs.Level2Code.GDfinishObjects2= [];
gdjs.Level2Code.GDloadingObjects1= [];
gdjs.Level2Code.GDloadingObjects2= [];
gdjs.Level2Code.GDQuitBufferObjects1= [];
gdjs.Level2Code.GDQuitBufferObjects2= [];

gdjs.Level2Code.conditionTrue_0 = {val:false};
gdjs.Level2Code.condition0IsTrue_0 = {val:false};
gdjs.Level2Code.condition1IsTrue_0 = {val:false};
gdjs.Level2Code.condition2IsTrue_0 = {val:false};
gdjs.Level2Code.condition3IsTrue_0 = {val:false};
gdjs.Level2Code.conditionTrue_1 = {val:false};
gdjs.Level2Code.condition0IsTrue_1 = {val:false};
gdjs.Level2Code.condition1IsTrue_1 = {val:false};
gdjs.Level2Code.condition2IsTrue_1 = {val:false};
gdjs.Level2Code.condition3IsTrue_1 = {val:false};


gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level2Code.GDplayerObjects1});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Level2Code.GDenemyObjects1});
gdjs.Level2Code.asyncCallback10611716 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level2Code.GDQuitBufferObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Level2Code.GDQuitBufferObjects2.length ;i < len;++i) {
    gdjs.Level2Code.GDQuitBufferObjects2[i].hide();
}
}}
gdjs.Level2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Level2Code.asyncCallback10611716(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level2Code.GDplayerObjects1});
gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDfinishObjects1Objects = Hashtable.newFrom({"finish": gdjs.Level2Code.GDfinishObjects1});
gdjs.Level2Code.asyncCallback10613292 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level3");
}}
gdjs.Level2Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Level2Code.asyncCallback10613292(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level2Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level2Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level2Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level2Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.Level2Code.GDplayerObjects1.length = 0;


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
{gdjs.Level2Code.conditionTrue_1 = gdjs.Level2Code.condition0IsTrue_0;
gdjs.Level2Code.GDplayerObjects1_1final.length = 0;gdjs.Level2Code.condition0IsTrue_1.val = false;
gdjs.Level2Code.condition1IsTrue_1.val = false;
gdjs.Level2Code.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level2Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level2Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDplayerObjects2[i].getY() >= 600 ) {
        gdjs.Level2Code.condition0IsTrue_1.val = true;
        gdjs.Level2Code.GDplayerObjects2[k] = gdjs.Level2Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDplayerObjects2.length = k;if( gdjs.Level2Code.condition0IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level2Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level2Code.GDplayerObjects1_1final.indexOf(gdjs.Level2Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level2Code.GDplayerObjects1_1final.push(gdjs.Level2Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level2Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level2Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDplayerObjects2[i].getX() >= 800 ) {
        gdjs.Level2Code.condition1IsTrue_1.val = true;
        gdjs.Level2Code.GDplayerObjects2[k] = gdjs.Level2Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDplayerObjects2.length = k;if( gdjs.Level2Code.condition1IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level2Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level2Code.GDplayerObjects1_1final.indexOf(gdjs.Level2Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level2Code.GDplayerObjects1_1final.push(gdjs.Level2Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level2Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level2Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level2Code.GDplayerObjects2[i].getX() <= -(35) ) {
        gdjs.Level2Code.condition2IsTrue_1.val = true;
        gdjs.Level2Code.GDplayerObjects2[k] = gdjs.Level2Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level2Code.GDplayerObjects2.length = k;if( gdjs.Level2Code.condition2IsTrue_1.val ) {
    gdjs.Level2Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level2Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level2Code.GDplayerObjects1_1final.indexOf(gdjs.Level2Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level2Code.GDplayerObjects1_1final.push(gdjs.Level2Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level2Code.GDplayerObjects1_1final, gdjs.Level2Code.GDplayerObjects1);
}
}
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level2");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Level2Code.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level2Code.GDplayerObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDplayerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDenemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level2Code.GDQuitBufferObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDQuitBufferObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.Level2Code.GDloadingObjects1);
{for(var i = 0, len = gdjs.Level2Code.GDloadingObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDloadingObjects1[i].setWidth(2 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 50;
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Tutorial");
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level2Code.GDQuitBufferObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level2Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDQuitBufferObjects1[i].hide(false);
}
}}

}


{


gdjs.Level2Code.condition0IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Level2Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Level2Code.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level2Code.GDplayerObjects1);

gdjs.Level2Code.condition0IsTrue_0.val = false;
gdjs.Level2Code.condition1IsTrue_0.val = false;
{
gdjs.Level2Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDplayerObjects1Objects, gdjs.Level2Code.mapOfGDgdjs_46Level2Code_46GDfinishObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level2Code.condition0IsTrue_0.val ) {
{
gdjs.Level2Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.Level2Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level2Code.GDfinishObjects1 */
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.Level2Code.GDfinishObjects1.length ;i < len;++i) {
    gdjs.Level2Code.GDfinishObjects1[i].hide();
}
}
{ //Subevents
gdjs.Level2Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Level2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level2Code.GDplatformObjects1.length = 0;
gdjs.Level2Code.GDplatformObjects2.length = 0;
gdjs.Level2Code.GDplayerObjects1.length = 0;
gdjs.Level2Code.GDplayerObjects2.length = 0;
gdjs.Level2Code.GDRulesObjects1.length = 0;
gdjs.Level2Code.GDRulesObjects2.length = 0;
gdjs.Level2Code.GDenemyObjects1.length = 0;
gdjs.Level2Code.GDenemyObjects2.length = 0;
gdjs.Level2Code.GDfinishObjects1.length = 0;
gdjs.Level2Code.GDfinishObjects2.length = 0;
gdjs.Level2Code.GDloadingObjects1.length = 0;
gdjs.Level2Code.GDloadingObjects2.length = 0;
gdjs.Level2Code.GDQuitBufferObjects1.length = 0;
gdjs.Level2Code.GDQuitBufferObjects2.length = 0;

gdjs.Level2Code.eventsList2(runtimeScene);
return;

}

gdjs['Level2Code'] = gdjs.Level2Code;
