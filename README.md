# canvas_games_test
this js small library hellp developers to work with canvas and shapes, and it provide custom javascript events to deal with shapes on canvas as it html elements normaly event listeners
for example on mouseenter of shape or group of shapes, or mouseout, or click, (premuim) on shape drag start and on shape drag end and provide way to clear shapes, and redraw map with object of diffrent shapes, all library dynamic supported

![image](https://user-images.githubusercontent.com/55125302/196030163-36915509-1532-4733-bb89-beb98d917dd5.png)


##### canvasEvents Come with on event item drag start based on javascript other mouse related html element events to accurate events like it generated by js event listener itself (for cavnas reacts and shape)

as we can see first on drag start fired, and then drag event keep firing while user hold the shape/mouse and keep moving the mouse, and finally on drag relase that end both on drag start and on drag evens fired one time at end (due to work async with js/jquery events)


![image](https://user-images.githubusercontent.com/55125302/196045211-4e89ab33-30ab-4280-a632-a3b880fcd52e.png)

#### How drag event work, why it has feature not in browser drag start event
600 means it waits 600 milliseconds to confirm that the user is holding the mouse to start detecting the drag events, for example if the user is holding the mouse for 100 milliseconds and re-selecting this command is not considered the drag event because it is a normal timeout to click against the drag element, so this number lets you Set the number of time to wait for the connection/setups/ajax_requests before the fire drag start event trigers, browsers can't do this for the normal drag event start listeners of html elements, But CanvasEvents Can do that for canvas shapes not just html elements. (One advantage, set some data or send ajax requests before the OnShapeDragEvent process starts on the canvas) e.g. setup takes 1 second, so if the user only holds mouse to drag item for 600 milliseconds the event is not fired from the begning. but if he wait hold the object 1 second + it fired


#### dragging events order of trigger and event info 

![image](https://user-images.githubusercontent.com/55125302/196053316-09e981e4-47ec-4f8e-82f2-6b3c585147d5.png)
