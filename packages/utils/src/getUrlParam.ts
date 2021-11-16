const getUrlParam = (key: string) => {
  const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
  const paramsLi: any = window.location.search.substr(1).match(reg);
  if (paramsLi !== null && paramsLi !== '' && paramsLi !== undefined) {
    const param = unescape(paramsLi[2]);
    return param;
  }
  return ''
}

export default getUrlParam