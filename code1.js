gdjs.Level3Code = {};
gdjs.Level3Code.GDplayerObjects1_1final = [];

gdjs.Level3Code.GDplatformObjects1= [];
gdjs.Level3Code.GDplatformObjects2= [];
gdjs.Level3Code.GDplatform2Objects1= [];
gdjs.Level3Code.GDplatform2Objects2= [];
gdjs.Level3Code.GDplayerObjects1= [];
gdjs.Level3Code.GDplayerObjects2= [];
gdjs.Level3Code.GDRulesObjects1= [];
gdjs.Level3Code.GDRulesObjects2= [];
gdjs.Level3Code.GDloadingObjects1= [];
gdjs.Level3Code.GDloadingObjects2= [];
gdjs.Level3Code.GDQuitBufferObjects1= [];
gdjs.Level3Code.GDQuitBufferObjects2= [];
gdjs.Level3Code.GDportalObjects1= [];
gdjs.Level3Code.GDportalObjects2= [];

gdjs.Level3Code.conditionTrue_0 = {val:false};
gdjs.Level3Code.condition0IsTrue_0 = {val:false};
gdjs.Level3Code.condition1IsTrue_0 = {val:false};
gdjs.Level3Code.condition2IsTrue_0 = {val:false};
gdjs.Level3Code.condition3IsTrue_0 = {val:false};
gdjs.Level3Code.conditionTrue_1 = {val:false};
gdjs.Level3Code.condition0IsTrue_1 = {val:false};
gdjs.Level3Code.condition1IsTrue_1 = {val:false};
gdjs.Level3Code.condition2IsTrue_1 = {val:false};
gdjs.Level3Code.condition3IsTrue_1 = {val:false};


gdjs.Level3Code.asyncCallback10279276 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level3Code.GDQuitBufferObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Level3Code.GDQuitBufferObjects2.length ;i < len;++i) {
    gdjs.Level3Code.GDQuitBufferObjects2[i].hide();
}
}}
gdjs.Level3Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Level3Code.asyncCallback10279276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level3Code.GDplayerObjects1});
gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDportalObjects1Objects = Hashtable.newFrom({"portal": gdjs.Level3Code.GDportalObjects1});
gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level3Code.GDplayerObjects1});
gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDportalObjects1Objects = Hashtable.newFrom({"portal": gdjs.Level3Code.GDportalObjects1});
gdjs.Level3Code.asyncCallback10281996 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level4");
}}
gdjs.Level3Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Level3Code.asyncCallback10281996(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level3Code.GDplayerObjects1});
gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDplatform2Objects1Objects = Hashtable.newFrom({"platform2": gdjs.Level3Code.GDplatform2Objects1});
gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level3Code.GDplayerObjects1});
gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDplatform2Objects1Objects = Hashtable.newFrom({"platform2": gdjs.Level3Code.GDplatform2Objects1});
gdjs.Level3Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level3Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level3Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level3Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.Level3Code.GDplayerObjects1.length = 0;


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
{gdjs.Level3Code.conditionTrue_1 = gdjs.Level3Code.condition0IsTrue_0;
gdjs.Level3Code.GDplayerObjects1_1final.length = 0;gdjs.Level3Code.condition0IsTrue_1.val = false;
gdjs.Level3Code.condition1IsTrue_1.val = false;
gdjs.Level3Code.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level3Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level3Code.GDplayerObjects2[i].getY() >= 620 ) {
        gdjs.Level3Code.condition0IsTrue_1.val = true;
        gdjs.Level3Code.GDplayerObjects2[k] = gdjs.Level3Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level3Code.GDplayerObjects2.length = k;if( gdjs.Level3Code.condition0IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level3Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level3Code.GDplayerObjects1_1final.indexOf(gdjs.Level3Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level3Code.GDplayerObjects1_1final.push(gdjs.Level3Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level3Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level3Code.GDplayerObjects2[i].getX() >= 800 ) {
        gdjs.Level3Code.condition1IsTrue_1.val = true;
        gdjs.Level3Code.GDplayerObjects2[k] = gdjs.Level3Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level3Code.GDplayerObjects2.length = k;if( gdjs.Level3Code.condition1IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level3Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level3Code.GDplayerObjects1_1final.indexOf(gdjs.Level3Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level3Code.GDplayerObjects1_1final.push(gdjs.Level3Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level3Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level3Code.GDplayerObjects2[i].getX() <= -(35) ) {
        gdjs.Level3Code.condition2IsTrue_1.val = true;
        gdjs.Level3Code.GDplayerObjects2[k] = gdjs.Level3Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level3Code.GDplayerObjects2.length = k;if( gdjs.Level3Code.condition2IsTrue_1.val ) {
    gdjs.Level3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level3Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level3Code.GDplayerObjects1_1final.indexOf(gdjs.Level3Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level3Code.GDplayerObjects1_1final.push(gdjs.Level3Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level3Code.GDplayerObjects1_1final, gdjs.Level3Code.GDplayerObjects1);
}
}
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level3", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.Level3Code.GDloadingObjects1);
{for(var i = 0, len = gdjs.Level3Code.GDloadingObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDloadingObjects1[i].setWidth(2 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level3Code.GDQuitBufferObjects1);
gdjs.copyArray(runtimeScene.getObjects("platform2"), gdjs.Level3Code.GDplatform2Objects1);
{for(var i = 0, len = gdjs.Level3Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDQuitBufferObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level3Code.GDplatform2Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDplatform2Objects1[i].hide();
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 50;
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Tutorial");
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level3Code.GDQuitBufferObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level3Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDQuitBufferObjects1[i].hide(false);
}
}}

}


{


gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Level3Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("portal"), gdjs.Level3Code.GDportalObjects1);

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDplayerObjects1Objects, gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDportalObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
gdjs.Level3Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDportalObjects1 */
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.Level3Code.GDportalObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDportalObjects1[i].setPosition(96,510);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("portal"), gdjs.Level3Code.GDportalObjects1);

gdjs.Level3Code.condition0IsTrue_0.val = false;
gdjs.Level3Code.condition1IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDplayerObjects1Objects, gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDportalObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level3Code.condition0IsTrue_0.val ) {
{
gdjs.Level3Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Level3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDportalObjects1 */
{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.Level3Code.GDportalObjects1.length ;i < len;++i) {
    gdjs.Level3Code.GDportalObjects1[i].hide();
}
}
{ //Subevents
gdjs.Level3Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("platform2"), gdjs.Level3Code.GDplatform2Objects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects1);

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDplayerObjects1Objects, gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDplatform2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDplatform2Objects1 */
{for(var i = 0, len = gdjs.Level3Code.GDplatform2Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDplatform2Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("platform2"), gdjs.Level3Code.GDplatform2Objects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level3Code.GDplayerObjects1);

gdjs.Level3Code.condition0IsTrue_0.val = false;
{
gdjs.Level3Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDplayerObjects1Objects, gdjs.Level3Code.mapOfGDgdjs_46Level3Code_46GDplatform2Objects1Objects, true, runtimeScene, false);
}if (gdjs.Level3Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level3Code.GDplatform2Objects1 */
{for(var i = 0, len = gdjs.Level3Code.GDplatform2Objects1.length ;i < len;++i) {
    gdjs.Level3Code.GDplatform2Objects1[i].hide();
}
}}

}


};

gdjs.Level3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level3Code.GDplatformObjects1.length = 0;
gdjs.Level3Code.GDplatformObjects2.length = 0;
gdjs.Level3Code.GDplatform2Objects1.length = 0;
gdjs.Level3Code.GDplatform2Objects2.length = 0;
gdjs.Level3Code.GDplayerObjects1.length = 0;
gdjs.Level3Code.GDplayerObjects2.length = 0;
gdjs.Level3Code.GDRulesObjects1.length = 0;
gdjs.Level3Code.GDRulesObjects2.length = 0;
gdjs.Level3Code.GDloadingObjects1.length = 0;
gdjs.Level3Code.GDloadingObjects2.length = 0;
gdjs.Level3Code.GDQuitBufferObjects1.length = 0;
gdjs.Level3Code.GDQuitBufferObjects2.length = 0;
gdjs.Level3Code.GDportalObjects1.length = 0;
gdjs.Level3Code.GDportalObjects2.length = 0;

gdjs.Level3Code.eventsList2(runtimeScene);
return;

}

gdjs['Level3Code'] = gdjs.Level3Code;
