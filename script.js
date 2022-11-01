const linkButton = document.querySelector(".generate-link");
const form = document.querySelector(".shorten-form")
const input = document.querySelector("input");
const linkContainer = document.querySelector(".link-container");

form.addEventListener("submit", async(e) =>{
	e.preventDefault();
	let userLink = input.value;
	let res = await fetch("https://api.shrtco.de/v2/shorten?url=" + userLink)
	res.json().then((res) => {
		input.innerText = '';
		let short = res.result.short_link;
		let con = document.createElement("DIV");
		let originalLink = document.createElement("P");
		let newLink = document.createElement("P");
		let copyBtn = document.createElement("button");
		copyBtn.classList.add("copy");
		copyBtn.innerText = "Copy";
		newLink.style.color = ("hsl(180, 66%, 49%)");
		originalLink.innerText = userLink;
		con.classList.add("link-design");
		newLink.innerText = short;
		linkContainer.append(con);
		con.append(originalLink);
		con.append(newLink);
		newLink.append(copyBtn);
			copyBtn.addEventListener("click", function() {
				navigator.clipboard.writeText(short);
				copyBtn.innerText = "Copied!"
				copyBtn.style.backgroundColor = "hsl(255, 11%, 22%)";
			});
	})
})
