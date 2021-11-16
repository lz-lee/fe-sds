import BackArrow from "./icons/common_bgarrows.svg";
import cdbi from "./icons/cdbi.png";

interface FeSdsIcons {
	[key: string]: string | ((prop: any) => any);
}
const FeSdsIcons: FeSdsIcons = {
	BackArrow,
	cdbi,
};

export { BackArrow, cdbi };

export default FeSdsIcons;
