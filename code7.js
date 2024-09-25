gdjs.Level9Code = {};
gdjs.Level9Code.GDplayerObjects1_1final = [];

gdjs.Level9Code.GDplatformObjects1= [];
gdjs.Level9Code.GDplatformObjects2= [];
gdjs.Level9Code.GDplayerObjects1= [];
gdjs.Level9Code.GDplayerObjects2= [];
gdjs.Level9Code.GDRulesObjects1= [];
gdjs.Level9Code.GDRulesObjects2= [];
gdjs.Level9Code.GDloadingObjects1= [];
gdjs.Level9Code.GDloadingObjects2= [];
gdjs.Level9Code.GDQuitBufferObjects1= [];
gdjs.Level9Code.GDQuitBufferObjects2= [];
gdjs.Level9Code.GDfinishObjects1= [];
gdjs.Level9Code.GDfinishObjects2= [];
gdjs.Level9Code.GDarrowObjects1= [];
gdjs.Level9Code.GDarrowObjects2= [];
gdjs.Level9Code.GDLightObjects1= [];
gdjs.Level9Code.GDLightObjects2= [];
gdjs.Level9Code.GDenemyObjects1= [];
gdjs.Level9Code.GDenemyObjects2= [];

gdjs.Level9Code.conditionTrue_0 = {val:false};
gdjs.Level9Code.condition0IsTrue_0 = {val:false};
gdjs.Level9Code.condition1IsTrue_0 = {val:false};
gdjs.Level9Code.condition2IsTrue_0 = {val:false};
gdjs.Level9Code.condition3IsTrue_0 = {val:false};
gdjs.Level9Code.conditionTrue_1 = {val:false};
gdjs.Level9Code.condition0IsTrue_1 = {val:false};
gdjs.Level9Code.condition1IsTrue_1 = {val:false};
gdjs.Level9Code.condition2IsTrue_1 = {val:false};
gdjs.Level9Code.condition3IsTrue_1 = {val:false};


gdjs.Level9Code.asyncCallback10480540 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level9Code.GDQuitBufferObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Level9Code.GDQuitBufferObjects2.length ;i < len;++i) {
    gdjs.Level9Code.GDQuitBufferObjects2[i].hide();
}
}}
gdjs.Level9Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Level9Code.asyncCallback10480540(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level9Code.GDplayerObjects1});
gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDfinishObjects1Objects = Hashtable.newFrom({"finish": gdjs.Level9Code.GDfinishObjects1});
gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level9Code.GDplayerObjects1});
gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDfinishObjects1Objects = Hashtable.newFrom({"finish": gdjs.Level9Code.GDfinishObjects1});
gdjs.Level9Code.asyncCallback10483404 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level10");
}}
gdjs.Level9Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Level9Code.asyncCallback10483404(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level9Code.GDplayerObjects1});
gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplatformObjects1Objects = Hashtable.newFrom({"platform": gdjs.Level9Code.GDplatformObjects1});
gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level9Code.GDplayerObjects1});
gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplatformObjects1Objects = Hashtable.newFrom({"platform": gdjs.Level9Code.GDplatformObjects1});
gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level9Code.GDplayerObjects1});
gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDfinishObjects1Objects = Hashtable.newFrom({"finish": gdjs.Level9Code.GDfinishObjects1});
gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level9Code.GDplayerObjects1});
gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDfinishObjects1Objects = Hashtable.newFrom({"finish": gdjs.Level9Code.GDfinishObjects1});
gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level9Code.GDplayerObjects1});
gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Level9Code.GDenemyObjects1});
gdjs.Level9Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level9Code.condition0IsTrue_0.val = false;
{
gdjs.Level9Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.Level9Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level9", false);
}}

}


{


gdjs.Level9Code.condition0IsTrue_0.val = false;
{
gdjs.Level9Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level9Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level9Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level9Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


gdjs.Level9Code.condition0IsTrue_0.val = false;
{
gdjs.Level9Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level9Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level9Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level9Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


gdjs.Level9Code.condition0IsTrue_0.val = false;
{
gdjs.Level9Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level9Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level9Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level9Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.Level9Code.GDplayerObjects1.length = 0;


gdjs.Level9Code.condition0IsTrue_0.val = false;
{
{gdjs.Level9Code.conditionTrue_1 = gdjs.Level9Code.condition0IsTrue_0;
gdjs.Level9Code.GDplayerObjects1_1final.length = 0;gdjs.Level9Code.condition0IsTrue_1.val = false;
gdjs.Level9Code.condition1IsTrue_1.val = false;
gdjs.Level9Code.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level9Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level9Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level9Code.GDplayerObjects2[i].getY() >= 620 ) {
        gdjs.Level9Code.condition0IsTrue_1.val = true;
        gdjs.Level9Code.GDplayerObjects2[k] = gdjs.Level9Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level9Code.GDplayerObjects2.length = k;if( gdjs.Level9Code.condition0IsTrue_1.val ) {
    gdjs.Level9Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level9Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level9Code.GDplayerObjects1_1final.indexOf(gdjs.Level9Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level9Code.GDplayerObjects1_1final.push(gdjs.Level9Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level9Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level9Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level9Code.GDplayerObjects2[i].getX() >= 800 ) {
        gdjs.Level9Code.condition1IsTrue_1.val = true;
        gdjs.Level9Code.GDplayerObjects2[k] = gdjs.Level9Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level9Code.GDplayerObjects2.length = k;if( gdjs.Level9Code.condition1IsTrue_1.val ) {
    gdjs.Level9Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level9Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level9Code.GDplayerObjects1_1final.indexOf(gdjs.Level9Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level9Code.GDplayerObjects1_1final.push(gdjs.Level9Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level9Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level9Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level9Code.GDplayerObjects2[i].getX() <= -(35) ) {
        gdjs.Level9Code.condition2IsTrue_1.val = true;
        gdjs.Level9Code.GDplayerObjects2[k] = gdjs.Level9Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level9Code.GDplayerObjects2.length = k;if( gdjs.Level9Code.condition2IsTrue_1.val ) {
    gdjs.Level9Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level9Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level9Code.GDplayerObjects1_1final.indexOf(gdjs.Level9Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level9Code.GDplayerObjects1_1final.push(gdjs.Level9Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level9Code.GDplayerObjects1_1final, gdjs.Level9Code.GDplayerObjects1);
}
}
}if (gdjs.Level9Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level9", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.Level9Code.GDloadingObjects1);
{for(var i = 0, len = gdjs.Level9Code.GDloadingObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDloadingObjects1[i].setWidth(2 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.Level9Code.condition0IsTrue_0.val = false;
{
gdjs.Level9Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level9Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level9Code.GDQuitBufferObjects1);
{for(var i = 0, len = gdjs.Level9Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDQuitBufferObjects1[i].hide();
}
}}

}


{


gdjs.Level9Code.condition0IsTrue_0.val = false;
{
gdjs.Level9Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 50;
}if (gdjs.Level9Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Tutorial");
}}

}


{


gdjs.Level9Code.condition0IsTrue_0.val = false;
{
gdjs.Level9Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Level9Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level9Code.GDQuitBufferObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level9Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDQuitBufferObjects1[i].hide(false);
}
}}

}


{


gdjs.Level9Code.condition0IsTrue_0.val = false;
{
gdjs.Level9Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Level9Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level9Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Level9Code.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level9Code.GDplayerObjects1);

gdjs.Level9Code.condition0IsTrue_0.val = false;
gdjs.Level9Code.condition1IsTrue_0.val = false;
{
gdjs.Level9Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplayerObjects1Objects, gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDfinishObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level9Code.condition0IsTrue_0.val ) {
{
gdjs.Level9Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.Level9Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level9Code.GDfinishObjects1 */
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.Level9Code.GDfinishObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDfinishObjects1[i].setPosition(28,339);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Level9Code.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level9Code.GDplayerObjects1);

gdjs.Level9Code.condition0IsTrue_0.val = false;
gdjs.Level9Code.condition1IsTrue_0.val = false;
{
gdjs.Level9Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplayerObjects1Objects, gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDfinishObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level9Code.condition0IsTrue_0.val ) {
{
gdjs.Level9Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Level9Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("arrow"), gdjs.Level9Code.GDarrowObjects1);
/* Reuse gdjs.Level9Code.GDfinishObjects1 */
{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.Level9Code.GDfinishObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDfinishObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level9Code.GDarrowObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDarrowObjects1[i].hide();
}
}
{ //Subevents
gdjs.Level9Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("platform"), gdjs.Level9Code.GDplatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level9Code.GDplayerObjects1);

gdjs.Level9Code.condition0IsTrue_0.val = false;
{
gdjs.Level9Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplayerObjects1Objects, gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplatformObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level9Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level9Code.GDplatformObjects1 */
{for(var i = 0, len = gdjs.Level9Code.GDplatformObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDplatformObjects1[i].setOpacity(5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("platform"), gdjs.Level9Code.GDplatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level9Code.GDplayerObjects1);

gdjs.Level9Code.condition0IsTrue_0.val = false;
gdjs.Level9Code.condition1IsTrue_0.val = false;
{
gdjs.Level9Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplayerObjects1Objects, gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplatformObjects1Objects, true, runtimeScene, false);
}if ( gdjs.Level9Code.condition0IsTrue_0.val ) {
{
{gdjs.Level9Code.conditionTrue_1 = gdjs.Level9Code.condition1IsTrue_0;
gdjs.Level9Code.GDplayerObjects1_1final.length = 0;gdjs.Level9Code.condition0IsTrue_1.val = false;
gdjs.Level9Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.Level9Code.GDplayerObjects1, gdjs.Level9Code.GDplayerObjects2);

for(var i = 0, k = 0, l = gdjs.Level9Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level9Code.GDplayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level9Code.condition0IsTrue_1.val = true;
        gdjs.Level9Code.GDplayerObjects2[k] = gdjs.Level9Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level9Code.GDplayerObjects2.length = k;if( gdjs.Level9Code.condition0IsTrue_1.val ) {
    gdjs.Level9Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level9Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level9Code.GDplayerObjects1_1final.indexOf(gdjs.Level9Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level9Code.GDplayerObjects1_1final.push(gdjs.Level9Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level9Code.GDplayerObjects1, gdjs.Level9Code.GDplayerObjects2);

for(var i = 0, k = 0, l = gdjs.Level9Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level9Code.GDplayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level9Code.condition1IsTrue_1.val = true;
        gdjs.Level9Code.GDplayerObjects2[k] = gdjs.Level9Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level9Code.GDplayerObjects2.length = k;if( gdjs.Level9Code.condition1IsTrue_1.val ) {
    gdjs.Level9Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level9Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level9Code.GDplayerObjects1_1final.indexOf(gdjs.Level9Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level9Code.GDplayerObjects1_1final.push(gdjs.Level9Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level9Code.GDplayerObjects1_1final, gdjs.Level9Code.GDplayerObjects1);
}
}
}}
if (gdjs.Level9Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level9Code.GDplatformObjects1 */
{for(var i = 0, len = gdjs.Level9Code.GDplatformObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDplatformObjects1[i].setOpacity(0);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Light"), gdjs.Level9Code.GDLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("arrow"), gdjs.Level9Code.GDarrowObjects1);
gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Level9Code.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Level9Code.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level9Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level9Code.GDarrowObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDarrowObjects1[i].rotateTowardPosition((( gdjs.Level9Code.GDfinishObjects1.length === 0 ) ? 0 :gdjs.Level9Code.GDfinishObjects1[0].getPointX("")), (( gdjs.Level9Code.GDfinishObjects1.length === 0 ) ? 0 :gdjs.Level9Code.GDfinishObjects1[0].getPointY("")), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level9Code.GDarrowObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDarrowObjects1[i].setPosition((( gdjs.Level9Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Level9Code.GDplayerObjects1[0].getPointX("")) - 10,(( gdjs.Level9Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Level9Code.GDplayerObjects1[0].getPointY("")) - 12);
}
}{for(var i = 0, len = gdjs.Level9Code.GDLightObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDLightObjects1[i].setPosition((( gdjs.Level9Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Level9Code.GDplayerObjects1[0].getCenterXInScene()),(( gdjs.Level9Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Level9Code.GDplayerObjects1[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.Level9Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDenemyObjects1[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Level9Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Level9Code.GDplayerObjects1[0].getPointX("")), (( gdjs.Level9Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Level9Code.GDplayerObjects1[0].getPointY("")));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Level9Code.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level9Code.GDplayerObjects1);

gdjs.Level9Code.condition0IsTrue_0.val = false;
{
gdjs.Level9Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplayerObjects1Objects, gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDfinishObjects1Objects, 50, false);
}if (gdjs.Level9Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level9Code.GDfinishObjects1 */
{for(var i = 0, len = gdjs.Level9Code.GDfinishObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDfinishObjects1[i].setOpacity(5);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Level9Code.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level9Code.GDplayerObjects1);

gdjs.Level9Code.condition0IsTrue_0.val = false;
{
gdjs.Level9Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplayerObjects1Objects, gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDfinishObjects1Objects, 50, true);
}if (gdjs.Level9Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level9Code.GDfinishObjects1 */
{for(var i = 0, len = gdjs.Level9Code.GDfinishObjects1.length ;i < len;++i) {
    gdjs.Level9Code.GDfinishObjects1[i].setOpacity(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Level9Code.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level9Code.GDplayerObjects1);

gdjs.Level9Code.condition0IsTrue_0.val = false;
{
gdjs.Level9Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDplayerObjects1Objects, gdjs.Level9Code.mapOfGDgdjs_46Level9Code_46GDenemyObjects1Objects, false, runtimeScene, true);
}if (gdjs.Level9Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level9", false);
}}

}


};

gdjs.Level9Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level9Code.GDplatformObjects1.length = 0;
gdjs.Level9Code.GDplatformObjects2.length = 0;
gdjs.Level9Code.GDplayerObjects1.length = 0;
gdjs.Level9Code.GDplayerObjects2.length = 0;
gdjs.Level9Code.GDRulesObjects1.length = 0;
gdjs.Level9Code.GDRulesObjects2.length = 0;
gdjs.Level9Code.GDloadingObjects1.length = 0;
gdjs.Level9Code.GDloadingObjects2.length = 0;
gdjs.Level9Code.GDQuitBufferObjects1.length = 0;
gdjs.Level9Code.GDQuitBufferObjects2.length = 0;
gdjs.Level9Code.GDfinishObjects1.length = 0;
gdjs.Level9Code.GDfinishObjects2.length = 0;
gdjs.Level9Code.GDarrowObjects1.length = 0;
gdjs.Level9Code.GDarrowObjects2.length = 0;
gdjs.Level9Code.GDLightObjects1.length = 0;
gdjs.Level9Code.GDLightObjects2.length = 0;
gdjs.Level9Code.GDenemyObjects1.length = 0;
gdjs.Level9Code.GDenemyObjects2.length = 0;

gdjs.Level9Code.eventsList2(runtimeScene);
return;

}

gdjs['Level9Code'] = gdjs.Level9Code;
