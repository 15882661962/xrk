import {Platform, Alert} from 'react-native';
export default CodePush => {
  CodePush.sync(
    {
      installMode: CodePush.InstallMode.IMMEDIATE,
      updateDialog: {
        appendReleaseDescription: true,
        descriptionPrefix: '\n\n更新内容：\n',
        mandatoryContinueButtonLabel: '立即更新',
        mandatoryUpdateMessage:
          'An update is available that must be installed.',
        optionalIgnoreButtonLabel: '稍后',
        optionalInstallButtonLabel: '后台更新',
        optionalUpdateMessage: '有新版本了，是否更新？',
        title: '更新提示',
      },
      //   mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
      deploymentKey:
        Platform.OS === 'android'
          ? 'Z27hj_SXGNiqNpBYpua7tEJT9lzVorjLLKVTSd'
          : 'VXAAgts-O7ZvaciWe85nnBTZudLsDOlDoLu0fH',
    },
    //更新状态监听
    status => {
      let syncMessage;
      switch (status) {
        case CodePush.SyncStatus.CHECKING_FOR_UPDATE: // 检查更新
          syncMessage = 'Checking for update';
          break;
        case CodePush.SyncStatus.DOWNLOADING_PACKAGE: // 正在下载
          syncMessage = 'Downloading package';
          break;
        case CodePush.SyncStatus.AWAITING_USER_ACTION: // 等待用户操作
          syncMessage = 'Awaiting user action';
          break;
        case CodePush.SyncStatus.INSTALLING_UPDATE: // 下载更新
          syncMessage = 'Installing update';
          break;
        case CodePush.SyncStatus.UP_TO_DATE: // 已更新
          syncMessage = 'App up to date.';
          break;
        case CodePush.SyncStatus.UPDATE_IGNORED: // 忽略更新
          syncMessage = 'Update cancelled by user';
          break;
        case CodePush.SyncStatus.UPDATE_INSTALLED:
          syncMessage = 'Update installed and will be applied on restart.';
          break;
        case CodePush.SyncStatus.UNKNOWN_ERROR: // 未知错误
          syncMessage = 'An unknown error occurred';
          break;
      }
    },
    //监听下载过程
    ({receivedBytes, totalBytes}) => {
      // const progress = parseFloat(receivedBytes / totalBytes).toFixed(2)
      if (receivedBytes >= totalBytes) {
        CodePush.allowRestart();
      }
    },
  );
};
