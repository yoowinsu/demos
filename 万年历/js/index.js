window.onload = function() {
				let time1 = document.getElementsByClassName('time1')[0];
				let time2 = document.getElementsByClassName('time2')[0];
				let time4 = document.getElementsByClassName('time4')[0];
				let strongMonth = document.querySelector('.time3 strong');
				let number = document.querySelector(".number");
				let btns = document.querySelectorAll(".time3 span");

				timeNow();
				setInterval(timeNow, 1000);

				function carryFormat(num) {
					return num < 10 ? '0' + num : num;
				}

				function chineseWeekFormat(num) {
					return ['日', '一', '二', '三', '四', '五', '六'][num];
				}

				function englishMonthFormat(num) {
					return ['January','Febuary','March','April','May','June','July','August','Semptember','October','November','December'][num];
				}

				function timeNow() {
					let d = new Date();
					time1.innerHTML = carryFormat(d.getHours()) + ":" + carryFormat(d.getMinutes()) + ":" + carryFormat(d.getSeconds());
					return d;
				}

				time2.innerHTML = timeNow().getFullYear() + '年' + (timeNow().getMonth() + 1) + '月' + timeNow().getDate() + '日，星期' + chineseWeekFormat(timeNow().getDay());

				//获取某个月的第一天是星期几
				function getDayFirstWeek(year, month) {
					return new Date(year, month - 1, 1).getDay();
				}
				//获取这个月的最后一天(天数)
				function getEndDayMonth(year, month) {
					return new Date(year, month, 0).getDate();
				}

				let d = new Date();
				setDate(d);

				function setDate(d) {

					//这个月第一天是星期几
					var dayFirstWeek = getDayFirstWeek(d.getFullYear(), d.getMonth() + 1);
					//上个月在日历的遗留数量
					var endNum = dayFirstWeek - 1;
					//这个月最后一天（共有多少天）
					let dayEndThisMonth = getEndDayMonth(d.getFullYear(), d.getMonth() + 1);
					//上个月最后一天（共有多少天）
					let dayEndLastMonth = getEndDayMonth(d.getFullYear(), d.getMonth());

					if(endNum == 0) { //本月一号是星期一
						endNum = 7; //上个月有7天在本月日历开头
					}
					if(endNum < 0) {
						endNum = 0;
					}

					let numberInner = '';
					let newMonth_DayFromOne = 1;

					for(let i = 0; i < 42; i++) {
						if(i < endNum) { //上月遗留日期
							numberInner = '<span class="color">' + (dayEndLastMonth--) + '</span>' + numberInner
						} else if(i >= endNum + dayEndThisMonth) { //下月遗留日期
							numberInner += '<span class="color">' + (newMonth_DayFromOne++) + '</span>';
						} else {
							let today = new Date().getDate();
							//i从0开始，加1后与日期同步，减去上月的遗留日期，则表示范畴为现在为本月日期与下月遗留的和，当其取值与本日日期相等的时候，锁定到对应的number给出颜色标记。
							today === (i + 1 - endNum) ? 'active' : '';

							//如果年、月对不上，则不是本月，不给予颜色标记。
							if(d.getFullYear() != new Date().getFullYear() || d.getMonth() != new Date().getMonth()) {
								today = '';
							}
							numberInner += '<span class="' + today + '">' + (i + 1 - endNum) + '</span>';
						}
					}

					number.innerHTML = numberInner;

					strongMonth.innerHTML = englishMonthFormat(d.getMonth());

					time4.innerHTML = d.getFullYear();

				};

				//点击上个月
				btns[0].onclick = function() {
					d.setMonth(d.getMonth() - 1);
					setDate(d);
				};

				//点击上个月
				btns[1].onclick = function() {
					d.setMonth(d.getMonth() + 1);
					setDate(d);
				};

			};