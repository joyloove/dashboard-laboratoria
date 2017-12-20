var calendar = {
englishDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
englishMonths: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

init: function init() {
	this.cacheDom();
	this.setCurrentDate();
	this.loadCalendar();
	this.bindEvents();
},

cacheDom: function cacheDom() {
	this.englishDaysLength = this.englishDays.length;

	//h1 tag in dom in which appends current month and year
	this.month = document.getElementById('month');

	//table row in which appends english day names
	this.dayName = document.getElementById('dayName');

	this.tableBody = document.getElementById('tableBody');
	this.tableHead = document.getElementById('tableHead');

	this.followingMonth = document.getElementById('nextMonth');
	this.prevMonth = document.getElementById('previousMonth');

	this.tr = document.getElementsByTagName('tr');
},

setCurrentDate: function setCurrentDate() {
	this.now = new Date();
	this.monthIndex = this.now.getMonth();
	this.year = this.now.getFullYear();

	this.tempDate = new Date(this.year, this.monthIndex, 1);

	this.skip = this.tempDate.getDay();
	//appends a default days names
	for (i = 1; i < this.skip; ++i) {
		this.tempDate.setDate(this.tempDate.getDate() - 1);
	}
},

loadCalendar: function loadCalendar() {
	//set the h1 tag in caption for a current month and year
	this.month.innerHTML = this.englishMonths[this.monthIndex] + ' ' + this.year;

	tableHeadTr = document.createElement('tr');
	tableHeadTr.id = 'dayName';
	this.tableHead.appendChild(tableHeadTr);

	this.createHeader();

	//creates body of the calendar table
	do {
		tr = document.createElement('tr');
		this.tableBody.appendChild(tr);
		//loops through each week
		for (i = 0; i < 7; i++) {
			td = document.createElement('td');
			//for database to put tasks
// 				aLink = document.createElement('a');
// 				aLink.href = this.tempDate.getDate() + '/' + (this.monthIndex + 1) + '/' + this.tempDate.getFullYear();
// 			  aLink.textContent = this.tempDate.getDate();

// 				td.appendChild(aLink);

			td.textContent = this.tempDate.getDate();
			tr.appendChild(td);
			if (this.tempDate.getDate() == this.now.getDate() && this.tempDate.getMonth() == this.monthIndex) {
				td.className = 'calendar__day__cell current';
			}
			//set date for a next day
			this.tempDate.setDate(this.tempDate.getDate() + 1);
		}
	} while (this.tempDate.getMonth() == this.monthIndex);
},

createHeader: function createHeader(){
	//creates a header of the calendar with english days
	for (var i = 0; i < this.englishDaysLength; i++) {
		th = document.createElement('th');
		th.className = 'calendar__day__header';
		th.textContent = this.englishDays[i];
		tableHeadTr.appendChild(th);
	}
},

bindEvents: function bindEvents() {
	this.prevMonth.addEventListener('click', this.previousMonth.bind(this));
	this.followingMonth.addEventListener('click', this.nextMonth.bind(this));
},

previousMonth: function previousMonth(event) {

	for (var i = this.tr.length; i--;) {
		this.tr[i].remove();
	}

	previous = new Date(this.year, this.monthIndex - 1);
	this.monthIndex = previous.getMonth();
	this.year = previous.getFullYear();

	this.tempDate = new Date(this.year, this.monthIndex, 1);

	this.skip = this.tempDate.getDay();
	if (this.skip < 1) {
		this.skip = 7;
	}
	for (i = 1; i < this.skip; ++i) {
		this.tempDate.setDate(this.tempDate.getDate() - 1);
	}

	this.loadCalendar();
},

nextMonth: function nextMonth(event) {
	for (var i = this.tr.length; i--;) {
		this.tr[i].remove();
	}

	previous = new Date(this.year, this.monthIndex + 1);
	this.monthIndex = previous.getMonth();
	this.year = previous.getFullYear();

	this.tempDate = new Date(this.year, this.monthIndex, 1);

	this.skip = this.tempDate.getDay();
	if (this.skip < 1) {
		this.skip = 7;
	}
	for (i = 1; i < this.skip; ++i) {
		this.tempDate.setDate(this.tempDate.getDate() - 1);
	}

	this.loadCalendar();
}

};

calendar.init();
