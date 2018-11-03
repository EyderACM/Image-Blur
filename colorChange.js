const inputs = document.querySelectorAll('.controls input');


function handleUpdate(){
	const suffix = this.dataset.sizing || '';
	document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
	console.log(this.value);
}

function addMouseMove(){
	this.addEventListener('mousemove', handleUpdate);
}

function removeMouseMove(){
	this.removeEventListener('mousemove', handleUpdate);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousedown', addMouseMove));
inputs.forEach(input => input.addEventListener('mouseup', removeMouseMove));