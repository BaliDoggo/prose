gdjs.CreditsCode = {};
gdjs.CreditsCode.GDCreditsObjects1= [];
gdjs.CreditsCode.GDCreditsObjects2= [];
gdjs.CreditsCode.GDloadingObjects1= [];
gdjs.CreditsCode.GDloadingObjects2= [];
gdjs.CreditsCode.GDQuitBufferObjects1= [];
gdjs.CreditsCode.GDQuitBufferObjects2= [];
gdjs.CreditsCode.GDexitObjects1= [];
gdjs.CreditsCode.GDexitObjects2= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};


gdjs.CreditsCode.asyncCallback10630972 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.CreditsCode.GDQuitBufferObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.CreditsCode.GDQuitBufferObjects2.length ;i < len;++i) {
    gdjs.CreditsCode.GDQuitBufferObjects2[i].hide();
}
}}
gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.CreditsCode.asyncCallback10630972(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.CreditsCode.eventsList1 = function(runtimeScene) {

{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.CreditsCode.GDQuitBufferObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDQuitBufferObjects1[i].hide();
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("loading"), gdjs.CreditsCode.GDloadingObjects1);
{for(var i = 0, len = gdjs.CreditsCode.GDloadingObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDloadingObjects1[i].setWidth(2 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 50;
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Tutorial");
}}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.CreditsCode.GDQuitBufferObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.CreditsCode.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDQuitBufferObjects1[i].hide(false);
}
}}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.CreditsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 50;
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Tutorial");
}}

}


{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Back");
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).add(1);
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDCreditsObjects1.length = 0;
gdjs.CreditsCode.GDCreditsObjects2.length = 0;
gdjs.CreditsCode.GDloadingObjects1.length = 0;
gdjs.CreditsCode.GDloadingObjects2.length = 0;
gdjs.CreditsCode.GDQuitBufferObjects1.length = 0;
gdjs.CreditsCode.GDQuitBufferObjects2.length = 0;
gdjs.CreditsCode.GDexitObjects1.length = 0;
gdjs.CreditsCode.GDexitObjects2.length = 0;

gdjs.CreditsCode.eventsList1(runtimeScene);
return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
