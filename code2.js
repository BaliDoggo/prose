gdjs.Level4Code = {};
gdjs.Level4Code.GDplayerObjects1_1final = [];

gdjs.Level4Code.GDplatformObjects1= [];
gdjs.Level4Code.GDplatformObjects2= [];
gdjs.Level4Code.GDplayerObjects1= [];
gdjs.Level4Code.GDplayerObjects2= [];
gdjs.Level4Code.GDRulesObjects1= [];
gdjs.Level4Code.GDRulesObjects2= [];
gdjs.Level4Code.GDloadingObjects1= [];
gdjs.Level4Code.GDloadingObjects2= [];
gdjs.Level4Code.GDQuitBufferObjects1= [];
gdjs.Level4Code.GDQuitBufferObjects2= [];
gdjs.Level4Code.GDfinishObjects1= [];
gdjs.Level4Code.GDfinishObjects2= [];
gdjs.Level4Code.GDenemyObjects1= [];
gdjs.Level4Code.GDenemyObjects2= [];
gdjs.Level4Code.GDRulesEditObjects1= [];
gdjs.Level4Code.GDRulesEditObjects2= [];

gdjs.Level4Code.conditionTrue_0 = {val:false};
gdjs.Level4Code.condition0IsTrue_0 = {val:false};
gdjs.Level4Code.condition1IsTrue_0 = {val:false};
gdjs.Level4Code.condition2IsTrue_0 = {val:false};
gdjs.Level4Code.condition3IsTrue_0 = {val:false};
gdjs.Level4Code.conditionTrue_1 = {val:false};
gdjs.Level4Code.condition0IsTrue_1 = {val:false};
gdjs.Level4Code.condition1IsTrue_1 = {val:false};
gdjs.Level4Code.condition2IsTrue_1 = {val:false};
gdjs.Level4Code.condition3IsTrue_1 = {val:false};


gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level4Code.GDplayerObjects1});
gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Level4Code.GDenemyObjects1});
gdjs.Level4Code.asyncCallback10306492 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level4Code.GDQuitBufferObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Level4Code.GDQuitBufferObjects2.length ;i < len;++i) {
    gdjs.Level4Code.GDQuitBufferObjects2[i].hide();
}
}}
gdjs.Level4Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Level4Code.asyncCallback10306492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level4Code.GDplayerObjects1});
gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDfinishObjects1Objects = Hashtable.newFrom({"finish": gdjs.Level4Code.GDfinishObjects1});
gdjs.Level4Code.asyncCallback10308068 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level5");
}}
gdjs.Level4Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Level4Code.asyncCallback10308068(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level4Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level4", false);
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level4Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level4Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level4Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level4Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level4Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level4Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.Level4Code.GDplayerObjects1.length = 0;


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
{gdjs.Level4Code.conditionTrue_1 = gdjs.Level4Code.condition0IsTrue_0;
gdjs.Level4Code.GDplayerObjects1_1final.length = 0;gdjs.Level4Code.condition0IsTrue_1.val = false;
gdjs.Level4Code.condition1IsTrue_1.val = false;
gdjs.Level4Code.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level4Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level4Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDplayerObjects2[i].getY() >= 620 ) {
        gdjs.Level4Code.condition0IsTrue_1.val = true;
        gdjs.Level4Code.GDplayerObjects2[k] = gdjs.Level4Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDplayerObjects2.length = k;if( gdjs.Level4Code.condition0IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level4Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level4Code.GDplayerObjects1_1final.indexOf(gdjs.Level4Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level4Code.GDplayerObjects1_1final.push(gdjs.Level4Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level4Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level4Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDplayerObjects2[i].getX() >= 800 ) {
        gdjs.Level4Code.condition1IsTrue_1.val = true;
        gdjs.Level4Code.GDplayerObjects2[k] = gdjs.Level4Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDplayerObjects2.length = k;if( gdjs.Level4Code.condition1IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level4Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level4Code.GDplayerObjects1_1final.indexOf(gdjs.Level4Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level4Code.GDplayerObjects1_1final.push(gdjs.Level4Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level4Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level4Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level4Code.GDplayerObjects2[i].getX() <= -(35) ) {
        gdjs.Level4Code.condition2IsTrue_1.val = true;
        gdjs.Level4Code.GDplayerObjects2[k] = gdjs.Level4Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level4Code.GDplayerObjects2.length = k;if( gdjs.Level4Code.condition2IsTrue_1.val ) {
    gdjs.Level4Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level4Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level4Code.GDplayerObjects1_1final.indexOf(gdjs.Level4Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level4Code.GDplayerObjects1_1final.push(gdjs.Level4Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level4Code.GDplayerObjects1_1final, gdjs.Level4Code.GDplayerObjects1);
}
}
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level4", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.Level4Code.GDloadingObjects1);
{for(var i = 0, len = gdjs.Level4Code.GDloadingObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDloadingObjects1[i].setWidth(2 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level4Code.GDQuitBufferObjects1);
{for(var i = 0, len = gdjs.Level4Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDQuitBufferObjects1[i].hide();
}
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 50;
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Tutorial");
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Level4Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level4Code.GDQuitBufferObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level4Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDQuitBufferObjects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RulesEdit"), gdjs.Level4Code.GDRulesEditObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Level4Code.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level4Code.GDplayerObjects1);

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
gdjs.Level4Code.condition2IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDplayerObjects1Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDenemyObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDRulesEditObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDRulesEditObjects1[i].getX() == 0 ) {
        gdjs.Level4Code.condition1IsTrue_0.val = true;
        gdjs.Level4Code.GDRulesEditObjects1[k] = gdjs.Level4Code.GDRulesEditObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDRulesEditObjects1.length = k;}if ( gdjs.Level4Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level4Code.GDRulesEditObjects1.length;i<l;++i) {
    if ( gdjs.Level4Code.GDRulesEditObjects1[i].getY() == 23 ) {
        gdjs.Level4Code.condition2IsTrue_0.val = true;
        gdjs.Level4Code.GDRulesEditObjects1[k] = gdjs.Level4Code.GDRulesEditObjects1[i];
        ++k;
    }
}
gdjs.Level4Code.GDRulesEditObjects1.length = k;}}
}
if (gdjs.Level4Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level4", false);
}}

}


{


gdjs.Level4Code.condition0IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Level4Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level4Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Level4Code.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level4Code.GDplayerObjects1);

gdjs.Level4Code.condition0IsTrue_0.val = false;
gdjs.Level4Code.condition1IsTrue_0.val = false;
{
gdjs.Level4Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDplayerObjects1Objects, gdjs.Level4Code.mapOfGDgdjs_46Level4Code_46GDfinishObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level4Code.condition0IsTrue_0.val ) {
{
gdjs.Level4Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.Level4Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level4Code.GDfinishObjects1 */
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.Level4Code.GDfinishObjects1.length ;i < len;++i) {
    gdjs.Level4Code.GDfinishObjects1[i].hide();
}
}
{ //Subevents
gdjs.Level4Code.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Level4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level4Code.GDplatformObjects1.length = 0;
gdjs.Level4Code.GDplatformObjects2.length = 0;
gdjs.Level4Code.GDplayerObjects1.length = 0;
gdjs.Level4Code.GDplayerObjects2.length = 0;
gdjs.Level4Code.GDRulesObjects1.length = 0;
gdjs.Level4Code.GDRulesObjects2.length = 0;
gdjs.Level4Code.GDloadingObjects1.length = 0;
gdjs.Level4Code.GDloadingObjects2.length = 0;
gdjs.Level4Code.GDQuitBufferObjects1.length = 0;
gdjs.Level4Code.GDQuitBufferObjects2.length = 0;
gdjs.Level4Code.GDfinishObjects1.length = 0;
gdjs.Level4Code.GDfinishObjects2.length = 0;
gdjs.Level4Code.GDenemyObjects1.length = 0;
gdjs.Level4Code.GDenemyObjects2.length = 0;
gdjs.Level4Code.GDRulesEditObjects1.length = 0;
gdjs.Level4Code.GDRulesEditObjects2.length = 0;

gdjs.Level4Code.eventsList2(runtimeScene);
return;

}

gdjs['Level4Code'] = gdjs.Level4Code;
