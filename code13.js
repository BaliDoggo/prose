gdjs.EndCode = {};
gdjs.EndCode.GDThanksObjects1= [];
gdjs.EndCode.GDThanksObjects2= [];
gdjs.EndCode.GDthanks2Objects1= [];
gdjs.EndCode.GDthanks2Objects2= [];
gdjs.EndCode.GDthanks3Objects1= [];
gdjs.EndCode.GDthanks3Objects2= [];
gdjs.EndCode.GDannouncement2Objects1= [];
gdjs.EndCode.GDannouncement2Objects2= [];
gdjs.EndCode.GDcontrolsObjects1= [];
gdjs.EndCode.GDcontrolsObjects2= [];
gdjs.EndCode.GDloadingObjects1= [];
gdjs.EndCode.GDloadingObjects2= [];
gdjs.EndCode.GDQuitBufferObjects1= [];
gdjs.EndCode.GDQuitBufferObjects2= [];
gdjs.EndCode.GDannouncementObjects1= [];
gdjs.EndCode.GDannouncementObjects2= [];

gdjs.EndCode.conditionTrue_0 = {val:false};
gdjs.EndCode.condition0IsTrue_0 = {val:false};
gdjs.EndCode.condition1IsTrue_0 = {val:false};
gdjs.EndCode.condition2IsTrue_0 = {val:false};
gdjs.EndCode.conditionTrue_1 = {val:false};
gdjs.EndCode.condition0IsTrue_1 = {val:false};
gdjs.EndCode.condition1IsTrue_1 = {val:false};
gdjs.EndCode.condition2IsTrue_1 = {val:false};


gdjs.EndCode.asyncCallback10701228 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("QuitBuffer"), gdjs.EndCode.GDQuitBufferObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{for(var i = 0, len = gdjs.EndCode.GDQuitBufferObjects2.length ;i < len;++i) {
    gdjs.EndCode.GDQuitBufferObjects2[i].hide();
}
}}
gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.EndCode.asyncCallback10701228(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndCode.asyncCallback10710252 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("thanks3"), gdjs.EndCode.GDthanks3Objects2);
{for(var i = 0, len = gdjs.EndCode.GDthanks3Objects2.length ;i < len;++i) {
    gdjs.EndCode.GDthanks3Objects2[i].getBehavior("Tween").addObjectOpacityTween("fadein3", 255, "easeInQuad", 100, false);
}
}}
gdjs.EndCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.EndCode.asyncCallback10710252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndCode.eventsList2 = function(runtimeScene) {

{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Escape");
}if (gdjs.EndCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.EndCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("announcement"), gdjs.EndCode.GDannouncementObjects1);
gdjs.copyArray(runtimeScene.getObjects("announcement2"), gdjs.EndCode.GDannouncement2Objects1);
gdjs.copyArray(runtimeScene.getObjects("thanks3"), gdjs.EndCode.GDthanks3Objects1);
{for(var i = 0, len = gdjs.EndCode.GDQuitBufferObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDQuitBufferObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.EndCode.GDthanks3Objects1.length ;i < len;++i) {
    gdjs.EndCode.GDthanks3Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndCode.GDannouncement2Objects1.length ;i < len;++i) {
    gdjs.EndCode.GDannouncement2Objects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.EndCode.GDannouncementObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDannouncementObjects1[i].setOpacity(0);
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


gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
{gdjs.EndCode.conditionTrue_1 = gdjs.EndCode.condition1IsTrue_0;
gdjs.EndCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(10708364);
}
}}
if (gdjs.EndCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("announcement"), gdjs.EndCode.GDannouncementObjects1);
gdjs.copyArray(runtimeScene.getObjects("announcement2"), gdjs.EndCode.GDannouncement2Objects1);
gdjs.copyArray(runtimeScene.getObjects("controls"), gdjs.EndCode.GDcontrolsObjects1);
{for(var i = 0, len = gdjs.EndCode.GDcontrolsObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDcontrolsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.EndCode.GDannouncementObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDannouncementObjects1[i].getBehavior("Tween").addObjectOpacityTween("fadein1", 255, "easeInQuad", 200, false);
}
}{for(var i = 0, len = gdjs.EndCode.GDannouncement2Objects1.length ;i < len;++i) {
    gdjs.EndCode.GDannouncement2Objects1[i].getBehavior("Tween").addObjectOpacityTween("fadein2", 255, "easeInQuad", 200, false);
}
}
{ //Subevents
gdjs.EndCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDThanksObjects1.length = 0;
gdjs.EndCode.GDThanksObjects2.length = 0;
gdjs.EndCode.GDthanks2Objects1.length = 0;
gdjs.EndCode.GDthanks2Objects2.length = 0;
gdjs.EndCode.GDthanks3Objects1.length = 0;
gdjs.EndCode.GDthanks3Objects2.length = 0;
gdjs.EndCode.GDannouncement2Objects1.length = 0;
gdjs.EndCode.GDannouncement2Objects2.length = 0;
gdjs.EndCode.GDcontrolsObjects1.length = 0;
gdjs.EndCode.GDcontrolsObjects2.length = 0;
gdjs.EndCode.GDloadingObjects1.length = 0;
gdjs.EndCode.GDloadingObjects2.length = 0;
gdjs.EndCode.GDQuitBufferObjects1.length = 0;
gdjs.EndCode.GDQuitBufferObjects2.length = 0;
gdjs.EndCode.GDannouncementObjects1.length = 0;
gdjs.EndCode.GDannouncementObjects2.length = 0;

gdjs.EndCode.eventsList2(runtimeScene);

return;

}

gdjs['EndCode'] = gdjs.EndCode;
