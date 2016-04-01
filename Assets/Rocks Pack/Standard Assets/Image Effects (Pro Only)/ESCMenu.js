#pragma strict

function Start () {

}

function Update () {
	 if(Input.GetKey(KeyCode.Escape))
	 {
	 	if(Time.timeScale == 0)
	 	{
	 		Time.timeScale = 1;
	 	}
	 	else
	 	{
	 		Time.timeScale = 0;
	 	}
	 }
}