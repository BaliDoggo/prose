gdjs.Level10Code = {};
gdjs.Level10Code.GDplayerObjects1_1final = [];

gdjs.Level10Code.GDplatformObjects1= [];
gdjs.Level10Code.GDplatformObjects2= [];
gdjs.Level10Code.GDplatform5Objects1= [];
gdjs.Level10Code.GDplatform5Objects2= [];
gdjs.Level10Code.GDplatform4Objects1= [];
gdjs.Level10Code.GDplatform4Objects2= [];
gdjs.Level10Code.GDplatform3Objects1= [];
gdjs.Level10Code.GDplatform3Objects2= [];
gdjs.Level10Code.GDplatform2Objects1= [];
gdjs.Level10Code.GDplatform2Objects2= [];
gdjs.Level10Code.GDplayerObjects1= [];
gdjs.Level10Code.GDplayerObjects2= [];
gdjs.Level10Code.GDRulesObjects1= [];
gdjs.Level10Code.GDRulesObjects2= [];
gdjs.Level10Code.GDloadingObjects1= [];
gdjs.Level10Code.GDloadingObjects2= [];
gdjs.Level10Code.GDQuitBufferObjects1= [];
gdjs.Level10Code.GDQuitBufferObjects2= [];
gdjs.Level10Code.GDfinishObjects1= [];
gdjs.Level10Code.GDfinishObjects2= [];
gdjs.Level10Code.GDplayerxObjects1= [];
gdjs.Level10Code.GDplayerxObjects2= [];
gdjs.Level10Code.GDenemyObjects1= [];
gdjs.Level10Code.GDenemyObjects2= [];

gdjs.Level10Code.conditionTrue_0 = {val:false};
gdjs.Level10Code.condition0IsTrue_0 = {val:false};
gdjs.Level10Code.condition1IsTrue_0 = {val:false};
gdjs.Level10Code.condition2IsTrue_0 = {val:false};
gdjs.Level10Code.condition3IsTrue_0 = {val:false};
gdjs.Level10Code.conditionTrue_1 = {val:false};
gdjs.Level10Code.condition0IsTrue_1 = {val:false};
gdjs.Level10Code.condition1IsTrue_1 = {val:false};
gdjs.Level10Code.condition2IsTrue_1 = {val:false};
gdjs.Level10Code.condition3IsTrue_1 = {val:false};


gdjs.Level10Code.asyncCallback10523804 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level10Code.GDQuitBufferObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.Level10Code.GDQuitBufferObjects2.length ;i < len;++i) {
    gdjs.Level10Code.GDQuitBufferObjects2[i].hide();
}
}}
gdjs.Level10Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Level10Code.asyncCallback10523804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level10Code.GDplayerObjects1});
gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDfinishObjects1Objects = Hashtable.newFrom({"finish": gdjs.Level10Code.GDfinishObjects1});
gdjs.Level10Code.asyncCallback10524980 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "End");
}}
gdjs.Level10Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Level10Code.asyncCallback10524980(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.Level10Code.GDplayerObjects1});
gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDenemyObjects1Objects = Hashtable.newFrom({"enemy": gdjs.Level10Code.GDenemyObjects1});
gdjs.Level10Code.eventsList2 = function(runtimeScene) {

{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level10", false);
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level10Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level10Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level10Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("platform"), gdjs.Level10Code.GDplatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("platform2"), gdjs.Level10Code.GDplatform2Objects1);
gdjs.copyArray(runtimeScene.getObjects("platform3"), gdjs.Level10Code.GDplatform3Objects1);
gdjs.copyArray(runtimeScene.getObjects("platform4"), gdjs.Level10Code.GDplatform4Objects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level10Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level10Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level10Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{for(var i = 0, len = gdjs.Level10Code.GDplatformObjects1.length ;i < len;++i) {
    gdjs.Level10Code.GDplatformObjects1[i].getBehavior("Tween").addObjectPositionXTween("demerge", 1, "linear", 100, false);
}
}{for(var i = 0, len = gdjs.Level10Code.GDplatform2Objects1.length ;i < len;++i) {
    gdjs.Level10Code.GDplatform2Objects1[i].getBehavior("Tween").addObjectPositionXTween("demerge", 200, "linear", 100, false);
}
}{for(var i = 0, len = gdjs.Level10Code.GDplatform3Objects1.length ;i < len;++i) {
    gdjs.Level10Code.GDplatform3Objects1[i].getBehavior("Tween").addObjectPositionXTween("demerge", 407, "linear", 100, false);
}
}{for(var i = 0, len = gdjs.Level10Code.GDplatform4Objects1.length ;i < len;++i) {
    gdjs.Level10Code.GDplatform4Objects1[i].getBehavior("Tween").addObjectPositionXTween("demerge", 635, "linear", 100, false);
}
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level10Code.GDplayerObjects1);
{for(var i = 0, len = gdjs.Level10Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level10Code.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.Level10Code.GDplayerObjects1.length = 0;


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
{gdjs.Level10Code.conditionTrue_1 = gdjs.Level10Code.condition0IsTrue_0;
gdjs.Level10Code.GDplayerObjects1_1final.length = 0;gdjs.Level10Code.condition0IsTrue_1.val = false;
gdjs.Level10Code.condition1IsTrue_1.val = false;
gdjs.Level10Code.condition2IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level10Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level10Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level10Code.GDplayerObjects2[i].getY() >= 620 ) {
        gdjs.Level10Code.condition0IsTrue_1.val = true;
        gdjs.Level10Code.GDplayerObjects2[k] = gdjs.Level10Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level10Code.GDplayerObjects2.length = k;if( gdjs.Level10Code.condition0IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level10Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level10Code.GDplayerObjects1_1final.indexOf(gdjs.Level10Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level10Code.GDplayerObjects1_1final.push(gdjs.Level10Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level10Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level10Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level10Code.GDplayerObjects2[i].getX() >= 800 ) {
        gdjs.Level10Code.condition1IsTrue_1.val = true;
        gdjs.Level10Code.GDplayerObjects2[k] = gdjs.Level10Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level10Code.GDplayerObjects2.length = k;if( gdjs.Level10Code.condition1IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level10Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level10Code.GDplayerObjects1_1final.indexOf(gdjs.Level10Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level10Code.GDplayerObjects1_1final.push(gdjs.Level10Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level10Code.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.Level10Code.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.Level10Code.GDplayerObjects2[i].getX() <= -(35) ) {
        gdjs.Level10Code.condition2IsTrue_1.val = true;
        gdjs.Level10Code.GDplayerObjects2[k] = gdjs.Level10Code.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.Level10Code.GDplayerObjects2.length = k;if( gdjs.Level10Code.condition2IsTrue_1.val ) {
    gdjs.Level10Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Level10Code.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.Level10Code.GDplayerObjects1_1final.indexOf(gdjs.Level10Code.GDplayerObjects2[j]) === -1 )
            gdjs.Level10Code.GDplayerObjects1_1final.push(gdjs.Level10Code.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level10Code.GDplayerObjects1_1final, gdjs.Level10Code.GDplayerObjects1);
}
}
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level10", false);
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up"));
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.Level10Code.GDloadingObjects1);
gdjs.copyArray(runtimeScene.getObjects("platform"), gdjs.Level10Code.GDplatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("platform2"), gdjs.Level10Code.GDplatform2Objects1);
gdjs.copyArray(runtimeScene.getObjects("platform3"), gdjs.Level10Code.GDplatform3Objects1);
gdjs.copyArray(runtimeScene.getObjects("platform4"), gdjs.Level10Code.GDplatform4Objects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level10Code.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("playerx"), gdjs.Level10Code.GDplayerxObjects1);
{for(var i = 0, len = gdjs.Level10Code.GDloadingObjects1.length ;i < len;++i) {
    gdjs.Level10Code.GDloadingObjects1[i].setWidth(2 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Level10Code.GDplayerxObjects1.length ;i < len;++i) {
    gdjs.Level10Code.GDplayerxObjects1[i].setX((( gdjs.Level10Code.GDplayerObjects1.length === 0 ) ? 0 :gdjs.Level10Code.GDplayerObjects1[0].getPointX("")));
}
}{for(var i = 0, len = gdjs.Level10Code.GDplatformObjects1.length ;i < len;++i) {
    gdjs.Level10Code.GDplatformObjects1[i].getBehavior("Tween").addObjectPositionXTween("merge", (( gdjs.Level10Code.GDplayerxObjects1.length === 0 ) ? 0 :gdjs.Level10Code.GDplayerxObjects1[0].getPointX("")) - 65, "linear", 100, false);
}
}{for(var i = 0, len = gdjs.Level10Code.GDplatform2Objects1.length ;i < len;++i) {
    gdjs.Level10Code.GDplatform2Objects1[i].getBehavior("Tween").addObjectPositionXTween("merge", (( gdjs.Level10Code.GDplayerxObjects1.length === 0 ) ? 0 :gdjs.Level10Code.GDplayerxObjects1[0].getPointX("")) - 65, "linear", 100, false);
}
}{for(var i = 0, len = gdjs.Level10Code.GDplatform3Objects1.length ;i < len;++i) {
    gdjs.Level10Code.GDplatform3Objects1[i].getBehavior("Tween").addObjectPositionXTween("merge", (( gdjs.Level10Code.GDplayerxObjects1.length === 0 ) ? 0 :gdjs.Level10Code.GDplayerxObjects1[0].getPointX("")) - 65, "linear", 100, false);
}
}{for(var i = 0, len = gdjs.Level10Code.GDplatform4Objects1.length ;i < len;++i) {
    gdjs.Level10Code.GDplatform4Objects1[i].getBehavior("Tween").addObjectPositionXTween("merge", (( gdjs.Level10Code.GDplayerxObjects1.length === 0 ) ? 0 :gdjs.Level10Code.GDplayerxObjects1[0].getPointX("")) - 65, "linear", 100, false);
}
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level10Code.GDQuitBufferObjects1);
{for(var i = 0, len = gdjs.Level10Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level10Code.GDQuitBufferObjects1[i].hide();
}
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 50;
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Tutorial");
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.Level10Code.GDQuitBufferObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level10Code.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.Level10Code.GDQuitBufferObjects1[i].hide(false);
}
}}

}


{


gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.Level10Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level10Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Level10Code.GDfinishObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level10Code.GDplayerObjects1);

gdjs.Level10Code.condition0IsTrue_0.val = false;
gdjs.Level10Code.condition1IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDplayerObjects1Objects, gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDfinishObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Level10Code.condition0IsTrue_0.val ) {
{
gdjs.Level10Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.Level10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level10Code.GDfinishObjects1 */
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.Level10Code.GDfinishObjects1.length ;i < len;++i) {
    gdjs.Level10Code.GDfinishObjects1[i].hide();
}
}
{ //Subevents
gdjs.Level10Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Level10Code.GDfinishObjects1);

gdjs.Level10Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level10Code.GDfinishObjects1.length;i<l;++i) {
    if ( gdjs.Level10Code.GDfinishObjects1[i].getX() == 0 ) {
        gdjs.Level10Code.condition0IsTrue_0.val = true;
        gdjs.Level10Code.GDfinishObjects1[k] = gdjs.Level10Code.GDfinishObjects1[i];
        ++k;
    }
}
gdjs.Level10Code.GDfinishObjects1.length = k;}if (gdjs.Level10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level10Code.GDfinishObjects1 */
{for(var i = 0, len = gdjs.Level10Code.GDfinishObjects1.length ;i < len;++i) {
    gdjs.Level10Code.GDfinishObjects1[i].getBehavior("Tween").addObjectPositionXTween("moveL", 765, "linear", 1200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("finish"), gdjs.Level10Code.GDfinishObjects1);

gdjs.Level10Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level10Code.GDfinishObjects1.length;i<l;++i) {
    if ( gdjs.Level10Code.GDfinishObjects1[i].getX() == 765 ) {
        gdjs.Level10Code.condition0IsTrue_0.val = true;
        gdjs.Level10Code.GDfinishObjects1[k] = gdjs.Level10Code.GDfinishObjects1[i];
        ++k;
    }
}
gdjs.Level10Code.GDfinishObjects1.length = k;}if (gdjs.Level10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level10Code.GDfinishObjects1 */
{for(var i = 0, len = gdjs.Level10Code.GDfinishObjects1.length ;i < len;++i) {
    gdjs.Level10Code.GDfinishObjects1[i].getBehavior("Tween").addObjectPositionXTween("moveR", 0, "linear", 1200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Level10Code.GDenemyObjects1);

gdjs.Level10Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level10Code.GDenemyObjects1.length;i<l;++i) {
    if ( gdjs.Level10Code.GDenemyObjects1[i].getX() == 0 ) {
        gdjs.Level10Code.condition0IsTrue_0.val = true;
        gdjs.Level10Code.GDenemyObjects1[k] = gdjs.Level10Code.GDenemyObjects1[i];
        ++k;
    }
}
gdjs.Level10Code.GDenemyObjects1.length = k;}if (gdjs.Level10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level10Code.GDenemyObjects1 */
{for(var i = 0, len = gdjs.Level10Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level10Code.GDenemyObjects1[i].getBehavior("Tween").addObjectPositionXTween("moveR", 765, "linear", 1200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Level10Code.GDenemyObjects1);

gdjs.Level10Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level10Code.GDenemyObjects1.length;i<l;++i) {
    if ( gdjs.Level10Code.GDenemyObjects1[i].getX() == 765 ) {
        gdjs.Level10Code.condition0IsTrue_0.val = true;
        gdjs.Level10Code.GDenemyObjects1[k] = gdjs.Level10Code.GDenemyObjects1[i];
        ++k;
    }
}
gdjs.Level10Code.GDenemyObjects1.length = k;}if (gdjs.Level10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level10Code.GDenemyObjects1 */
{for(var i = 0, len = gdjs.Level10Code.GDenemyObjects1.length ;i < len;++i) {
    gdjs.Level10Code.GDenemyObjects1[i].getBehavior("Tween").addObjectPositionXTween("moveL", 0, "linear", 1200, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enemy"), gdjs.Level10Code.GDenemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.Level10Code.GDplayerObjects1);

gdjs.Level10Code.condition0IsTrue_0.val = false;
{
gdjs.Level10Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDplayerObjects1Objects, gdjs.Level10Code.mapOfGDgdjs_46Level10Code_46GDenemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level10", false);
}}

}


};

gdjs.Level10Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level10Code.GDplatformObjects1.length = 0;
gdjs.Level10Code.GDplatformObjects2.length = 0;
gdjs.Level10Code.GDplatform5Objects1.length = 0;
gdjs.Level10Code.GDplatform5Objects2.length = 0;
gdjs.Level10Code.GDplatform4Objects1.length = 0;
gdjs.Level10Code.GDplatform4Objects2.length = 0;
gdjs.Level10Code.GDplatform3Objects1.length = 0;
gdjs.Level10Code.GDplatform3Objects2.length = 0;
gdjs.Level10Code.GDplatform2Objects1.length = 0;
gdjs.Level10Code.GDplatform2Objects2.length = 0;
gdjs.Level10Code.GDplayerObjects1.length = 0;
gdjs.Level10Code.GDplayerObjects2.length = 0;
gdjs.Level10Code.GDRulesObjects1.length = 0;
gdjs.Level10Code.GDRulesObjects2.length = 0;
gdjs.Level10Code.GDloadingObjects1.length = 0;
gdjs.Level10Code.GDloadingObjects2.length = 0;
gdjs.Level10Code.GDQuitBufferObjects1.length = 0;
gdjs.Level10Code.GDQuitBufferObjects2.length = 0;
gdjs.Level10Code.GDfinishObjects1.length = 0;
gdjs.Level10Code.GDfinishObjects2.length = 0;
gdjs.Level10Code.GDplayerxObjects1.length = 0;
gdjs.Level10Code.GDplayerxObjects2.length = 0;
gdjs.Level10Code.GDenemyObjects1.length = 0;
gdjs.Level10Code.GDenemyObjects2.length = 0;

gdjs.Level10Code.eventsList2(runtimeScene);
return;

}

gdjs['Level10Code'] = gdjs.Level10Code;
