gdjs.TutorialCode = {};
gdjs.TutorialCode.GDcreditsObjects1_1final = [];

gdjs.TutorialCode.GDplayerObjects1_1final = [];

gdjs.TutorialCode.GDquitObjects1_1final = [];

gdjs.TutorialCode.GDsecretObjects1_1final = [];

gdjs.TutorialCode.GDstartObjects1_1final = [];

gdjs.TutorialCode.GDplatformObjects1= [];
gdjs.TutorialCode.GDplatformObjects2= [];
gdjs.TutorialCode.GDplayerObjects1= [];
gdjs.TutorialCode.GDplayerObjects2= [];
gdjs.TutorialCode.GDRulesObjects1= [];
gdjs.TutorialCode.GDRulesObjects2= [];
gdjs.TutorialCode.GDstartObjects1= [];
gdjs.TutorialCode.GDstartObjects2= [];
gdjs.TutorialCode.GDquitObjects1= [];
gdjs.TutorialCode.GDquitObjects2= [];
gdjs.TutorialCode.GDcreditsObjects1= [];
gdjs.TutorialCode.GDcreditsObjects2= [];
gdjs.TutorialCode.GDsecretObjects1= [];
gdjs.TutorialCode.GDsecretObjects2= [];
gdjs.TutorialCode.GDloadingObjects1= [];
gdjs.TutorialCode.GDloadingObjects2= [];
gdjs.TutorialCode.GDQuitBufferObjects1= [];
gdjs.TutorialCode.GDQuitBufferObjects2= [];

gdjs.TutorialCode.conditionTrue_0 = {val:false};
gdjs.TutorialCode.condition0IsTrue_0 = {val:false};
gdjs.TutorialCode.condition1IsTrue_0 = {val:false};
gdjs.TutorialCode.condition2IsTrue_0 = {val:false};
gdjs.TutorialCode.condition3IsTrue_0 = {val:false};
gdjs.TutorialCode.condition4IsTrue_0 = {val:false};
gdjs.TutorialCode.conditionTrue_1 = {val:false};
gdjs.TutorialCode.condition0IsTrue_1 = {val:false};
gdjs.TutorialCode.condition1IsTrue_1 = {val:false};
gdjs.TutorialCode.condition2IsTrue_1 = {val:false};
gdjs.TutorialCode.condition3IsTrue_1 = {val:false};
gdjs.TutorialCode.condition4IsTrue_1 = {val:false};


gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.TutorialCode.GDplayerObjects1});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.TutorialCode.GDstartObjects1});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.TutorialCode.GDplayerObjects1});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDquitObjects1Objects = Hashtable.newFrom({"quit": gdjs.TutorialCode.GDquitObjects1});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.TutorialCode.GDplayerObjects1});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDcreditsObjects1Objects = Hashtable.newFrom({"credits": gdjs.TutorialCode.GDcreditsObjects1});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.TutorialCode.GDplayerObjects1});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDsecretObjects1Objects = Hashtable.newFrom({"secret": gdjs.TutorialCode.GDsecretObjects1});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.TutorialCode.GDplayerObjects2});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDcreditsObjects2Objects = Hashtable.newFrom({"credits": gdjs.TutorialCode.GDcreditsObjects2});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.TutorialCode.GDplayerObjects2});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDstartObjects2Objects = Hashtable.newFrom({"start": gdjs.TutorialCode.GDstartObjects2});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.TutorialCode.GDplayerObjects2});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDquitObjects2Objects = Hashtable.newFrom({"quit": gdjs.TutorialCode.GDquitObjects2});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects2Objects = Hashtable.newFrom({"player": gdjs.TutorialCode.GDplayerObjects2});
gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDsecretObjects2Objects = Hashtable.newFrom({"secret": gdjs.TutorialCode.GDsecretObjects2});
gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
gdjs.TutorialCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDplayerObjects1[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("quit"), gdjs.TutorialCode.GDquitObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDplayerObjects1[i].getY() >= 610 ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDplayerObjects1[k] = gdjs.TutorialCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDplayerObjects1.length = k;}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDquitObjects1.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDquitObjects1[i].isVisible()) ) {
        gdjs.TutorialCode.condition1IsTrue_0.val = true;
        gdjs.TutorialCode.GDquitObjects1[k] = gdjs.TutorialCode.GDquitObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDquitObjects1.length = k;}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("credits"), gdjs.TutorialCode.GDcreditsObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDplayerObjects1[i].getY() >= 610 ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDplayerObjects1[k] = gdjs.TutorialCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDplayerObjects1.length = k;}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDcreditsObjects1.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDcreditsObjects1[i].isVisible()) ) {
        gdjs.TutorialCode.condition1IsTrue_0.val = true;
        gdjs.TutorialCode.GDcreditsObjects1[k] = gdjs.TutorialCode.GDcreditsObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDcreditsObjects1.length = k;}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Credits");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.TutorialCode.GDstartObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
gdjs.TutorialCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDstartObjects1.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDstartObjects1[i].isVisible()) ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDstartObjects1[k] = gdjs.TutorialCode.GDstartObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDstartObjects1.length = k;}if ( gdjs.TutorialCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDplayerObjects1[i].getY() >= 610 ) {
        gdjs.TutorialCode.condition1IsTrue_0.val = true;
        gdjs.TutorialCode.GDplayerObjects1[k] = gdjs.TutorialCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDplayerObjects1.length = k;}}
if (gdjs.TutorialCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("secret"), gdjs.TutorialCode.GDsecretObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDsecretObjects1.length;i<l;++i) {
    if ( !(gdjs.TutorialCode.GDsecretObjects1[i].isVisible()) ) {
        gdjs.TutorialCode.condition0IsTrue_0.val = true;
        gdjs.TutorialCode.GDsecretObjects1[k] = gdjs.TutorialCode.GDsecretObjects1[i];
        ++k;
    }
}
gdjs.TutorialCode.GDsecretObjects1.length = k;}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level7");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.TutorialCode.GDstartObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDstartObjects1Objects, false, runtimeScene, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDstartObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDstartObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("quit"), gdjs.TutorialCode.GDquitObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDquitObjects1Objects, false, runtimeScene, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDquitObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDquitObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDquitObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.TutorialCode.GDloadingObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDloadingObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDloadingObjects1[i].setWidth(2 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.TutorialCode.GDQuitBufferObjects1);
{for(var i = 0, len = gdjs.TutorialCode.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDQuitBufferObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("credits"), gdjs.TutorialCode.GDcreditsObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDcreditsObjects1Objects, false, runtimeScene, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDcreditsObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDcreditsObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDcreditsObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("secret"), gdjs.TutorialCode.GDsecretObjects1);

gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
gdjs.TutorialCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects1Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDsecretObjects1Objects, false, runtimeScene, false);
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
/* Reuse gdjs.TutorialCode.GDsecretObjects1 */
{for(var i = 0, len = gdjs.TutorialCode.GDsecretObjects1.length ;i < len;++i) {
    gdjs.TutorialCode.GDsecretObjects1[i].hide();
}
}}

}


{

gdjs.TutorialCode.GDplayerObjects1.length = 0;


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition0IsTrue_0;
gdjs.TutorialCode.GDplayerObjects1_1final.length = 0;gdjs.TutorialCode.condition0IsTrue_1.val = false;
gdjs.TutorialCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDplayerObjects2[i].getX() >= 800 ) {
        gdjs.TutorialCode.condition0IsTrue_1.val = true;
        gdjs.TutorialCode.GDplayerObjects2[k] = gdjs.TutorialCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDplayerObjects2.length = k;if( gdjs.TutorialCode.condition0IsTrue_1.val ) {
    gdjs.TutorialCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.TutorialCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.TutorialCode.GDplayerObjects1_1final.indexOf(gdjs.TutorialCode.GDplayerObjects2[j]) === -1 )
            gdjs.TutorialCode.GDplayerObjects1_1final.push(gdjs.TutorialCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects2);
for(var i = 0, k = 0, l = gdjs.TutorialCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDplayerObjects2[i].getX() <= -(35) ) {
        gdjs.TutorialCode.condition1IsTrue_1.val = true;
        gdjs.TutorialCode.GDplayerObjects2[k] = gdjs.TutorialCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDplayerObjects2.length = k;if( gdjs.TutorialCode.condition1IsTrue_1.val ) {
    gdjs.TutorialCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.TutorialCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.TutorialCode.GDplayerObjects1_1final.indexOf(gdjs.TutorialCode.GDplayerObjects2[j]) === -1 )
            gdjs.TutorialCode.GDplayerObjects1_1final.push(gdjs.TutorialCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.TutorialCode.GDplayerObjects1_1final, gdjs.TutorialCode.GDplayerObjects1);
}
}
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}}

}


{

gdjs.TutorialCode.GDcreditsObjects1.length = 0;

gdjs.TutorialCode.GDplayerObjects1.length = 0;

gdjs.TutorialCode.GDquitObjects1.length = 0;

gdjs.TutorialCode.GDsecretObjects1.length = 0;

gdjs.TutorialCode.GDstartObjects1.length = 0;


gdjs.TutorialCode.condition0IsTrue_0.val = false;
{
{gdjs.TutorialCode.conditionTrue_1 = gdjs.TutorialCode.condition0IsTrue_0;
gdjs.TutorialCode.GDcreditsObjects1_1final.length = 0;gdjs.TutorialCode.GDplayerObjects1_1final.length = 0;gdjs.TutorialCode.GDquitObjects1_1final.length = 0;gdjs.TutorialCode.GDsecretObjects1_1final.length = 0;gdjs.TutorialCode.GDstartObjects1_1final.length = 0;gdjs.TutorialCode.condition0IsTrue_1.val = false;
gdjs.TutorialCode.condition1IsTrue_1.val = false;
gdjs.TutorialCode.condition2IsTrue_1.val = false;
gdjs.TutorialCode.condition3IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("credits"), gdjs.TutorialCode.GDcreditsObjects2);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects2);
gdjs.TutorialCode.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects2Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDcreditsObjects2Objects, false, runtimeScene, false);
if( gdjs.TutorialCode.condition0IsTrue_1.val ) {
    gdjs.TutorialCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.TutorialCode.GDcreditsObjects2.length;j<jLen;++j) {
        if ( gdjs.TutorialCode.GDcreditsObjects1_1final.indexOf(gdjs.TutorialCode.GDcreditsObjects2[j]) === -1 )
            gdjs.TutorialCode.GDcreditsObjects1_1final.push(gdjs.TutorialCode.GDcreditsObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.TutorialCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.TutorialCode.GDplayerObjects1_1final.indexOf(gdjs.TutorialCode.GDplayerObjects2[j]) === -1 )
            gdjs.TutorialCode.GDplayerObjects1_1final.push(gdjs.TutorialCode.GDplayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.TutorialCode.GDstartObjects2);
gdjs.TutorialCode.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects2Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDstartObjects2Objects, false, runtimeScene, false);
if( gdjs.TutorialCode.condition1IsTrue_1.val ) {
    gdjs.TutorialCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.TutorialCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.TutorialCode.GDplayerObjects1_1final.indexOf(gdjs.TutorialCode.GDplayerObjects2[j]) === -1 )
            gdjs.TutorialCode.GDplayerObjects1_1final.push(gdjs.TutorialCode.GDplayerObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.TutorialCode.GDstartObjects2.length;j<jLen;++j) {
        if ( gdjs.TutorialCode.GDstartObjects1_1final.indexOf(gdjs.TutorialCode.GDstartObjects2[j]) === -1 )
            gdjs.TutorialCode.GDstartObjects1_1final.push(gdjs.TutorialCode.GDstartObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("quit"), gdjs.TutorialCode.GDquitObjects2);
gdjs.TutorialCode.condition2IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects2Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDquitObjects2Objects, false, runtimeScene, false);
if( gdjs.TutorialCode.condition2IsTrue_1.val ) {
    gdjs.TutorialCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.TutorialCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.TutorialCode.GDplayerObjects1_1final.indexOf(gdjs.TutorialCode.GDplayerObjects2[j]) === -1 )
            gdjs.TutorialCode.GDplayerObjects1_1final.push(gdjs.TutorialCode.GDplayerObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.TutorialCode.GDquitObjects2.length;j<jLen;++j) {
        if ( gdjs.TutorialCode.GDquitObjects1_1final.indexOf(gdjs.TutorialCode.GDquitObjects2[j]) === -1 )
            gdjs.TutorialCode.GDquitObjects1_1final.push(gdjs.TutorialCode.GDquitObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.TutorialCode.GDplayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("secret"), gdjs.TutorialCode.GDsecretObjects2);
gdjs.TutorialCode.condition3IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDplayerObjects2Objects, gdjs.TutorialCode.mapOfGDgdjs_46TutorialCode_46GDsecretObjects2Objects, false, runtimeScene, false);
if( gdjs.TutorialCode.condition3IsTrue_1.val ) {
    gdjs.TutorialCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.TutorialCode.GDplayerObjects2.length;j<jLen;++j) {
        if ( gdjs.TutorialCode.GDplayerObjects1_1final.indexOf(gdjs.TutorialCode.GDplayerObjects2[j]) === -1 )
            gdjs.TutorialCode.GDplayerObjects1_1final.push(gdjs.TutorialCode.GDplayerObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.TutorialCode.GDsecretObjects2.length;j<jLen;++j) {
        if ( gdjs.TutorialCode.GDsecretObjects1_1final.indexOf(gdjs.TutorialCode.GDsecretObjects2[j]) === -1 )
            gdjs.TutorialCode.GDsecretObjects1_1final.push(gdjs.TutorialCode.GDsecretObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.TutorialCode.GDcreditsObjects1_1final, gdjs.TutorialCode.GDcreditsObjects1);
gdjs.copyArray(gdjs.TutorialCode.GDplayerObjects1_1final, gdjs.TutorialCode.GDplayerObjects1);
gdjs.copyArray(gdjs.TutorialCode.GDquitObjects1_1final, gdjs.TutorialCode.GDquitObjects1);
gdjs.copyArray(gdjs.TutorialCode.GDsecretObjects1_1final, gdjs.TutorialCode.GDsecretObjects1);
gdjs.copyArray(gdjs.TutorialCode.GDstartObjects1_1final, gdjs.TutorialCode.GDstartObjects1);
}
}
}if (gdjs.TutorialCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}}

}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDplatformObjects1.length = 0;
gdjs.TutorialCode.GDplatformObjects2.length = 0;
gdjs.TutorialCode.GDplayerObjects1.length = 0;
gdjs.TutorialCode.GDplayerObjects2.length = 0;
gdjs.TutorialCode.GDRulesObjects1.length = 0;
gdjs.TutorialCode.GDRulesObjects2.length = 0;
gdjs.TutorialCode.GDstartObjects1.length = 0;
gdjs.TutorialCode.GDstartObjects2.length = 0;
gdjs.TutorialCode.GDquitObjects1.length = 0;
gdjs.TutorialCode.GDquitObjects2.length = 0;
gdjs.TutorialCode.GDcreditsObjects1.length = 0;
gdjs.TutorialCode.GDcreditsObjects2.length = 0;
gdjs.TutorialCode.GDsecretObjects1.length = 0;
gdjs.TutorialCode.GDsecretObjects2.length = 0;
gdjs.TutorialCode.GDloadingObjects1.length = 0;
gdjs.TutorialCode.GDloadingObjects2.length = 0;
gdjs.TutorialCode.GDQuitBufferObjects1.length = 0;
gdjs.TutorialCode.GDQuitBufferObjects2.length = 0;

gdjs.TutorialCode.eventsList0(runtimeScene);

return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
