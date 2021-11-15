const downloadFile = (fileUrl: string) => {
  try {
    let a = document.createElement("a");
    let url = fileUrl
    const hasProtocol = /http[s]{0,1}:\/\/([\w.]+\/?)\S*/.test(fileUrl)
    if (!hasProtocol && window.location.origin === 'http://sds.sf-express.com') {
      url = 'https://sds.sf-express.com' + fileUrl
    }
    a.setAttribute('href', url)
    a.setAttribute('download', '')
    document.body.appendChild(a)
    a.click();
    document.body.removeChild(a)
  } catch {
    window.open(fileUrl)
  }
};

export default downloadFile;
