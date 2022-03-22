console.log('Web App Initialized...');

function checkChange() {
	let type = document.getElementById("ticket");
	let price = document.getElementById("price");

	if (type.value == "GENERAL") {
		price.innerHTML = "₹ 30.00";
	}

	else if (type.value == "VIP") {
		price.innerHTML = "₹ 70.00";
	}

	else if (type.value == "NRI") {
		price.innerHTML = "₹ 150.00";
	}
}

function formatDate (input) {
	var datePart = input.match(/\d+/g),
	year = datePart[0].substring(2), // get only two digits
	month = datePart[1], day = datePart[2];

	return day+'/'+month+'/'+year;
}

function uniqueId(date, ticket_type) {
	let id = "TM"
	id+=ticket_type.slice(0,1);
	id+=date.slice(0,2);
	id+=date.slice(3,5);
	id+=date.slice(6,10);
	id+= Math.floor(Math.random() * 100) + 1;

	return id;
}

function getTicket() {
	let name = document.getElementById("name").value;
	let date = formatDate(document.getElementById("datee").value);
	let ticket_type = document.getElementById("ticket").value;

	sessionStorage.setItem('name', name);
	sessionStorage.setItem('date', date);
	sessionStorage.setItem('ticket_type', ticket_type);
	sessionStorage.setItem('uniqueId', uniqueId(date, ticket_type));
	location.href = "ticket.html";
}

function generator() {
	let tname = sessionStorage.getItem('name');
	let tdate = sessionStorage.getItem('date');
	let ttype = sessionStorage.getItem('ticket_type');
	let tid = sessionStorage.getItem('uniqueId');
	let qrhtml=`<img src=\"https:\/\/chart.googleapis.com\/chart\?chs\=200x200\&cht=qr&chl=${tid}\" alt=\"\" class=\"qrimg\">`;

	document.getElementById("name").innerHTML = tname;
	document.getElementById("date").innerHTML = tdate;
	document.getElementById("ticket-type").innerHTML = ttype;
	document.getElementById("passid").innerHTML = tid;
	document.getElementById("qr").innerHTML = qrhtml;

}

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to("#preloader", { y: "-100%", duration: 0.5, ease: "slow(0.7, 0.7, false)" ,delay:2.6});
