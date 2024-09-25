gdjs.TemplateCode = {};
gdjs.TemplateCode.GDplayerObjects1_1final = [];

gdjs.TemplateCode.GDplatformObjects1= [];
gdjs.TemplateCode.GDplatformObjects2= [];
gdjs.TemplateCode.GDplayerObjects1= [];
gdjs.TemplateCode.GDplayerObjects2= [];
gdjs.TemplateCode.GDRulesObjects1= [];
gdjs.TemplateCode.GDRulesObjects2= [];
gdjs.TemplateCode.GDloadingObjects1= [];
gdjs.TemplateCode.GDloadingObjects2= [];
gdjs.TemplateCode.GDQuitBufferObjects1= [];
gdjs.TemplateCode.GDQuitBufferObjects2= [];
gdjs.TemplateCode.GDfinishObjects1= [];
gdjs.TemplateCode.GDfinishObjects2= [];

gdjs.TemplateCode.conditionTrue_0 = {val:false};
gdjs.TemplateCode.condition0IsTrue_0 = {val:false};
gdjs.TemplateCode.condition1IsTrue_0 = {val:false};
gdjs.TemplateCode.condition2IsTrue_0 = {val:false};
gdjs.TemplateCode.condition3IsTrue_0 = {val:false};
gdjs.TemplateCode.conditionTrue_1 = {val:false};
gdjs.TemplateCode.condition0IsTrue_1 = {val:false};
gdjs.TemplateCode.condition1IsTrue_1 = {val:false};
gdjs.TemplateCode.condition2IsTrue_1 = {val:false};
gdjs.TemplateCode.condition3IsTrue_1 = {val:false};


gdjs.TemplateCode.asyncCallback10566524 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.TemplateCode.GDQuitBufferObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.TemplateCode.GDQuitBufferObjects2.length ;i < len;++i) {
    gdjs.TemplateCode.GDQuitBufferObjects2[i].hide();
}
}}
gdjs.TemplateCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.TemplateCode.asyncCallback10566524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.TemplateCode.mapOfGDgdjs_46TemplateCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.TemplateCode.GDplayerObjects1});
gdjs.TemplateCode.mapOfGDgdjs_46TemplateCode_46GDfinishObjects1Objects = Hashtable.newFrom({"finish": gdjs.TemplateCode.GDfinishObjects1});
gdjs.TemplateCode.asyncCallback10568100 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "End");
}}
gdjs.TemplateCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.TemplateCode.asyncCallback10568100(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.TemplateCode.eventsList2 = function(runtimeScene) {

{


gdjs.TemplateCode.condition0IsTrue_0.val = false;
{
gdjs.TemplateCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.TemplateCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


{


gdjs.TemplateCode.condition0IsTrue_0.val = false;
{
gdjs.TemplateCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.TemplateCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TemplateCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.TemplateCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.TemplateCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


gdjs.TemplateCode.condition0IsTrue_0.val = false;
{
gdjs.TemplateCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.TemplateCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TemplateCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.TemplateCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.TemplateCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


gdjs.TemplateCode.condition0IsTrue_0.val = false;
{
gdjs.TemplateCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.TemplateCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TemplateCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.TemplateCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.TemplateCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.TemplateCode.GDplayerObjects1.length = 0;


gdjs.TemplateCode.condition0IsTrue_0.val = false;
{
{gdjs.TemplateCode.conditionTrue_1 = gdjs.TemplateCode.condition0IsTrue_0;
gdjs.TemplateCode.GDplayerObjects1_1final.length = 0;gdjs.TemplateCode.condition0IsTrue_1.val = false;
gdjs.TemplateCode.condition1IsTrue_1.val = false;
gdjs.TemplateCode.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TemplateCode.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.TemplateCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.TemplateCode.GDplayerObjects2[i].getY() >= 620 ) {
        gdjs.TemplateCode.condition0IsTrue_1.val = true;
        gdjs.TemplateCode.GDplayerObjects2[k] = gdjs.TemplateCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.TemplateCode.GDplayerObjects2.length = k;if( gdjs.TemplateCode.condition0IsTrue_1.val ) {
    gdjs.TemplateCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.TemplateCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.TemplateCode.GDplayerObjects1_1final.indexOf(gdjs.TemplateCode.GDplayerObjects2[j]) === -1 )
            gdjs.TemplateCode.GDplayerObjects1_1final.push(gdjs.TemplateCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TemplateCode.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.TemplateCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.TemplateCode.GDplayerObjects2[i].getX() >= 800 ) {
        gdjs.TemplateCode.condition1IsTrue_1.val = true;
        gdjs.TemplateCode.GDplayerObjects2[k] = gdjs.TemplateCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.TemplateCode.GDplayerObjects2.length = k;if( gdjs.TemplateCode.condition1IsTrue_1.val ) {
    gdjs.TemplateCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.TemplateCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.TemplateCode.GDplayerObjects1_1final.indexOf(gdjs.TemplateCode.GDplayerObjects2[j]) === -1 )
            gdjs.TemplateCode.GDplayerObjects1_1final.push(gdjs.TemplateCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TemplateCode.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.TemplateCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.TemplateCode.GDplayerObjects2[i].getX() <= -(35) ) {
        gdjs.TemplateCode.condition2IsTrue_1.val = true;
        gdjs.TemplateCode.GDplayerObjects2[k] = gdjs.TemplateCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.TemplateCode.GDplayerObjects2.length = k;if( gdjs.TemplateCode.condition2IsTrue_1.val ) {
    gdjs.TemplateCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.TemplateCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.TemplateCode.GDplayerObjects1_1final.indexOf(gdjs.TemplateCode.GDplayerObjects2[j]) === -1 )
            gdjs.TemplateCode.GDplayerObjects1_1final.push(gdjs.TemplateCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.TemplateCode.GDplayerObjects1_1final, gdjs.TemplateCode.GDplayerObjects1);
}
}
}if (gdjs.TemplateCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.TemplateCode.GDloadingObjects1);
{for(var i = 0, len = gdjs.TemplateCode.GDloadingObjects1.length ;i < len;++i) {
    gdjs.TemplateCode.GDloadingObjects1[i].setWidth(2 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.TemplateCode.condition0IsTrue_0.val = false;
{
gdjs.TemplateCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TemplateCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.TemplateCode.GDQuitBufferObjects1);
{for(var i = 0, len = gdjs.TemplateCode.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.TemplateCode.GDQuitBufferObjects1[i].hide();
}
}}

}


{


gdjs.TemplateCode.condition0IsTrue_0.val = false;
{
gdjs.TemplateCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 50;
}if (gdjs.TemplateCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.TemplateCode.condition0IsTrue_0.val = false;
{
gdjs.TemplateCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.TemplateCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.TemplateCode.GDQuitBufferObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.TemplateCode.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.TemplateCode.GDQuitBufferObjects1[i].hide(false);
}
}}

}


{


gdjs.TemplateCode.condition0IsTrue_0.val = false;
{
gdjs.TemplateCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.TemplateCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.TemplateCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.TemplateCode.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TemplateCode.GDplayerObjects1);

gdjs.TemplateCode.condition0IsTrue_0.val = false;
gdjs.TemplateCode.condition1IsTrue_0.val = false;
{
gdjs.TemplateCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TemplateCode.mapOfGDgdjs_46TemplateCode_46GDplayerObjects1Objects, gdjs.TemplateCode.mapOfGDgdjs_46TemplateCode_46GDfinishObjects1Objects, false, runtimeScene, false);
}if ( gdjs.TemplateCode.condition0IsTrue_0.val ) {
{
gdjs.TemplateCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.TemplateCode.condition1IsTrue_0.val) {
/* Reuse gdjs.TemplateCode.GDfinishObjects1 */
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.TemplateCode.GDfinishObjects1.length ;i < len;++i) {
    gdjs.TemplateCode.GDfinishObjects1[i].hide();
}
}
{ //Subevents
gdjs.TemplateCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.TemplateCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TemplateCode.GDplatformObjects1.length = 0;
gdjs.TemplateCode.GDplatformObjects2.length = 0;
gdjs.TemplateCode.GDplayerObjects1.length = 0;
gdjs.TemplateCode.GDplayerObjects2.length = 0;
gdjs.TemplateCode.GDRulesObjects1.length = 0;
gdjs.TemplateCode.GDRulesObjects2.length = 0;
gdjs.TemplateCode.GDloadingObjects1.length = 0;
gdjs.TemplateCode.GDloadingObjects2.length = 0;
gdjs.TemplateCode.GDQuitBufferObjects1.length = 0;
gdjs.TemplateCode.GDQuitBufferObjects2.length = 0;
gdjs.TemplateCode.GDfinishObjects1.length = 0;
gdjs.TemplateCode.GDfinishObjects2.length = 0;

gdjs.TemplateCode.eventsList2(runtimeScene);
return;

}

gdjs['TemplateCode'] = gdjs.TemplateCode;
