#pragma strict

	var cursor : Texture2D;
	var link : Texture2D;
	var normal : Texture2D;

     var mouse : Vector2;
     var w : int = 32;
     var h : int = 32;
     
     function Start()
     {
         Screen.showCursor = false;
         Screen.lockCursor = true;
     }
     
	function OnMouseOver () {
		Screen.showCursor = false;
		cursor = link;
	}

	function OnMouseExit() {
		Screen.showCursor = false;
		cursor = normal;
	}

	function OnGUI()
	 {
	     GUI.DrawTexture(new Rect(mouse.x - (w / 2), mouse.y - (h / 2), w, h), cursor);
	 }