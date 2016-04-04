#pragma strict

     var mouse : Vector2;
     var w : int = 32;
     var h : int = 32;
     var cursor : Texture2D;
     var loadCursor : Texture2D;
     var regular : boolean = true;
     var load : boolean = false;
     var distance : int = 2;
     
     function Start()
     {
         Screen.showCursor = false;
         Screen.lockCursor = true;
     }
     
     function Update()
     {
     	var hit:RaycastHit;
		var pickedUpObject:GameObject;
		
        mouse = new Vector2(Input.mousePosition.x, Screen.height - Input.mousePosition.y);
        if(Physics.Raycast(transform.position,transform.forward,hit,100) && hit.distance < distance){
        	if (hit.collider.gameObject.tag == "Load"){
        		regular = false;
        		load = true;
        	}
        }
        else{
        	regular = true;
        	load = false;
        }
        
		if(Input.GetButton("Fire1")){
        	if(Physics.Raycast(transform.position,transform.forward,hit,100)){//the order of the parameters might be wrong.
			 	if(hit.collider.name == "LoadCrash" && hit.distance < distance){
			 		Application.LoadLevel("crashLandingFromCave");
			 	}
			 	else if(hit.collider.name == "LoadCave"){
			 		Application.LoadLevel("cave");
			 	}
			}
		}
     }
     
     function OnGUI()
     {
     	if(regular)
        	GUI.DrawTexture(new Rect(mouse.x - (w / 2), mouse.y - (h / 2), w, h), cursor);
     	else if(load)
     		GUI.DrawTexture(new Rect(mouse.x - (w / 2), mouse.y - (h / 2), w, h), loadCursor);
     }