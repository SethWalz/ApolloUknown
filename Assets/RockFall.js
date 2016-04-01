#pragma strict
var prefab : Transform;

function OnTriggerEnter() {
	Instantiate(prefab);
}