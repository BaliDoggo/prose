gdjs.EndCode = {};
gdjs.EndCode.GDThanksObjects1= [];
gdjs.EndCode.GDThanksObjects2= [];
gdjs.EndCode.GDthanks2Objects1= [];
gdjs.EndCode.GDthanks2Objects2= [];
gdjs.EndCode.GDloadingObjects1= [];
gdjs.EndCode.GDloadingObjects2= [];
gdjs.EndCode.GDQuitBufferObjects1= [];
gdjs.EndCode.GDQuitBufferObjects2= [];

gdjs.EndCode.conditionTrue_0 = {val:false};
gdjs.EndCode.condition0IsTrue_0 = {val:false};
gdjs.EndCode.condition1IsTrue_0 = {val:false};
gdjs.EndCode.condition2IsTrue_0 = {val:false};


gdjs.EndCode.asyncCallback10639460 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level3");
}}
gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.EndCode.asyncCallback10639460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndCode.asyncCallback10640860 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.EndCode.GDQuitBufferObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.EndCode.GDQuitBufferObjects2.length ;i < len;++i) {
    gdjs.EndCode.GDQuitBufferObjects2[i].hide();
}
}}
gdjs.EndCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.EndCode.asyncCallback10640860(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndCode.eventsList2 = function(runtimeScene) {

{


gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
{
/* Unknown object - skipped. */}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
gdjs.EndCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Finish")) == 0;
}}
if (gdjs.EndCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("Finish").setNumber(1);
}{/* Unknown object - skipped. */}
{ //Subevents
gdjs.EndCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.EndCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EndCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.EndCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.EndCode.GDQuitBufferObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.EndCode.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDQuitBufferObjects1[i].hide(false);
}
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 50;
}if (gdjs.EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Tutorial");
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.EndCode.GDQuitBufferObjects1);
{for(var i = 0, len = gdjs.EndCode.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDQuitBufferObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.EndCode.GDloadingObjects1);
{for(var i = 0, len = gdjs.EndCode.GDloadingObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDloadingObjects1[i].setWidth(2 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


{
}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDThanksObjects1.length = 0;
gdjs.EndCode.GDThanksObjects2.length = 0;
gdjs.EndCode.GDthanks2Objects1.length = 0;
gdjs.EndCode.GDthanks2Objects2.length = 0;
gdjs.EndCode.GDloadingObjects1.length = 0;
gdjs.EndCode.GDloadingObjects2.length = 0;
gdjs.EndCode.GDQuitBufferObjects1.length = 0;
gdjs.EndCode.GDQuitBufferObjects2.length = 0;

gdjs.EndCode.eventsList2(runtimeScene);
return;

}

gdjs['EndCode'] = gdjs.EndCode;
