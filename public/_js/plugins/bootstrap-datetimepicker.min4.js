! function(e) {
	"use strict";
	if ("function" == typeof define && define.amd) define(["jquery", "moment"], e);
	else if ("object" == typeof exports) module.exports = e(require("jquery"), require("moment"));
	else {
		if ("undefined" == typeof jQuery) throw "bootstrap-datetimepicker requires jQuery to be loaded first";
		if ("undefined" == typeof moment) throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
		e(jQuery, moment)
	}
}(function(e, t) {
	"use strict";
	if (!t) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
	var a = function(a, n) {
		var r, i, o, s, d, l, p, c = {},
			u = !0,
			f = !1,
			m = !1,
			h = 0,
			y = [{
				clsName: "days",
				navFnc: "M",
				navStep: 1
			}, {
				clsName: "months",
				navFnc: "y",
				navStep: 1
			}, {
				clsName: "years",
				navFnc: "y",
				navStep: 10
			}, {
				clsName: "decades",
				navFnc: "y",
				navStep: 100
			}],
			w = ["days", "months", "years", "decades"],
			b = ["top", "bottom", "auto"],
			g = ["left", "right", "auto"],
			v = ["default", "top", "bottom"],
			k = {
				up: 38,
				38: "up",
				down: 40,
				40: "down",
				left: 37,
				37: "left",
				right: 39,
				39: "right",
				tab: 9,
				9: "tab",
				escape: 27,
				27: "escape",
				enter: 13,
				13: "enter",
				pageUp: 33,
				33: "pageUp",
				pageDown: 34,
				34: "pageDown",
				shift: 16,
				16: "shift",
				control: 17,
				17: "control",
				space: 32,
				32: "space",
				t: 84,
				84: "t",
				delete: 46,
				46: "delete"
			},
			D = {},
			C = function() {
				return void 0 !== t.tz && void 0 !== n.timeZone && null !== n.timeZone && "" !== n.timeZone
			},
			x = function(e) {
				var a;
				return a = void 0 === e || null === e ? t() : t.isDate(e) || t.isMoment(e) ? t(e) : C() ? t.tz(e, l, n.useStrict, n.timeZone) : t(e, l, n.useStrict), C() && a.tz(n.timeZone), a
			},
			T = function(e) {
				if ("string" != typeof e || e.length > 1) throw new TypeError("isEnabled expects a single character string parameter");
				switch (e) {
					case "y":
						return -1 !== d.indexOf("Y");
					case "M":
						return -1 !== d.indexOf("M");
					case "d":
						return -1 !== d.toLowerCase().indexOf("d");
					case "h":
					case "H":
						return -1 !== d.toLowerCase().indexOf("h");
					case "m":
						return -1 !== d.indexOf("m");
					case "s":
						return -1 !== d.indexOf("s");
					default:
						return !1
				}
			},
			M = function() {
				return T("h") || T("m") || T("s")
			},
			S = function() {
				return T("y") || T("M") || T("d")
			},
			O = function() {
				var t = e("<thead>").append(e("<tr>").append(e("<th>").addClass("prev").attr("data-action", "previous").append(e("<i>").addClass(n.icons.previous))).append(e("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", n.calendarWeeks ? "6" : "5")).append(e("<th>").addClass("next").attr("data-action", "next").append(e("<i>").addClass(n.icons.next)))),
					a = e("<tbody>").append(e("<tr>").append(e("<td>").attr("colspan", n.calendarWeeks ? "8" : "7")));
				return [e("<div>").addClass("datepicker-days").append(e("<table>").addClass("table-condensed").append(t).append(e("<tbody>"))), e("<div>").addClass("datepicker-months").append(e("<table>").addClass("table-condensed").append(t.clone()).append(a.clone())), e("<div>").addClass("datepicker-years").append(e("<table>").addClass("table-condensed").append(t.clone()).append(a.clone())), e("<div>").addClass("datepicker-decades").append(e("<table>").addClass("table-condensed").append(t.clone()).append(a.clone()))]
			},
			P = function() {
				var t = e("<tr>"),
					a = e("<tr>"),
					r = e("<tr>");
				return T("h") && (t.append(e("<td>").append(e("<a>").attr({
					href: "#",
					tabindex: "-1",
					title: n.tooltips.incrementHour
				}).addClass("btn").attr("data-action", "incrementHours").append(e("<i>").addClass(n.icons.up)))), a.append(e("<td>").append(e("<span>").addClass("timepicker-hour").attr({
					"data-time-component": "hours",
					title: n.tooltips.pickHour
				}).attr("data-action", "showHours"))), r.append(e("<td>").append(e("<a>").attr({
					href: "#",
					tabindex: "-1",
					title: n.tooltips.decrementHour
				}).addClass("btn").attr("data-action", "decrementHours").append(e("<i>").addClass(n.icons.down))))), T("m") && (T("h") && (t.append(e("<td>").addClass("separator")), a.append(e("<td>").addClass("separator").html(":")), r.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr({
					href: "#",
					tabindex: "-1",
					title: n.tooltips.incrementMinute
				}).addClass("btn").attr("data-action", "incrementMinutes").append(e("<i>").addClass(n.icons.up)))), a.append(e("<td>").append(e("<span>").addClass("timepicker-minute").attr({
					"data-time-component": "minutes",
					title: n.tooltips.pickMinute
				}).attr("data-action", "showMinutes"))), r.append(e("<td>").append(e("<a>").attr({
					href: "#",
					tabindex: "-1",
					title: n.tooltips.decrementMinute
				}).addClass("btn").attr("data-action", "decrementMinutes").append(e("<i>").addClass(n.icons.down))))), T("s") && (T("m") && (t.append(e("<td>").addClass("separator")), a.append(e("<td>").addClass("separator").html(":")), r.append(e("<td>").addClass("separator"))), t.append(e("<td>").append(e("<a>").attr({
					href: "#",
					tabindex: "-1",
					title: n.tooltips.incrementSecond
				}).addClass("btn").attr("data-action", "incrementSeconds").append(e("<i>").addClass(n.icons.up)))), a.append(e("<td>").append(e("<span>").addClass("timepicker-second").attr({
					"data-time-component": "seconds",
					title: n.tooltips.pickSecond
				}).attr("data-action", "showSeconds"))), r.append(e("<td>").append(e("<a>").attr({
					href: "#",
					tabindex: "-1",
					title: n.tooltips.decrementSecond
				}).addClass("btn").attr("data-action", "decrementSeconds").append(e("<i>").addClass(n.icons.down))))), s || (t.append(e("<td>").addClass("separator")), a.append(e("<td>").append(e("<button>").addClass("btn btn-primary").attr({
					"data-action": "togglePeriod",
					tabindex: "-1",
					title: n.tooltips.togglePeriod
				}))), r.append(e("<td>").addClass("separator"))), e("<div>").addClass("timepicker-picker").append(e("<table>").addClass("table-condensed").append([t, a, r]))
			},
			E = function() {
				var t = e("<div>").addClass("timepicker-hours").append(e("<table>").addClass("table-condensed")),
					a = e("<div>").addClass("timepicker-minutes").append(e("<table>").addClass("table-condensed")),
					n = e("<div>").addClass("timepicker-seconds").append(e("<table>").addClass("table-condensed")),
					r = [P()];
				return T("h") && r.push(t), T("m") && r.push(a), T("s") && r.push(n), r
			},
			H = function() {
				var t = [];
				return n.showTodayButton && t.push(e("<td>").append(e("<a>").attr({
					"data-action": "today",
					title: n.tooltips.today
				}).append(e("<i>").addClass(n.icons.today)))), !n.sideBySide && S() && M() && t.push(e("<td>").append(e("<a>").attr({
					"data-action": "togglePicker",
					title: n.tooltips.selectTime
				}).append(e("<i>").addClass(n.icons.time)))), n.showClear && t.push(e("<td>").append(e("<a>").attr({
					"data-action": "clear",
					title: n.tooltips.clear
				}).append(e("<i>").addClass(n.icons.clear)))), n.showClose && t.push(e("<td>").append(e("<a>").attr({
					"data-action": "close",
					title: n.tooltips.close
				}).append(e("<i>").addClass(n.icons.close)))), e("<table>").addClass("table-condensed").append(e("<tbody>").append(e("<tr>").append(t)))
			},
			I = function() {
				var t = e("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
					a = e("<div>").addClass("datepicker").append(O()),
					r = e("<div>").addClass("timepicker").append(E()),
					i = e("<ul>").addClass("list-unstyled"),
					o = e("<li>").addClass("picker-switch" + (n.collapse ? " accordion-toggle" : "")).append(H());
				return n.inline && t.removeClass("dropdown-menu"), s && t.addClass("usetwentyfour"), T("s") && !s && t.addClass("wider"), n.sideBySide && S() && M() ? (t.addClass("timepicker-sbs"), "top" === n.toolbarPlacement && t.append(o), t.append(e("<div>").addClass("row").append(a.addClass("col-md-6")).append(r.addClass("col-md-6"))), "bottom" === n.toolbarPlacement && t.append(o), t) : ("top" === n.toolbarPlacement && i.append(o), S() && i.append(e("<li>").addClass(n.collapse && M() ? "collapse show" : "").append(a)), "default" === n.toolbarPlacement && i.append(o), M() && i.append(e("<li>").addClass(n.collapse && S() ? "collapse" : "").append(r)), "bottom" === n.toolbarPlacement && i.append(o), t.append(i))
			},
			Y = function() {
				var t, r = (f || a).position(),
					i = (f || a).offset(),
					o = n.widgetPositioning.vertical,
					s = n.widgetPositioning.horizontal;
				if (n.widgetParent) t = n.widgetParent.append(m);
				else if (a.is("input")) t = a.after(m).parent();
				else {
					if (n.inline) return void(t = a.append(m));
					t = a, a.children().first().after(m)
				}
				if ("auto" === o && (o = i.top + 1.5 * m.height() >= e(window).height() + e(window).scrollTop() && m.height() + a.outerHeight() < i.top ? "top" : "bottom"), "auto" === s && (s = t.width() < i.left + m.outerWidth() / 2 && i.left + m.outerWidth() > e(window).width() ? "right" : "left"), "top" === o ? m.addClass("top").removeClass("bottom") : m.addClass("bottom").removeClass("top"), "right" === s ? m.addClass("pull-right") : m.removeClass("pull-right"), "static" === t.css("position") && (t = t.parents().filter(function() {
						return "static" !== e(this).css("position")
					}).first()), 0 === t.length) throw new Error("datetimepicker component should be placed within a non-static positioned container");
				m.css({
					top: "top" === o ? "auto" : r.top + a.outerHeight(),
					bottom: "top" === o ? t.outerHeight() - (t === a ? 0 : r.top) : "auto",
					left: "left" === s ? t === a ? 0 : r.left : "auto",
					right: "left" === s ? "auto" : t.outerWidth() - a.outerWidth() - (t === a ? 0 : r.left)
				})
			},
			q = function(e) {
				"dp.change" === e.type && (e.date && e.date.isSame(e.oldDate) || !e.date && !e.oldDate) || a.trigger(e)
			},
			B = function(e) {
				"y" === e && (e = "YYYY"), q({
					type: "dp.update",
					change: e,
					viewDate: i.clone()
				})
			},
			j = function(e) {
				m && (e && (p = Math.max(h, Math.min(3, p + e))), m.find(".datepicker > div").hide().filter(".datepicker-" + y[p].clsName).show())
			},
			A = function() {
				var t = e("<tr>"),
					a = i.clone().startOf("w").startOf("d");
				for (!0 === n.calendarWeeks && t.append(e("<th>").addClass("cw").text("#")); a.isBefore(i.clone().endOf("w"));) t.append(e("<th>").addClass("dow").text(a.format("dd"))), a.add(1, "d");
				m.find(".datepicker-days thead").append(t)
			},
			F = function(e) {
				return !0 === n.disabledDates[e.format("YYYY-MM-DD")]
			},
			L = function(e) {
				return !0 === n.enabledDates[e.format("YYYY-MM-DD")]
			},
			W = function(e) {
				return !0 === n.disabledHours[e.format("H")]
			},
			z = function(e) {
				return !0 === n.enabledHours[e.format("H")]
			},
			N = function(t, a) {
				if (!t.isValid()) return !1;
				if (n.disabledDates && "d" === a && F(t)) return !1;
				if (n.enabledDates && "d" === a && !L(t)) return !1;
				if (n.minDate && t.isBefore(n.minDate, a)) return !1;
				if (n.maxDate && t.isAfter(n.maxDate, a)) return !1;
				if (n.daysOfWeekDisabled && "d" === a && -1 !== n.daysOfWeekDisabled.indexOf(t.day())) return !1;
				if (n.disabledHours && ("h" === a || "m" === a || "s" === a) && W(t)) return !1;
				if (n.enabledHours && ("h" === a || "m" === a || "s" === a) && !z(t)) return !1;
				if (n.disabledTimeIntervals && ("h" === a || "m" === a || "s" === a)) {
					var r = !1;
					if (e.each(n.disabledTimeIntervals, function() {
							if (t.isBetween(this[0], this[1])) return r = !0, !1
						}), r) return !1
				}
				return !0
			},
			V = function() {
				for (var t = [], a = i.clone().startOf("y").startOf("d"); a.isSame(i, "y");) t.push(e("<span>").attr("data-action", "selectMonth").addClass("month").text(a.format("MMM"))), a.add(1, "M");
				m.find(".datepicker-months td").empty().append(t)
			},
			Z = function() {
				var t = m.find(".datepicker-months"),
					a = t.find("th"),
					o = t.find("tbody").find("span");
				a.eq(0).find("span").attr("title", n.tooltips.prevYear), a.eq(1).attr("title", n.tooltips.selectYear), a.eq(2).find("span").attr("title", n.tooltips.nextYear), t.find(".disabled").removeClass("disabled"), N(i.clone().subtract(1, "y"), "y") || a.eq(0).addClass("disabled"), a.eq(1).text(i.year()), N(i.clone().add(1, "y"), "y") || a.eq(2).addClass("disabled"), o.removeClass("active"), r.isSame(i, "y") && !u && o.eq(r.month()).addClass("active"), o.each(function(t) {
					N(i.clone().month(t), "M") || e(this).addClass("disabled")
				})
			},
			R = function() {
				var e = m.find(".datepicker-years"),
					t = e.find("th"),
					a = i.clone().subtract(5, "y"),
					o = i.clone().add(6, "y"),
					s = "";
				for (t.eq(0).find("span").attr("title", n.tooltips.prevDecade), t.eq(1).attr("title", n.tooltips.selectDecade), t.eq(2).find("span").attr("title", n.tooltips.nextDecade), e.find(".disabled").removeClass("disabled"), n.minDate && n.minDate.isAfter(a, "y") && t.eq(0).addClass("disabled"), t.eq(1).text(a.year() + "-" + o.year()), n.maxDate && n.maxDate.isBefore(o, "y") && t.eq(2).addClass("disabled"); !a.isAfter(o, "y");) s += '<span data-action="selectYear" class="year' + (a.isSame(r, "y") && !u ? " active" : "") + (N(a, "y") ? "" : " disabled") + '">' + a.year() + "</span>", a.add(1, "y");
				e.find("td").html(s)
			},
			Q = function() {
				var e, a = m.find(".datepicker-decades"),
					o = a.find("th"),
					s = t({
						y: i.year() - i.year() % 100 - 1
					}),
					d = s.clone().add(100, "y"),
					l = s.clone(),
					p = !1,
					c = !1,
					u = "";
				for (o.eq(0).find("span").attr("title", n.tooltips.prevCentury), o.eq(2).find("span").attr("title", n.tooltips.nextCentury), a.find(".disabled").removeClass("disabled"), (s.isSame(t({
						y: 1900
					})) || n.minDate && n.minDate.isAfter(s, "y")) && o.eq(0).addClass("disabled"), o.eq(1).text(s.year() + "-" + d.year()), (s.isSame(t({
						y: 2e3
					})) || n.maxDate && n.maxDate.isBefore(d, "y")) && o.eq(2).addClass("disabled"); !s.isAfter(d, "y");) e = s.year() + 12, p = n.minDate && n.minDate.isAfter(s, "y") && n.minDate.year() <= e, c = n.maxDate && n.maxDate.isAfter(s, "y") && n.maxDate.year() <= e, u += '<span data-action="selectDecade" class="decade' + (r.isAfter(s) && r.year() <= e ? " active" : "") + (N(s, "y") || p || c ? "" : " disabled") + '" data-selection="' + (s.year() + 6) + '">' + (s.year() + 1) + " - " + (s.year() + 12) + "</span>", s.add(12, "y");
				u += "<span></span><span></span><span></span>", a.find("td").html(u), o.eq(1).text(l.year() + 1 + "-" + s.year())
			},
			U = function() {
				var t, a, o, s = m.find(".datepicker-days"),
					d = s.find("th"),
					l = [],
					p = [];
				if (S()) {
					for (d.eq(0).find("span").attr("title", n.tooltips.prevMonth), d.eq(1).attr("title", n.tooltips.selectMonth), d.eq(2).find("span").attr("title", n.tooltips.nextMonth), s.find(".disabled").removeClass("disabled"), d.eq(1).text(i.format(n.dayViewHeaderFormat)), N(i.clone().subtract(1, "M"), "M") || d.eq(0).addClass("disabled"), N(i.clone().add(1, "M"), "M") || d.eq(2).addClass("disabled"), t = i.clone().startOf("M").startOf("w").startOf("d"), o = 0; o < 42; o++) 0 === t.weekday() && (a = e("<tr>"), n.calendarWeeks && a.append('<td class="cw">' + t.week() + "</td>"), l.push(a)), p = ["day"], t.isBefore(i, "M") && p.push("old"), t.isAfter(i, "M") && p.push("new"), t.isSame(r, "d") && !u && p.push("active"), N(t, "d") || p.push("disabled"), t.isSame(x(), "d") && p.push("today"), 0 !== t.day() && 6 !== t.day() || p.push("weekend"), q({
						type: "dp.classify",
						date: t,
						classNames: p
					}), a.append('<td data-action="selectDay" data-day="' + t.format("L") + '" class="' + p.join(" ") + '">' + t.date() + "</td>"), t.add(1, "d");
					s.find("tbody").empty().append(l), Z(), R(), Q()
				}
			},
			G = function() {
				var t = m.find(".timepicker-hours table"),
					a = i.clone().startOf("d"),
					n = [],
					r = e("<tr>");
				for (i.hour() > 11 && !s && a.hour(12); a.isSame(i, "d") && (s || i.hour() < 12 && a.hour() < 12 || i.hour() > 11);) a.hour() % 4 == 0 && (r = e("<tr>"), n.push(r)), r.append('<td data-action="selectHour" class="hour' + (N(a, "h") ? "" : " disabled") + '">' + a.format(s ? "HH" : "hh") + "</td>"), a.add(1, "h");
				t.empty().append(n)
			},
			J = function() {
				for (var t = m.find(".timepicker-minutes table"), a = i.clone().startOf("h"), r = [], o = e("<tr>"), s = 1 === n.stepping ? 5 : n.stepping; i.isSame(a, "h");) a.minute() % (4 * s) == 0 && (o = e("<tr>"), r.push(o)), o.append('<td data-action="selectMinute" class="minute' + (N(a, "m") ? "" : " disabled") + '">' + a.format("mm") + "</td>"), a.add(s, "m");
				t.empty().append(r)
			},
			K = function() {
				for (var t = m.find(".timepicker-seconds table"), a = i.clone().startOf("m"), n = [], r = e("<tr>"); i.isSame(a, "m");) a.second() % 20 == 0 && (r = e("<tr>"), n.push(r)), r.append('<td data-action="selectSecond" class="second' + (N(a, "s") ? "" : " disabled") + '">' + a.format("ss") + "</td>"), a.add(5, "s");
				t.empty().append(n)
			},
			X = function() {
				var e, t, a = m.find(".timepicker span[data-time-component]");
				s || (e = m.find(".timepicker [data-action=togglePeriod]"), t = r.clone().add(r.hours() >= 12 ? -12 : 12, "h"), e.text(r.format("A")), N(t, "h") ? e.removeClass("disabled") : e.addClass("disabled")), a.filter("[data-time-component=hours]").text(r.format(s ? "HH" : "hh")), a.filter("[data-time-component=minutes]").text(r.format("mm")), a.filter("[data-time-component=seconds]").text(r.format("ss")), G(), J(), K()
			},
			$ = function() {
				m && (U(), X())
			},
			_ = function(e) {
				var t = u ? null : r;
				if (!e) return u = !0, o.val(""), a.data("date", ""), q({
					type: "dp.change",
					date: !1,
					oldDate: t
				}), void $();
				if (e = e.clone().locale(n.locale), C() && e.tz(n.timeZone), 1 !== n.stepping)
					for (e.minutes(Math.round(e.minutes() / n.stepping) * n.stepping).seconds(0); n.minDate && e.isBefore(n.minDate);) e.add(n.stepping, "minutes");
				N(e) ? (i = (r = e).clone(), o.val(r.format(d)), a.data("date", r.format(d)), u = !1, $(), q({
					type: "dp.change",
					date: r.clone(),
					oldDate: t
				})) : (n.keepInvalid ? q({
					type: "dp.change",
					date: e,
					oldDate: t
				}) : o.val(u ? "" : r.format(d)), q({
					type: "dp.error",
					date: e,
					oldDate: t
				}))
			},
			ee = function() {
				var t = !1;
				return m ? (m.find(".collapse").each(function() {
					var a = e(this).data("collapse");
					return !a || !a.transitioning || (t = !0, !1)
				}), t ? c : (f && f.hasClass("btn") && f.toggleClass("active"), m.hide(), e(window).off("resize", Y), m.off("click", "[data-action]"), m.off("mousedown", !1), m.remove(), m = !1, q({
					type: "dp.hide",
					date: r.clone()
				}), o.blur(), i = r.clone(), c)) : c
			},
			te = function() {
				_(null)
			},
			ae = function(e) {
				return void 0 === n.parseInputDate ? (!t.isMoment(e) || e instanceof Date) && (e = x(e)) : e = n.parseInputDate(e), e
			},
			ne = {
				next: function() {
					var e = y[p].navFnc;
					i.add(y[p].navStep, e), U(), B(e)
				},
				previous: function() {
					var e = y[p].navFnc;
					i.subtract(y[p].navStep, e), U(), B(e)
				},
				pickerSwitch: function() {
					j(1)
				},
				selectMonth: function(t) {
					var a = e(t.target).closest("tbody").find("span").index(e(t.target));
					i.month(a), p === h ? (_(r.clone().year(i.year()).month(i.month())), n.inline || ee()) : (j(-1), U()), B("M")
				},
				selectYear: function(t) {
					var a = parseInt(e(t.target).text(), 10) || 0;
					i.year(a), p === h ? (_(r.clone().year(i.year())), n.inline || ee()) : (j(-1), U()), B("YYYY")
				},
				selectDecade: function(t) {
					var a = parseInt(e(t.target).data("selection"), 10) || 0;
					i.year(a), p === h ? (_(r.clone().year(i.year())), n.inline || ee()) : (j(-1), U()), B("YYYY")
				},
				selectDay: function(t) {
					var a = i.clone();
					e(t.target).is(".old") && a.subtract(1, "M"), e(t.target).is(".new") && a.add(1, "M"), _(a.date(parseInt(e(t.target).text(), 10))), M() || n.keepOpen || n.inline || ee()
				},
				incrementHours: function() {
					var e = r.clone().add(1, "h");
					N(e, "h") && _(e)
				},
				incrementMinutes: function() {
					var e = r.clone().add(n.stepping, "m");
					N(e, "m") && _(e)
				},
				incrementSeconds: function() {
					var e = r.clone().add(1, "s");
					N(e, "s") && _(e)
				},
				decrementHours: function() {
					var e = r.clone().subtract(1, "h");
					N(e, "h") && _(e)
				},
				decrementMinutes: function() {
					var e = r.clone().subtract(n.stepping, "m");
					N(e, "m") && _(e)
				},
				decrementSeconds: function() {
					var e = r.clone().subtract(1, "s");
					N(e, "s") && _(e)
				},
				togglePeriod: function() {
					_(r.clone().add(r.hours() >= 12 ? -12 : 12, "h"))
				},
				togglePicker: function(t) {
					var a, r = e(t.target),
						i = r.closest("ul"),
						o = i.find(".show"),
						s = i.find(".collapse:not(.show)");
					if (o && o.length) {
						if ((a = o.data("collapse")) && a.transitioning) return;
						o.collapse ? (o.collapse("hide"), s.collapse("show")) : (o.removeClass("show"), s.addClass("show")), r.is("i") ? r.toggleClass(n.icons.time + " " + n.icons.date) : r.find("i").toggleClass(n.icons.time + " " + n.icons.date)
					}
				},
				showPicker: function() {
					m.find(".timepicker > div:not(.timepicker-picker)").hide(), m.find(".timepicker .timepicker-picker").show()
				},
				showHours: function() {
					m.find(".timepicker .timepicker-picker").hide(), m.find(".timepicker .timepicker-hours").show()
				},
				showMinutes: function() {
					m.find(".timepicker .timepicker-picker").hide(), m.find(".timepicker .timepicker-minutes").show()
				},
				showSeconds: function() {
					m.find(".timepicker .timepicker-picker").hide(), m.find(".timepicker .timepicker-seconds").show()
				},
				selectHour: function(t) {
					var a = parseInt(e(t.target).text(), 10);
					s || (r.hours() >= 12 ? 12 !== a && (a += 12) : 12 === a && (a = 0)), _(r.clone().hours(a)), ne.showPicker.call(c)
				},
				selectMinute: function(t) {
					_(r.clone().minutes(parseInt(e(t.target).text(), 10))), ne.showPicker.call(c)
				},
				selectSecond: function(t) {
					_(r.clone().seconds(parseInt(e(t.target).text(), 10))), ne.showPicker.call(c)
				},
				clear: te,
				today: function() {
					var e = x();
					N(e, "d") && _(e)
				},
				close: ee
			},
			re = function(t) {
				return !e(t.currentTarget).is(".disabled") && (ne[e(t.currentTarget).data("action")].apply(c, arguments), !1)
			},
			ie = function() {
				var t, a = {
					year: function(e) {
						return e.month(0).date(1).hours(0).seconds(0).minutes(0)
					},
					month: function(e) {
						return e.date(1).hours(0).seconds(0).minutes(0)
					},
					day: function(e) {
						return e.hours(0).seconds(0).minutes(0)
					},
					hour: function(e) {
						return e.seconds(0).minutes(0)
					},
					minute: function(e) {
						return e.seconds(0)
					}
				};
				return o.prop("disabled") || !n.ignoreReadonly && o.prop("readonly") || m ? c : (void 0 !== o.val() && 0 !== o.val().trim().length ? _(ae(o.val().trim())) : u && n.useCurrent && (n.inline || o.is("input") && 0 === o.val().trim().length) && (t = x(), "string" == typeof n.useCurrent && (t = a[n.useCurrent](t)), _(t)), m = I(), A(), V(), m.find(".timepicker-hours").hide(), m.find(".timepicker-minutes").hide(), m.find(".timepicker-seconds").hide(), $(), j(), e(window).on("resize", Y), m.on("click", "[data-action]", re), m.on("mousedown", !1), f && f.hasClass("btn") && f.toggleClass("active"), Y(), m.show(), n.focusOnShow && !o.is(":focus") && o.focus(), q({
					type: "dp.show"
				}), c)
			},
			oe = function() {
				return m ? ee() : ie()
			},
			se = function(e) {
				var t, a, r, i, o = null,
					s = [],
					d = {},
					l = e.which;
				D[l] = "p";
				for (t in D) D.hasOwnProperty(t) && "p" === D[t] && (s.push(t), parseInt(t, 10) !== l && (d[t] = !0));
				for (t in n.keyBinds)
					if (n.keyBinds.hasOwnProperty(t) && "function" == typeof n.keyBinds[t] && (r = t.split(" ")).length === s.length && k[l] === r[r.length - 1]) {
						for (i = !0, a = r.length - 2; a >= 0; a--)
							if (!(k[r[a]] in d)) {
								i = !1;
								break
							}
						if (i) {
							o = n.keyBinds[t];
							break
						}
					}
				o && (o.call(c, m), e.stopPropagation(), e.preventDefault())
			},
			de = function(e) {
				D[e.which] = "r", e.stopPropagation(), e.preventDefault()
			},
			le = function(t) {
				var a = e(t.target).val().trim(),
					n = a ? ae(a) : null;
				return _(n), t.stopImmediatePropagation(), !1
			},
			pe = function() {
				o.off({
					change: le,
					blur: blur,
					keydown: se,
					keyup: de,
					focus: n.allowInputToggle ? ee : ""
				}), a.is("input") ? o.off({
					focus: ie
				}) : f && (f.off("click", oe), f.off("mousedown", !1))
			},
			ce = function(t) {
				var a = {};
				return e.each(t, function() {
					var e = ae(this);
					e.isValid() && (a[e.format("YYYY-MM-DD")] = !0)
				}), !!Object.keys(a).length && a
			},
			ue = function(t) {
				var a = {};
				return e.each(t, function() {
					a[this] = !0
				}), !!Object.keys(a).length && a
			},
			fe = function() {
				var e = n.format || "L LT";
				d = e.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(e) {
					return (r.localeData().longDateFormat(e) || e).replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(e) {
						return r.localeData().longDateFormat(e) || e
					})
				}), (l = n.extraFormats ? n.extraFormats.slice() : []).indexOf(e) < 0 && l.indexOf(d) < 0 && l.push(d), s = d.toLowerCase().indexOf("a") < 1 && d.replace(/\[.*?\]/g, "").indexOf("h") < 1, T("y") && (h = 2), T("M") && (h = 1), T("d") && (h = 0), p = Math.max(h, p), u || _(r)
			};
		if (c.destroy = function() {
				ee(), pe(), a.removeData("DateTimePicker"), a.removeData("date")
			}, c.toggle = oe, c.show = ie, c.hide = ee, c.disable = function() {
				return ee(), f && f.hasClass("btn") && f.addClass("disabled"), o.prop("disabled", !0), c
			}, c.enable = function() {
				return f && f.hasClass("btn") && f.removeClass("disabled"), o.prop("disabled", !1), c
			}, c.ignoreReadonly = function(e) {
				if (0 === arguments.length) return n.ignoreReadonly;
				if ("boolean" != typeof e) throw new TypeError("ignoreReadonly () expects a boolean parameter");
				return n.ignoreReadonly = e, c
			}, c.options = function(t) {
				if (0 === arguments.length) return e.extend(!0, {}, n);
				if (!(t instanceof Object)) throw new TypeError("options() options parameter should be an object");
				return e.extend(!0, n, t), e.each(n, function(e, t) {
					if (void 0 === c[e]) throw new TypeError("option " + e + " is not recognized!");
					c[e](t)
				}), c
			}, c.date = function(e) {
				if (0 === arguments.length) return u ? null : r.clone();
				if (!(null === e || "string" == typeof e || t.isMoment(e) || e instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
				return _(null === e ? null : ae(e)), c
			}, c.format = function(e) {
				if (0 === arguments.length) return n.format;
				if ("string" != typeof e && ("boolean" != typeof e || !1 !== e)) throw new TypeError("format() expects a string or boolean:false parameter " + e);
				return n.format = e, d && fe(), c
			}, c.timeZone = function(e) {
				if (0 === arguments.length) return n.timeZone;
				if ("string" != typeof e) throw new TypeError("newZone() expects a string parameter");
				return n.timeZone = e, c
			}, c.dayViewHeaderFormat = function(e) {
				if (0 === arguments.length) return n.dayViewHeaderFormat;
				if ("string" != typeof e) throw new TypeError("dayViewHeaderFormat() expects a string parameter");
				return n.dayViewHeaderFormat = e, c
			}, c.extraFormats = function(e) {
				if (0 === arguments.length) return n.extraFormats;
				if (!1 !== e && !(e instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter");
				return n.extraFormats = e, l && fe(), c
			}, c.disabledDates = function(t) {
				if (0 === arguments.length) return n.disabledDates ? e.extend({}, n.disabledDates) : n.disabledDates;
				if (!t) return n.disabledDates = !1, $(), c;
				if (!(t instanceof Array)) throw new TypeError("disabledDates() expects an array parameter");
				return n.disabledDates = ce(t), n.enabledDates = !1, $(), c
			}, c.enabledDates = function(t) {
				if (0 === arguments.length) return n.enabledDates ? e.extend({}, n.enabledDates) : n.enabledDates;
				if (!t) return n.enabledDates = !1, $(), c;
				if (!(t instanceof Array)) throw new TypeError("enabledDates() expects an array parameter");
				return n.enabledDates = ce(t), n.disabledDates = !1, $(), c
			}, c.daysOfWeekDisabled = function(e) {
				if (0 === arguments.length) return n.daysOfWeekDisabled.splice(0);
				if ("boolean" == typeof e && !e) return n.daysOfWeekDisabled = !1, $(), c;
				if (!(e instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");
				if (n.daysOfWeekDisabled = e.reduce(function(e, t) {
						return (t = parseInt(t, 10)) > 6 || t < 0 || isNaN(t) ? e : (-1 === e.indexOf(t) && e.push(t), e)
					}, []).sort(), n.useCurrent && !n.keepInvalid) {
					for (var t = 0; !N(r, "d");) {
						if (r.add(1, "d"), 31 === t) throw "Tried 31 times to find a valid date";
						t++
					}
					_(r)
				}
				return $(), c
			}, c.maxDate = function(e) {
				if (0 === arguments.length) return n.maxDate ? n.maxDate.clone() : n.maxDate;
				if ("boolean" == typeof e && !1 === e) return n.maxDate = !1, $(), c;
				"string" == typeof e && ("now" !== e && "moment" !== e || (e = x()));
				var t = ae(e);
				if (!t.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + e);
				if (n.minDate && t.isBefore(n.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + t.format(d));
				return n.maxDate = t, n.useCurrent && !n.keepInvalid && r.isAfter(e) && _(n.maxDate), i.isAfter(t) && (i = t.clone().subtract(n.stepping, "m")), $(), c
			}, c.minDate = function(e) {
				if (0 === arguments.length) return n.minDate ? n.minDate.clone() : n.minDate;
				if ("boolean" == typeof e && !1 === e) return n.minDate = !1, $(), c;
				"string" == typeof e && ("now" !== e && "moment" !== e || (e = x()));
				var t = ae(e);
				if (!t.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + e);
				if (n.maxDate && t.isAfter(n.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + t.format(d));
				return n.minDate = t, n.useCurrent && !n.keepInvalid && r.isBefore(e) && _(n.minDate), i.isBefore(t) && (i = t.clone().add(n.stepping, "m")), $(), c
			}, c.defaultDate = function(e) {
				if (0 === arguments.length) return n.defaultDate ? n.defaultDate.clone() : n.defaultDate;
				if (!e) return n.defaultDate = !1, c;
				"string" == typeof e && (e = "now" === e || "moment" === e ? x() : x(e));
				var t = ae(e);
				if (!t.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + e);
				if (!N(t)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
				return n.defaultDate = t, (n.defaultDate && n.inline || "" === o.val().trim()) && _(n.defaultDate), c
			}, c.locale = function(e) {
				if (0 === arguments.length) return n.locale;
				if (!t.localeData(e)) throw new TypeError("locale() locale " + e + " is not loaded from moment locales!");
				return n.locale = e, r.locale(n.locale), i.locale(n.locale), d && fe(), m && (ee(), ie()), c
			}, c.stepping = function(e) {
				return 0 === arguments.length ? n.stepping : (e = parseInt(e, 10), (isNaN(e) || e < 1) && (e = 1), n.stepping = e, c)
			}, c.useCurrent = function(e) {
				var t = ["year", "month", "day", "hour", "minute"];
				if (0 === arguments.length) return n.useCurrent;
				if ("boolean" != typeof e && "string" != typeof e) throw new TypeError("useCurrent() expects a boolean or string parameter");
				if ("string" == typeof e && -1 === t.indexOf(e.toLowerCase())) throw new TypeError("useCurrent() expects a string parameter of " + t.join(", "));
				return n.useCurrent = e, c
			}, c.collapse = function(e) {
				if (0 === arguments.length) return n.collapse;
				if ("boolean" != typeof e) throw new TypeError("collapse() expects a boolean parameter");
				return n.collapse === e ? c : (n.collapse = e, m && (ee(), ie()), c)
			}, c.icons = function(t) {
				if (0 === arguments.length) return e.extend({}, n.icons);
				if (!(t instanceof Object)) throw new TypeError("icons() expects parameter to be an Object");
				return e.extend(n.icons, t), m && (ee(), ie()), c
			}, c.tooltips = function(t) {
				if (0 === arguments.length) return e.extend({}, n.tooltips);
				if (!(t instanceof Object)) throw new TypeError("tooltips() expects parameter to be an Object");
				return e.extend(n.tooltips, t), m && (ee(), ie()), c
			}, c.useStrict = function(e) {
				if (0 === arguments.length) return n.useStrict;
				if ("boolean" != typeof e) throw new TypeError("useStrict() expects a boolean parameter");
				return n.useStrict = e, c
			}, c.sideBySide = function(e) {
				if (0 === arguments.length) return n.sideBySide;
				if ("boolean" != typeof e) throw new TypeError("sideBySide() expects a boolean parameter");
				return n.sideBySide = e, m && (ee(), ie()), c
			}, c.viewMode = function(e) {
				if (0 === arguments.length) return n.viewMode;
				if ("string" != typeof e) throw new TypeError("viewMode() expects a string parameter");
				if (-1 === w.indexOf(e)) throw new TypeError("viewMode() parameter must be one of (" + w.join(", ") + ") value");
				return n.viewMode = e, p = Math.max(w.indexOf(e), h), j(), c
			}, c.toolbarPlacement = function(e) {
				if (0 === arguments.length) return n.toolbarPlacement;
				if ("string" != typeof e) throw new TypeError("toolbarPlacement() expects a string parameter");
				if (-1 === v.indexOf(e)) throw new TypeError("toolbarPlacement() parameter must be one of (" + v.join(", ") + ") value");
				return n.toolbarPlacement = e, m && (ee(), ie()), c
			}, c.widgetPositioning = function(t) {
				if (0 === arguments.length) return e.extend({}, n.widgetPositioning);
				if ("[object Object]" !== {}.toString.call(t)) throw new TypeError("widgetPositioning() expects an object variable");
				if (t.horizontal) {
					if ("string" != typeof t.horizontal) throw new TypeError("widgetPositioning() horizontal variable must be a string");
					if (t.horizontal = t.horizontal.toLowerCase(), -1 === g.indexOf(t.horizontal)) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + g.join(", ") + ")");
					n.widgetPositioning.horizontal = t.horizontal
				}
				if (t.vertical) {
					if ("string" != typeof t.vertical) throw new TypeError("widgetPositioning() vertical variable must be a string");
					if (t.vertical = t.vertical.toLowerCase(), -1 === b.indexOf(t.vertical)) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + b.join(", ") + ")");
					n.widgetPositioning.vertical = t.vertical
				}
				return $(), c
			}, c.calendarWeeks = function(e) {
				if (0 === arguments.length) return n.calendarWeeks;
				if ("boolean" != typeof e) throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
				return n.calendarWeeks = e, $(), c
			}, c.showTodayButton = function(e) {
				if (0 === arguments.length) return n.showTodayButton;
				if ("boolean" != typeof e) throw new TypeError("showTodayButton() expects a boolean parameter");
				return n.showTodayButton = e, m && (ee(), ie()), c
			}, c.showClear = function(e) {
				if (0 === arguments.length) return n.showClear;
				if ("boolean" != typeof e) throw new TypeError("showClear() expects a boolean parameter");
				return n.showClear = e, m && (ee(), ie()), c
			}, c.widgetParent = function(t) {
				if (0 === arguments.length) return n.widgetParent;
				if ("string" == typeof t && (t = e(t)), null !== t && "string" != typeof t && !(t instanceof e)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
				return n.widgetParent = t, m && (ee(), ie()), c
			}, c.keepOpen = function(e) {
				if (0 === arguments.length) return n.keepOpen;
				if ("boolean" != typeof e) throw new TypeError("keepOpen() expects a boolean parameter");
				return n.keepOpen = e, c
			}, c.focusOnShow = function(e) {
				if (0 === arguments.length) return n.focusOnShow;
				if ("boolean" != typeof e) throw new TypeError("focusOnShow() expects a boolean parameter");
				return n.focusOnShow = e, c
			}, c.inline = function(e) {
				if (0 === arguments.length) return n.inline;
				if ("boolean" != typeof e) throw new TypeError("inline() expects a boolean parameter");
				return n.inline = e, c
			}, c.clear = function() {
				return te(), c
			}, c.keyBinds = function(e) {
				return 0 === arguments.length ? n.keyBinds : (n.keyBinds = e, c)
			}, c.getMoment = function(e) {
				return x(e)
			}, c.debug = function(e) {
				if ("boolean" != typeof e) throw new TypeError("debug() expects a boolean parameter");
				return n.debug = e, c
			}, c.allowInputToggle = function(e) {
				if (0 === arguments.length) return n.allowInputToggle;
				if ("boolean" != typeof e) throw new TypeError("allowInputToggle() expects a boolean parameter");
				return n.allowInputToggle = e, c
			}, c.showClose = function(e) {
				if (0 === arguments.length) return n.showClose;
				if ("boolean" != typeof e) throw new TypeError("showClose() expects a boolean parameter");
				return n.showClose = e, c
			}, c.keepInvalid = function(e) {
				if (0 === arguments.length) return n.keepInvalid;
				if ("boolean" != typeof e) throw new TypeError("keepInvalid() expects a boolean parameter");
				return n.keepInvalid = e, c
			}, c.datepickerInput = function(e) {
				if (0 === arguments.length) return n.datepickerInput;
				if ("string" != typeof e) throw new TypeError("datepickerInput() expects a string parameter");
				return n.datepickerInput = e, c
			}, c.parseInputDate = function(e) {
				if (0 === arguments.length) return n.parseInputDate;
				if ("function" != typeof e) throw new TypeError("parseInputDate() sholud be as function");
				return n.parseInputDate = e, c
			}, c.disabledTimeIntervals = function(t) {
				if (0 === arguments.length) return n.disabledTimeIntervals ? e.extend({}, n.disabledTimeIntervals) : n.disabledTimeIntervals;
				if (!t) return n.disabledTimeIntervals = !1, $(), c;
				if (!(t instanceof Array)) throw new TypeError("disabledTimeIntervals() expects an array parameter");
				return n.disabledTimeIntervals = t, $(), c
			}, c.disabledHours = function(t) {
				if (0 === arguments.length) return n.disabledHours ? e.extend({}, n.disabledHours) : n.disabledHours;
				if (!t) return n.disabledHours = !1, $(), c;
				if (!(t instanceof Array)) throw new TypeError("disabledHours() expects an array parameter");
				if (n.disabledHours = ue(t), n.enabledHours = !1, n.useCurrent && !n.keepInvalid) {
					for (var a = 0; !N(r, "h");) {
						if (r.add(1, "h"), 24 === a) throw "Tried 24 times to find a valid date";
						a++
					}
					_(r)
				}
				return $(), c
			}, c.enabledHours = function(t) {
				if (0 === arguments.length) return n.enabledHours ? e.extend({}, n.enabledHours) : n.enabledHours;
				if (!t) return n.enabledHours = !1, $(), c;
				if (!(t instanceof Array)) throw new TypeError("enabledHours() expects an array parameter");
				if (n.enabledHours = ue(t), n.disabledHours = !1, n.useCurrent && !n.keepInvalid) {
					for (var a = 0; !N(r, "h");) {
						if (r.add(1, "h"), 24 === a) throw "Tried 24 times to find a valid date";
						a++
					}
					_(r)
				}
				return $(), c
			}, c.viewDate = function(e) {
				if (0 === arguments.length) return i.clone();
				if (!e) return i = r.clone(), c;
				if (!("string" == typeof e || t.isMoment(e) || e instanceof Date)) throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
				return i = ae(e), B(), c
			}, a.is("input")) o = a;
		else if (0 === (o = a.find(n.datepickerInput)).length) o = a.find("input");
		else if (!o.is("input")) throw new Error('CSS class "' + n.datepickerInput + '" cannot be applied to non input element');
		if (a.hasClass("input-group") && (f = 0 === a.find(".datepickerbutton").length ? a.find(".input-group-addon") : a.find(".datepickerbutton")), !n.inline && !o.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");
		return r = x(), i = r.clone(), e.extend(!0, n, function() {
			var t, r = {};
			return (t = a.is("input") || n.inline ? a.data() : a.find("input").data()).dateOptions && t.dateOptions instanceof Object && (r = e.extend(!0, r, t.dateOptions)), e.each(n, function(e) {
				var a = "date" + e.charAt(0).toUpperCase() + e.slice(1);
				void 0 !== t[a] && (r[e] = t[a])
			}), r
		}()), c.options(n), fe(), o.on({
			change: le,
			blur: n.debug ? "" : ee,
			keydown: se,
			keyup: de,
			focus: n.allowInputToggle ? ie : ""
		}), a.is("input") ? o.on({
			focus: ie
		}) : f && (f.on("click", oe), f.on("mousedown", !1)), o.prop("disabled") && c.disable(), o.is("input") && 0 !== o.val().trim().length ? _(ae(o.val().trim())) : n.defaultDate && void 0 === o.attr("placeholder") && _(n.defaultDate), n.inline && ie(), c
	};
	return e.fn.datetimepicker = function(t) {
		t = t || {};
		var n, r = Array.prototype.slice.call(arguments, 1),
			i = !0,
			o = ["destroy", "hide", "show", "toggle"];
		if ("object" == typeof t) return this.each(function() {
			var n, r = e(this);
			r.data("DateTimePicker") || (n = e.extend(!0, {}, e.fn.datetimepicker.defaults, t), r.data("DateTimePicker", a(r, n)))
		});
		if ("string" == typeof t) return this.each(function() {
			var a = e(this).data("DateTimePicker");
			if (!a) throw new Error('bootstrap-datetimepicker("' + t + '") method was called on an element that is not using DateTimePicker');
			n = a[t].apply(a, r), i = n === a
		}), i || e.inArray(t, o) > -1 ? this : n;
		throw new TypeError("Invalid arguments for DateTimePicker: " + t)
	}, e.fn.datetimepicker.defaults = {
		timeZone: "",
		format: !1,
		dayViewHeaderFormat: "MMMM YYYY",
		extraFormats: !1,
		stepping: 1,
		minDate: !1,
		maxDate: !1,
		useCurrent: !0,
		collapse: !0,
		locale: t.locale(),
		defaultDate: !1,
		disabledDates: !1,
		enabledDates: !1,
		icons: {
			time: "xi-clock-o",
			date: "xi-calendar-check",
			up: "xi-angle-up",
			down: "xi-angle-down",
			previous: "xi-angle-left",
			next: "xi-angle-right",
			today: "fa fa-crosshairs",
			clear: "xi-trash-o",
			close: "fa fa-times"
		},
		tooltips: {
			today: "Go to today",
			clear: "Clear selection",
			close: "Close the picker",
			selectMonth: "Select Month",
			prevMonth: "Previous Month",
			nextMonth: "Next Month",
			selectYear: "Select Year",
			prevYear: "Previous Year",
			nextYear: "Next Year",
			selectDecade: "Select Decade",
			prevDecade: "Previous Decade",
			nextDecade: "Next Decade",
			prevCentury: "Previous Century",
			nextCentury: "Next Century",
			pickHour: "Pick Hour",
			incrementHour: "Increment Hour",
			decrementHour: "Decrement Hour",
			pickMinute: "Pick Minute",
			incrementMinute: "Increment Minute",
			decrementMinute: "Decrement Minute",
			pickSecond: "Pick Second",
			incrementSecond: "Increment Second",
			decrementSecond: "Decrement Second",
			togglePeriod: "Toggle Period",
			selectTime: "Select Time"
		},
		useStrict: !1,
		sideBySide: !1,
		daysOfWeekDisabled: !1,
		calendarWeeks: !1,
		viewMode: "days",
		toolbarPlacement: "default",
		showTodayButton: !1,
		showClear: !1,
		showClose: !1,
		widgetPositioning: {
			horizontal: "auto",
			vertical: "auto"
		},
		widgetParent: null,
		ignoreReadonly: !1,
		keepOpen: !1,
		focusOnShow: !0,
		inline: !1,
		keepInvalid: !1,
		datepickerInput: ".datepickerinput",
		keyBinds: {
			up: function(e) {
				if (e) {
					var t = this.date() || this.getMoment();
					e.find(".datepicker").is(":visible") ? this.date(t.clone().subtract(7, "d")) : this.date(t.clone().add(this.stepping(), "m"))
				}
			},
			down: function(e) {
				if (e) {
					var t = this.date() || this.getMoment();
					e.find(".datepicker").is(":visible") ? this.date(t.clone().add(7, "d")) : this.date(t.clone().subtract(this.stepping(), "m"))
				} else this.show()
			},
			"control up": function(e) {
				if (e) {
					var t = this.date() || this.getMoment();
					e.find(".datepicker").is(":visible") ? this.date(t.clone().subtract(1, "y")) : this.date(t.clone().add(1, "h"))
				}
			},
			"control down": function(e) {
				if (e) {
					var t = this.date() || this.getMoment();
					e.find(".datepicker").is(":visible") ? this.date(t.clone().add(1, "y")) : this.date(t.clone().subtract(1, "h"))
				}
			},
			left: function(e) {
				if (e) {
					var t = this.date() || this.getMoment();
					e.find(".datepicker").is(":visible") && this.date(t.clone().subtract(1, "d"))
				}
			},
			right: function(e) {
				if (e) {
					var t = this.date() || this.getMoment();
					e.find(".datepicker").is(":visible") && this.date(t.clone().add(1, "d"))
				}
			},
			pageUp: function(e) {
				if (e) {
					var t = this.date() || this.getMoment();
					e.find(".datepicker").is(":visible") && this.date(t.clone().subtract(1, "M"))
				}
			},
			pageDown: function(e) {
				if (e) {
					var t = this.date() || this.getMoment();
					e.find(".datepicker").is(":visible") && this.date(t.clone().add(1, "M"))
				}
			},
			enter: function() {
				this.hide()
			},
			escape: function() {
				this.hide()
			},
			"control space": function(e) {
				e && e.find(".timepicker").is(":visible") && e.find('.btn[data-action="togglePeriod"]').click()
			},
			t: function() {
				this.date(this.getMoment())
			},
			delete: function() {
				this.clear()
			}
		},
		debug: !1,
		allowInputToggle: !1,
		disabledTimeIntervals: !1,
		disabledHours: !1,
		enabledHours: !1,
		viewDate: !1
	}, e.fn.datetimepicker
});