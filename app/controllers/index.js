// open the window
$.todoWin.open();

//event onclick of Inbox
$.inbox.addEventListener('click', addToDoItem);

// open the "add item" window
function addToDoItem() {
	Alloy.createController("add").getView().open();
}
