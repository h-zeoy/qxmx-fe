const getUrlParams = (url: string):object => {
  let href:string = '';
  let params = [];
  href.indexOf('#') >= 0 ? href = href.substr(0, href.indexOf('#')) : '';
  if(url.indexOf('?')>-1){
    href = !!url ? url.split('?')[1] : window.location.href.split('?')[1];
    params = href.split('&');
  }
  const obj = {};
  for (let i = 0; i < params.length; i++) {
    let temp = params[i].split('=');
    obj[temp[0]] = decodeURIComponent(temp[1]);
  }
  return obj;
}
export default getUrlParams;