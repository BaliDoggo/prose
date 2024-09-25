gdjs.Level1Code = {};
gdjs.Level1Code.GDplayerObjects1_1final = [];

gdjs.Level1Code.GDplatformObjects1= [];
gdjs.Level1Code.GDplatformObjects2= [];
gdjs.Level1Code.GDplayerObjects1= [];
gdjs.Level1Code.GDplayerObjects2= [];
gdjs.Level1Code.GDRulesObjects1= [];
gdjs.Level1Code.GDRulesObjects2= [];
gdjs.Level1Code.GDportalObjects1= [];
gdjs.Level1Code.GDportalObjects2= [];
gdjs.Level1Code.GDloadingObjects1= [];
gdjs.Level1Code.GDloadingObjects2= [];
gdjs.Level1Code.GDQuitBufferObjects1= [];
gdjs.Level1Code.GDQuitBufferObjects2= [];
gdjs.Level1Code.GDhintObjects1= [];
gdjs.Level1Code.GDhintObjects2= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};
gdjs.Level1Code.condition2IsTrue_0 = {val:false};
gdjs.Level1Code.condition3IsTrue_0 = {val:false};
gdjs.Level1Code.conditionTrue_1 = {val:false};
gdjs.Level1Code.condition0IsTrue_1 = {val:false};
gdjs.Level1Code.condition1IsTrue_1 = {val:false};
gdjs.Level1Code.condition2IsTrue_1 = {val:false};
gdjs.Level1Code.condition3IsTrue_1 = {val:false};


gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level1Code.GDplayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDportalObjects1Objects = Hashtable.newFrom({"portal": gdjs.Level1Code.GDportalObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level1Code.GDplayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDportalObjects1Objects = Hashtable.newFrom({"portal": gdjs.Level1Code.GDportalObjects1});
gdjs.Level1Code.asyncCallback10587108 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level2");
}}
gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Level1Code.asyncCallback10587108(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level1Code.asyncCallback10587908 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level1Code.GDQuitBufferObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Level1Code.GDQuitBufferObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDQuitBufferObjects2[i].hide();
}
}}
gdjs.Level1Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Level1Code.asyncCallback10587908(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level1Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level1Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDplayerObjects1[i].setPosition(174,321);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level1Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level1Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.Level1Code.GDplayerObjects1.length = 0;


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
{gdjs.Level1Code.conditionTrue_1 = gdjs.Level1Code.condition0IsTrue_0;
gdjs.Level1Code.GDplayerObjects1_1final.length = 0;gdjs.Level1Code.condition0IsTrue_1.val = false;
gdjs.Level1Code.condition1IsTrue_1.val = false;
gdjs.Level1Code.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level1Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level1Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDplayerObjects2[i].getY() >= 600 ) {
        gdjs.Level1Code.condition0IsTrue_1.val = true;
        gdjs.Level1Code.GDplayerObjects2[k] = gdjs.Level1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDplayerObjects2.length = k;if( gdjs.Level1Code.condition0IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level1Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level1Code.GDplayerObjects1_1final.indexOf(gdjs.Level1Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level1Code.GDplayerObjects1_1final.push(gdjs.Level1Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level1Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level1Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDplayerObjects2[i].getX() >= 800 ) {
        gdjs.Level1Code.condition1IsTrue_1.val = true;
        gdjs.Level1Code.GDplayerObjects2[k] = gdjs.Level1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDplayerObjects2.length = k;if( gdjs.Level1Code.condition1IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level1Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level1Code.GDplayerObjects1_1final.indexOf(gdjs.Level1Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level1Code.GDplayerObjects1_1final.push(gdjs.Level1Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level1Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level1Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDplayerObjects2[i].getX() <= -(35) ) {
        gdjs.Level1Code.condition2IsTrue_1.val = true;
        gdjs.Level1Code.GDplayerObjects2[k] = gdjs.Level1Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDplayerObjects2.length = k;if( gdjs.Level1Code.condition2IsTrue_1.val ) {
    gdjs.Level1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level1Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level1Code.GDplayerObjects1_1final.indexOf(gdjs.Level1Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level1Code.GDplayerObjects1_1final.push(gdjs.Level1Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level1Code.GDplayerObjects1_1final, gdjs.Level1Code.GDplayerObjects1);
}
}
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level1Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("portal"), gdjs.Level1Code.GDportalObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDplayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDportalObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDportalObjects1 */
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.Level1Code.GDportalObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDportalObjects1[i].setPosition(172,379);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level1Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("portal"), gdjs.Level1Code.GDportalObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
gdjs.Level1Code.condition1IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDplayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDportalObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level1Code.condition0IsTrue_0.val ) {
{
gdjs.Level1Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Level1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDportalObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDportalObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDportalObjects1[i].hide();
}
}
{ //Subevents
gdjs.Level1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level1Code.GDQuitBufferObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level1Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDQuitBufferObjects1[i].hide(false);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 50;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Tutorial");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.Level1Code.GDloadingObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDloadingObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDloadingObjects1[i].setWidth(2 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level1Code.GDQuitBufferObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDQuitBufferObjects1[i].hide();
}
}}

}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDplatformObjects1.length = 0;
gdjs.Level1Code.GDplatformObjects2.length = 0;
gdjs.Level1Code.GDplayerObjects1.length = 0;
gdjs.Level1Code.GDplayerObjects2.length = 0;
gdjs.Level1Code.GDRulesObjects1.length = 0;
gdjs.Level1Code.GDRulesObjects2.length = 0;
gdjs.Level1Code.GDportalObjects1.length = 0;
gdjs.Level1Code.GDportalObjects2.length = 0;
gdjs.Level1Code.GDloadingObjects1.length = 0;
gdjs.Level1Code.GDloadingObjects2.length = 0;
gdjs.Level1Code.GDQuitBufferObjects1.length = 0;
gdjs.Level1Code.GDQuitBufferObjects2.length = 0;
gdjs.Level1Code.GDhintObjects1.length = 0;
gdjs.Level1Code.GDhintObjects2.length = 0;

gdjs.Level1Code.eventsList2(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
