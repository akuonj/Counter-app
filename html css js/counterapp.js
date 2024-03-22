let count = 0
let store =[]
function increment()
{
    count += 1
    document.getElementById("count-el").textContent = count
}

function save()
{
    let Count= parseInt(count)
	store.push(Count)
	let countStr = count + " - "
	document.getElementById("save-el").textContent+= countStr
	document.getElementById("count-el").textContent = 0
	count = 0
	
}

function total()
{
	let sum = 0
	for(let i = 0; i < store.length; i++)
	{
		sum += store[i]
	}
	document.getElementById("total-el").textContent = sum
}

function refresh()
{
	location.reload()
}