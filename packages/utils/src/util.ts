/**
 * 获取某周是本年的第几周
 * date1是当前日期
 * date2是当年第一天
 * d是当前日期是今年第多少天
 * 用d + 当前年的第一天的周差距的和在除以7就是本年第几周
 */
export function getYearWeek(dataInput: any) {
	let a = dataInput.getFullYear();
	let b = dataInput.getMonth() + 1;
	let c = dataInput.getDate();
	let date1 = new Date(a, parseInt(b) - 1, c);
	let date2 = new Date(a, 0, 1);
	let d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
	return Math.ceil((d + (date2.getDay() + 1 - 1)) / 7);
}

export function getParamFromSearch() {
	let search = window.location.search.substr(1);
	let vars = search.split("&");
	let parameters: any = {};
	vars.forEach((item) => {
		let temp = item.split("=");
		let key = decodeURIComponent(temp[0]);
		let val = decodeURIComponent(temp[1]);
		parameters[key] = val;
	});
	return parameters;
}

/**
 * @description 向数组中插入元素，返回数组，会改变原数组
 */
export function insert<T>(array: T[], index: number, ...value: T[]) {
	array.splice(index, 0, ...value);
	return array;
}
