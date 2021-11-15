import downloadFile from "./downloadFile";
import getUrlParam from "./getUrlParam";
import * as util from "./util";
export * from "./util";
const FeSdsUtils = {
	...util,
	downloadFile,
	getUrlParam,
};

export { downloadFile, getUrlParam };

export default FeSdsUtils;
