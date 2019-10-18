<template></template>
<script lang="ts">
import { Vue, Component, Emit } from 'vue-property-decorator';
import { getSession, setSession } from '../libs/storage';
import getUrlParams from '../libs/getUrlParams';

@Component
export default class StartLearn extends Vue {

  created() {
    if (!getSession('openid')) {
      this.handleAuthorization();
    } else {
      console.log('openid存在判断购买 跳转购买页或引导用户下载app软文');
    }
  }

  handleAuthorization() {
    const urlObj = getUrlParams('');
    const appId: string = 'wx23dce3ab5cf823f8';
    const url = encodeURI(window.location.href);
    if (urlObj['code']) {
      console.log(urlObj['code']);
      // 根据code 请求接口获取openid
    } else {
      // window.location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appId+"&redirect_uri="+url+"&response_type=code&scope=snsapi_base#wechat_redirect";
    }
  }
}
</script>
