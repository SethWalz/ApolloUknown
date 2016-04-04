#pragma strict

function Start () {

}

function FixedUpdate () {
	var currentColor : Color = RenderSettings.ambientLight;
	Debug.Log( RenderSettings.ambientLight.b);
	if(Input.GetButton("Brighter")){
		RenderSettings.ambientLight = new Color(currentColor.r + .01, currentColor.g + .01, currentColor.b + .01, currentColor.a);
	}
	if(Input.GetButton("Darker")){
		RenderSettings.ambientLight = new Color(currentColor.r - .01, currentColor.g - .01, currentColor.b - .01, currentColor.a);
	}
}