gdjs.Level8Code = {};
gdjs.Level8Code.GDplayerObjects1_1final = [];

gdjs.Level8Code.GDplatformObjects1= [];
gdjs.Level8Code.GDplatformObjects2= [];
gdjs.Level8Code.GDplayerObjects1= [];
gdjs.Level8Code.GDplayerObjects2= [];
gdjs.Level8Code.GDRulesObjects1= [];
gdjs.Level8Code.GDRulesObjects2= [];
gdjs.Level8Code.GDloadingObjects1= [];
gdjs.Level8Code.GDloadingObjects2= [];
gdjs.Level8Code.GDQuitBufferObjects1= [];
gdjs.Level8Code.GDQuitBufferObjects2= [];
gdjs.Level8Code.GDfinishObjects1= [];
gdjs.Level8Code.GDfinishObjects2= [];
gdjs.Level8Code.GDenemyObjects1= [];
gdjs.Level8Code.GDenemyObjects2= [];
gdjs.Level8Code.GDplatform2Objects1= [];
gdjs.Level8Code.GDplatform2Objects2= [];
gdjs.Level8Code.GDColliderObjects1= [];
gdjs.Level8Code.GDColliderObjects2= [];
gdjs.Level8Code.GDCollider2Objects1= [];
gdjs.Level8Code.GDCollider2Objects2= [];

gdjs.Level8Code.conditionTrue_0 = {val:false};
gdjs.Level8Code.condition0IsTrue_0 = {val:false};
gdjs.Level8Code.condition1IsTrue_0 = {val:false};
gdjs.Level8Code.condition2IsTrue_0 = {val:false};
gdjs.Level8Code.condition3IsTrue_0 = {val:false};
gdjs.Level8Code.condition4IsTrue_0 = {val:false};
gdjs.Level8Code.conditionTrue_1 = {val:false};
gdjs.Level8Code.condition0IsTrue_1 = {val:false};
gdjs.Level8Code.condition1IsTrue_1 = {val:false};
gdjs.Level8Code.condition2IsTrue_1 = {val:false};
gdjs.Level8Code.condition3IsTrue_1 = {val:false};
gdjs.Level8Code.condition4IsTrue_1 = {val:false};


gdjs.Level8Code.asyncCallback10516332 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level8Code.GDQuitBufferObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Level8Code.GDQuitBufferObjects2.length ;i < len;++i) {
    gdjs.Level8Code.GDQuitBufferObjects2[i].hide();
}
}}
gdjs.Level8Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Level8Code.asyncCallback10516332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level8Code.GDplayerObjects1});
gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDfinishObjects1Objects = Hashtable.newFrom({"finish": gdjs.Level8Code.GDfinishObjects1});
gdjs.Level8Code.asyncCallback10517668 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level9");
}}
gdjs.Level8Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Level8Code.asyncCallback10517668(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level8Code.GDplayerObjects1});
gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplatformObjects1Objects = Hashtable.newFrom({"platform": gdjs.Level8Code.GDplatformObjects1});
gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level8Code.GDplayerObjects1});
gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplatform2Objects1Objects = Hashtable.newFrom({"platform2": gdjs.Level8Code.GDplatform2Objects1});
gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDCollider2Objects1Objects = Hashtable.newFrom({"Collider2": gdjs.Level8Code.GDCollider2Objects1});
gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level8Code.GDplayerObjects1});
gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level8Code.GDplayerObjects1});
gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Level8Code.GDenemyObjects1});
gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level8Code.GDplayerObjects1});
gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplatform2Objects1Objects = Hashtable.newFrom({"platform2": gdjs.Level8Code.GDplatform2Objects1});
gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level8Code.GDplayerObjects1});
gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplatformObjects1Objects = Hashtable.newFrom({"platform": gdjs.Level8Code.GDplatformObjects1});
gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level8Code.GDplayerObjects1});
gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDColliderObjects1Objects = Hashtable.newFrom({"Collider": gdjs.Level8Code.GDColliderObjects1});
gdjs.Level8Code.asyncCallback10521324 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("platform"), gdjs.Level8Code.GDplatformObjects2);
gdjs.copyArray(runtimeScene.getObjects("platform2"), gdjs.Level8Code.GDplatform2Objects2);
gdjs.copyArray(asyncObjectsList.getObjects("player"), gdjs.Level8Code.GDplayerObjects2);

{for(var i = 0, len = gdjs.Level8Code.GDplatformObjects2.length ;i < len;++i) {
    gdjs.Level8Code.GDplatformObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level8Code.GDplatform2Objects2.length ;i < len;++i) {
    gdjs.Level8Code.GDplatform2Objects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level8Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.Level8Code.GDplayerObjects2[i].setPosition(382.5,299);
}
}{for(var i = 0, len = gdjs.Level8Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.Level8Code.GDplayerObjects2[i].getBehavior("PlatformerObject").setCurrentFallSpeed(0);
}
}}
gdjs.Level8Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.Level8Code.GDplayerObjects1) asyncObjectsList.addObject("player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.Level8Code.asyncCallback10521324(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level8Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level8Code.condition0IsTrue_0.val = false;
{
gdjs.Level8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.Level8Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level8", false);
}}

}


{


gdjs.Level8Code.condition0IsTrue_0.val = false;
{
gdjs.Level8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level8Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level8Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level8Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


gdjs.Level8Code.condition0IsTrue_0.val = false;
{
gdjs.Level8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level8Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level8Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level8Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


gdjs.Level8Code.condition0IsTrue_0.val = false;
{
gdjs.Level8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level8Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level8Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level8Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.Level8Code.GDplayerObjects1.length = 0;


gdjs.Level8Code.condition0IsTrue_0.val = false;
{
{gdjs.Level8Code.conditionTrue_1 = gdjs.Level8Code.condition0IsTrue_0;
gdjs.Level8Code.GDplayerObjects1_1final.length = 0;gdjs.Level8Code.condition0IsTrue_1.val = false;
gdjs.Level8Code.condition1IsTrue_1.val = false;
gdjs.Level8Code.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level8Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level8Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level8Code.GDplayerObjects2[i].getY() >= 620 ) {
        gdjs.Level8Code.condition0IsTrue_1.val = true;
        gdjs.Level8Code.GDplayerObjects2[k] = gdjs.Level8Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level8Code.GDplayerObjects2.length = k;if( gdjs.Level8Code.condition0IsTrue_1.val ) {
    gdjs.Level8Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level8Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level8Code.GDplayerObjects1_1final.indexOf(gdjs.Level8Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level8Code.GDplayerObjects1_1final.push(gdjs.Level8Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level8Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level8Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level8Code.GDplayerObjects2[i].getX() >= 800 ) {
        gdjs.Level8Code.condition1IsTrue_1.val = true;
        gdjs.Level8Code.GDplayerObjects2[k] = gdjs.Level8Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level8Code.GDplayerObjects2.length = k;if( gdjs.Level8Code.condition1IsTrue_1.val ) {
    gdjs.Level8Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level8Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level8Code.GDplayerObjects1_1final.indexOf(gdjs.Level8Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level8Code.GDplayerObjects1_1final.push(gdjs.Level8Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level8Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level8Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level8Code.GDplayerObjects2[i].getX() <= -(35) ) {
        gdjs.Level8Code.condition2IsTrue_1.val = true;
        gdjs.Level8Code.GDplayerObjects2[k] = gdjs.Level8Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level8Code.GDplayerObjects2.length = k;if( gdjs.Level8Code.condition2IsTrue_1.val ) {
    gdjs.Level8Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level8Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level8Code.GDplayerObjects1_1final.indexOf(gdjs.Level8Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level8Code.GDplayerObjects1_1final.push(gdjs.Level8Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level8Code.GDplayerObjects1_1final, gdjs.Level8Code.GDplayerObjects1);
}
}
}if (gdjs.Level8Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level8", false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.Level8Code.GDloadingObjects1);
{for(var i = 0, len = gdjs.Level8Code.GDloadingObjects1.length ;i < len;++i) {
    gdjs.Level8Code.GDloadingObjects1[i].setWidth(2 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.Level8Code.condition0IsTrue_0.val = false;
{
gdjs.Level8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level8Code.GDQuitBufferObjects1);
{for(var i = 0, len = gdjs.Level8Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level8Code.GDQuitBufferObjects1[i].hide();
}
}}

}


{


gdjs.Level8Code.condition0IsTrue_0.val = false;
{
gdjs.Level8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 50;
}if (gdjs.Level8Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Tutorial");
}}

}


{


gdjs.Level8Code.condition0IsTrue_0.val = false;
{
gdjs.Level8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Level8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level8Code.GDQuitBufferObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level8Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level8Code.GDQuitBufferObjects1[i].hide(false);
}
}}

}


{


gdjs.Level8Code.condition0IsTrue_0.val = false;
{
gdjs.Level8Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Level8Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level8Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Level8Code.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level8Code.GDplayerObjects1);

gdjs.Level8Code.condition0IsTrue_0.val = false;
gdjs.Level8Code.condition1IsTrue_0.val = false;
{
gdjs.Level8Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects, gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDfinishObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level8Code.condition0IsTrue_0.val ) {
{
gdjs.Level8Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.Level8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level8Code.GDfinishObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.Level8Code.GDfinishObjects1.length ;i < len;++i) {
    gdjs.Level8Code.GDfinishObjects1[i].hide();
}
}
{ //Subevents
gdjs.Level8Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collider2"), gdjs.Level8Code.GDCollider2Objects1);
gdjs.copyArray(runtimeScene.getObjects("platform"), gdjs.Level8Code.GDplatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("platform2"), gdjs.Level8Code.GDplatform2Objects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level8Code.GDplayerObjects1);

gdjs.Level8Code.condition0IsTrue_0.val = false;
gdjs.Level8Code.condition1IsTrue_0.val = false;
gdjs.Level8Code.condition2IsTrue_0.val = false;
gdjs.Level8Code.condition3IsTrue_0.val = false;
{
gdjs.Level8Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects, gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplatformObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level8Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level8Code.GDplatformObjects1.length;i<l;++i) {
    if ( gdjs.Level8Code.GDplatformObjects1[i].isVisible() ) {
        gdjs.Level8Code.condition1IsTrue_0.val = true;
        gdjs.Level8Code.GDplatformObjects1[k] = gdjs.Level8Code.GDplatformObjects1[i];
        ++k;
    }
}
gdjs.Level8Code.GDplatformObjects1.length = k;}if ( gdjs.Level8Code.condition1IsTrue_0.val ) {
{
gdjs.Level8Code.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects, gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplatform2Objects1Objects, true, runtimeScene, false);
}if ( gdjs.Level8Code.condition2IsTrue_0.val ) {
{
gdjs.Level8Code.condition3IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDCollider2Objects1Objects, gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects, true, runtimeScene, false);
}}
}
}
if (gdjs.Level8Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Level8Code.GDplatformObjects1 */
{for(var i = 0, len = gdjs.Level8Code.GDplatformObjects1.length ;i < len;++i) {
    gdjs.Level8Code.GDplatformObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level8Code.GDplatformObjects1.length ;i < len;++i) {
    gdjs.Level8Code.GDplatformObjects1[i].activateBehavior("Platform", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Level8Code.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level8Code.GDplayerObjects1);

gdjs.Level8Code.condition0IsTrue_0.val = false;
{
gdjs.Level8Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects, gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDenemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level8Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level8", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("platform"), gdjs.Level8Code.GDplatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("platform2"), gdjs.Level8Code.GDplatform2Objects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level8Code.GDplayerObjects1);

gdjs.Level8Code.condition0IsTrue_0.val = false;
gdjs.Level8Code.condition1IsTrue_0.val = false;
gdjs.Level8Code.condition2IsTrue_0.val = false;
{
gdjs.Level8Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects, gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplatform2Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Level8Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Level8Code.GDplatform2Objects1.length;i<l;++i) {
    if ( gdjs.Level8Code.GDplatform2Objects1[i].isVisible() ) {
        gdjs.Level8Code.condition1IsTrue_0.val = true;
        gdjs.Level8Code.GDplatform2Objects1[k] = gdjs.Level8Code.GDplatform2Objects1[i];
        ++k;
    }
}
gdjs.Level8Code.GDplatform2Objects1.length = k;}if ( gdjs.Level8Code.condition1IsTrue_0.val ) {
{
gdjs.Level8Code.condition2IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects, gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplatformObjects1Objects, true, runtimeScene, false);
}}
}
if (gdjs.Level8Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level8Code.GDplatform2Objects1 */
{for(var i = 0, len = gdjs.Level8Code.GDplatform2Objects1.length ;i < len;++i) {
    gdjs.Level8Code.GDplatform2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level8Code.GDplatform2Objects1.length ;i < len;++i) {
    gdjs.Level8Code.GDplatform2Objects1[i].activateBehavior("Platform", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Collider"), gdjs.Level8Code.GDColliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level8Code.GDplayerObjects1);

gdjs.Level8Code.condition0IsTrue_0.val = false;
{
gdjs.Level8Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDplayerObjects1Objects, gdjs.Level8Code.mapOfGDgdjs_46Level8Code_46GDColliderObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level8Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level8Code.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Level8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level8Code.GDplatformObjects1.length = 0;
gdjs.Level8Code.GDplatformObjects2.length = 0;
gdjs.Level8Code.GDplayerObjects1.length = 0;
gdjs.Level8Code.GDplayerObjects2.length = 0;
gdjs.Level8Code.GDRulesObjects1.length = 0;
gdjs.Level8Code.GDRulesObjects2.length = 0;
gdjs.Level8Code.GDloadingObjects1.length = 0;
gdjs.Level8Code.GDloadingObjects2.length = 0;
gdjs.Level8Code.GDQuitBufferObjects1.length = 0;
gdjs.Level8Code.GDQuitBufferObjects2.length = 0;
gdjs.Level8Code.GDfinishObjects1.length = 0;
gdjs.Level8Code.GDfinishObjects2.length = 0;
gdjs.Level8Code.GDenemyObjects1.length = 0;
gdjs.Level8Code.GDenemyObjects2.length = 0;
gdjs.Level8Code.GDplatform2Objects1.length = 0;
gdjs.Level8Code.GDplatform2Objects2.length = 0;
gdjs.Level8Code.GDColliderObjects1.length = 0;
gdjs.Level8Code.GDColliderObjects2.length = 0;
gdjs.Level8Code.GDCollider2Objects1.length = 0;
gdjs.Level8Code.GDCollider2Objects2.length = 0;

gdjs.Level8Code.eventsList3(runtimeScene);

return;

}

gdjs['Level8Code'] = gdjs.Level8Code;
